"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ApiService = class ApiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getServices() {
        return this.prisma.services.findMany({ where: { is_active: true } });
    }
    async getPackages() {
        return this.prisma.family_packages.findMany({ where: { is_active: true } });
    }
    async getTaskerHistory(taskerId) {
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
    async submitKyc(taskerId, kycData) {
        return this.prisma.taskers.update({
            where: { tasker_id: taskerId },
            data: { kyc_status: 'PENDING_APPROVAL' },
        });
    }
    async updateTaskerStatus(taskerId, isOnline) {
        return this.prisma.taskers.update({
            where: { tasker_id: taskerId },
            data: { is_online: isOnline },
        });
    }
    async createTicket(userId, subject, description) {
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
    async approveTaskerKyc(adminId, taskerId, status) {
        const tasker = await this.prisma.taskers.update({
            where: { tasker_id: taskerId },
            data: { kyc_status: status },
        });
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
    async manageService(action, data, serviceId) {
        if (action === 'CREATE') {
            return this.prisma.services.create({ data });
        }
        else if (action === 'UPDATE') {
            return this.prisma.services.update({ where: { service_id: serviceId }, data });
        }
        else if (action === 'DELETE') {
            return this.prisma.services.delete({ where: { service_id: serviceId } });
        }
    }
    async managePackage(action, data, packageId) {
        if (action === 'CREATE') {
            return this.prisma.family_packages.create({ data });
        }
        else if (action === 'UPDATE') {
            return this.prisma.family_packages.update({ where: { package_id: packageId }, data });
        }
        else if (action === 'DELETE') {
            return this.prisma.family_packages.delete({ where: { package_id: packageId } });
        }
    }
    async approveWithdrawal(adminId, transactionId, status) {
        const transaction = await this.prisma.transactions.update({
            where: { transaction_id: transactionId },
            data: { status },
        });
        if (status === 'FAILED') {
            await this.prisma.wallets.update({
                where: { wallet_id: transaction.wallet_id },
                data: { balance: { increment: transaction.amount } }
            });
        }
        return transaction;
    }
    async resolveTicket(adminId, ticketId, status) {
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
                taskers: true
            }
        });
    }
    async getAdminOrders() {
        return this.prisma.orders.findMany({
            orderBy: { created_at: 'desc' },
            take: 100
        });
    }
    async adminCancelOrder(adminId, orderId) {
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
};
exports.ApiService = ApiService;
exports.ApiService = ApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApiService);
//# sourceMappingURL=api.service.js.map