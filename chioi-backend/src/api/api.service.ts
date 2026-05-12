import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ApiService {
  constructor(private prisma: PrismaService) {}

  async getServices() {
    return this.prisma.services.findMany({ where: { is_active: true } });
  }

  async getPackages() {
    return this.prisma.family_packages.findMany({ where: { is_active: true } });
  }

  async getTaskerHistory(taskerId: number) {
    return this.prisma.orders.findMany({
      where: { tasker_id: taskerId },
      include: { services: true, customers: { include: { users: true } } },
      orderBy: { created_at: 'desc' },
    });
  }

  async getActiveTaskers() {
    return this.prisma.users.findMany({
      where: { role: 'TASKER', taskers: { is_online: true, kyc_status: 'VERIFIED' } },
      include: { taskers: true },
      take: 10,
    });
  }

  async getAdminDashboard() {
    const totalOrders = await this.prisma.orders.count();
    const totalRevenueResult = await this.prisma.orders.aggregate({
      _sum: { total_price: true },
      where: { status: 'COMPLETED' },
    });
    
    return {
      total_orders: totalOrders,
      total_revenue: totalRevenueResult._sum.total_price || 0,
    };
  }

  // --- Tasker APIs ---
  async submitKyc(taskerId: number, kycData: any) {
    return this.prisma.taskers.update({
      where: { tasker_id: taskerId },
      data: { kyc_status: 'PENDING_APPROVAL' },
    });
  }

  async updateTaskerStatus(taskerId: number, isOnline: boolean) {
    return this.prisma.taskers.update({
      where: { tasker_id: taskerId },
      data: { is_online: isOnline },
    });
  }

  // --- Support APIs ---
  async createTicket(userId: number, subject: string, description: string) {
    return this.prisma.support_tickets.create({
      data: {
        ticket_code: `TCK${Date.now()}`,
        user_id: userId,
        subject,
        description,
        status: 'OPEN',
      },
    });
  }

  // --- Admin APIs ---
  async approveTaskerKyc(adminId: number, taskerId: number, status: string) {
    const tasker = await this.prisma.taskers.update({
      where: { tasker_id: taskerId },
      data: { kyc_status: status }, // 'VERIFIED' or 'REJECTED'
    });
    
    // Log admin action
    await this.prisma.admin_audit_logs.create({
      data: {
        admin_id: adminId,
        action: 'APPROVE_KYC',
        target_table: 'taskers',
        target_id: taskerId,
        new_data: { kyc_status: status }
      }
    });

    return tasker;
  }

  async manageService(action: string, data: any, serviceId?: number) {
    if (action === 'CREATE') {
      return this.prisma.services.create({ data });
    } else if (action === 'UPDATE') {
      return this.prisma.services.update({ where: { service_id: serviceId }, data });
    } else if (action === 'DELETE') {
      return this.prisma.services.delete({ where: { service_id: serviceId } });
    }
  }

  async managePackage(action: string, data: any, packageId?: number) {
    if (action === 'CREATE') {
      return this.prisma.family_packages.create({ data });
    } else if (action === 'UPDATE') {
      return this.prisma.family_packages.update({ where: { package_id: packageId }, data });
    } else if (action === 'DELETE') {
      return this.prisma.family_packages.delete({ where: { package_id: packageId } });
    }
  }

  async approveWithdrawal(adminId: number, transactionId: number, status: string) {
    // status should be 'COMPLETED' or 'FAILED'
    const transaction = await this.prisma.transactions.update({
      where: { transaction_id: transactionId },
      data: { status },
    });

    if (status === 'FAILED') {
      // refund the wallet
      await this.prisma.wallets.update({
        where: { wallet_id: transaction.wallet_id },
        data: { balance: { increment: transaction.amount } }
      });
    }

    return transaction;
  }

  async resolveTicket(adminId: number, ticketId: number, status: string) {
    return this.prisma.support_tickets.update({
      where: { ticket_id: ticketId },
      data: { status, admin_id: adminId, updated_at: new Date() }
    });
  }

  async getAdminUsers() {
    return this.prisma.users.findMany({
      select: { 
        user_id: true, 
        phone: true, 
        full_name: true, 
        role: true, 
        status: true, 
        created_at: true,
        taskers: true // Include tasker relation
      }
    });
  }

  async getAdminOrders() {
    return this.prisma.orders.findMany({
      orderBy: { created_at: 'desc' },
      take: 100 // limit for performance
    });
  }

  async adminCancelOrder(adminId: number, orderId: number) {
    const order = await this.prisma.orders.update({
      where: { order_id: orderId },
      data: { status: 'CANCELLED', updated_at: new Date() }
    });

    await this.prisma.admin_audit_logs.create({
      data: {
        admin_id: adminId,
        action: 'FORCE_CANCEL_ORDER',
        target_table: 'orders',
        target_id: orderId,
        new_data: { status: 'CANCELLED' }
      }
    });

    return order;
  }

  async getAdminTickets() {
    return this.prisma.support_tickets.findMany({
      include: { users: true },
      orderBy: { created_at: 'desc' }
    });
  }

  async getAdminWithdrawals() {
    return this.prisma.transactions.findMany({
      where: { type: 'WITHDRAWAL' },
      orderBy: { created_at: 'desc' }
    });
  }
}
