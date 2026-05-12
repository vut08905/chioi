import { PrismaService } from '../prisma/prisma.service';
export declare class ApiService {
    private prisma;
    constructor(prisma: PrismaService);
    getServices(): Promise<{
        service_id: number;
        name: string;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
    }[]>;
    getPackages(): Promise<{
        name: string;
        description: string | null;
        is_active: boolean | null;
        package_id: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        duration_days: number | null;
    }[]>;
    getTaskerHistory(taskerId: number): Promise<({
        services: {
            service_id: number;
            name: string;
            description: string | null;
            base_price: import("@prisma/client-runtime-utils").Decimal;
            icon_url: string | null;
            is_active: boolean | null;
            created_at: Date | null;
        };
        customers: {
            users: {
                created_at: Date | null;
                status: string | null;
                updated_at: Date | null;
                user_id: number;
                phone: string;
                password_hash: string;
                full_name: string;
                avatar_url: string | null;
                role: string;
            };
        } & {
            customer_id: number;
            default_address: string | null;
            loyalty_points: number | null;
        };
    } & {
        service_id: number;
        created_at: Date | null;
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        updated_at: Date | null;
    })[]>;
    getActiveTaskers(): Promise<({
        taskers: {
            tasker_id: number;
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
        } | null;
    } & {
        created_at: Date | null;
        status: string | null;
        updated_at: Date | null;
        user_id: number;
        phone: string;
        password_hash: string;
        full_name: string;
        avatar_url: string | null;
        role: string;
    })[]>;
    getAdminDashboard(): Promise<{
        total_orders: number;
        total_revenue: number | import("@prisma/client-runtime-utils").Decimal;
    }>;
    submitKyc(taskerId: number, kycData: any): Promise<{
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }>;
    updateTaskerStatus(taskerId: number, isOnline: boolean): Promise<{
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }>;
    createTicket(userId: number, subject: string, description: string): Promise<{
        description: string;
        created_at: Date | null;
        order_id: number | null;
        status: string | null;
        updated_at: Date | null;
        user_id: number;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
        admin_id: number | null;
    }>;
    approveTaskerKyc(adminId: number, taskerId: number, status: string): Promise<{
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }>;
    manageService(action: string, data: any, serviceId?: number): Promise<{
        service_id: number;
        name: string;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
    } | undefined>;
    managePackage(action: string, data: any, packageId?: number): Promise<{
        name: string;
        description: string | null;
        is_active: boolean | null;
        package_id: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        duration_days: number | null;
    } | undefined>;
    approveWithdrawal(adminId: number, transactionId: number, status: string): Promise<{
        description: string | null;
        created_at: Date | null;
        order_id: number | null;
        status: string | null;
        transaction_id: number;
        transaction_code: string;
        wallet_id: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        type: string;
    }>;
    resolveTicket(adminId: number, ticketId: number, status: string): Promise<{
        description: string;
        created_at: Date | null;
        order_id: number | null;
        status: string | null;
        updated_at: Date | null;
        user_id: number;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
        admin_id: number | null;
    }>;
    getAdminUsers(): Promise<{
        created_at: Date | null;
        status: string | null;
        taskers: {
            tasker_id: number;
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
        } | null;
        user_id: number;
        phone: string;
        full_name: string;
        role: string;
    }[]>;
    getAdminOrders(): Promise<{
        service_id: number;
        created_at: Date | null;
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        updated_at: Date | null;
    }[]>;
    adminCancelOrder(adminId: number, orderId: number): Promise<{
        service_id: number;
        created_at: Date | null;
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        voucher_id: number | null;
        status: string | null;
        scheduled_time: Date;
        address: string;
        total_price: import("@prisma/client-runtime-utils").Decimal;
        discount_amount: import("@prisma/client-runtime-utils").Decimal | null;
        tasker_earnings: import("@prisma/client-runtime-utils").Decimal;
        platform_fee: import("@prisma/client-runtime-utils").Decimal;
        payment_method: string | null;
        payment_status: string | null;
        notes: string | null;
        cancel_reason: string | null;
        updated_at: Date | null;
    }>;
    getAdminTickets(): Promise<({
        users: {
            created_at: Date | null;
            status: string | null;
            updated_at: Date | null;
            user_id: number;
            phone: string;
            password_hash: string;
            full_name: string;
            avatar_url: string | null;
            role: string;
        };
    } & {
        description: string;
        created_at: Date | null;
        order_id: number | null;
        status: string | null;
        updated_at: Date | null;
        user_id: number;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
        admin_id: number | null;
    })[]>;
    getAdminWithdrawals(): Promise<{
        description: string | null;
        created_at: Date | null;
        order_id: number | null;
        status: string | null;
        transaction_id: number;
        transaction_code: string;
        wallet_id: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        type: string;
    }[]>;
}
