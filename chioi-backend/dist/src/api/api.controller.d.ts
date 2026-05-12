import { ApiService } from './api.service';
export declare class ApiController {
    private apiService;
    constructor(apiService: ApiService);
    getServices(): Promise<{
        created_at: Date | null;
        name: string;
        service_id: number;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
    }[]>;
    getPackages(): Promise<{
        name: string;
        description: string | null;
        is_active: boolean | null;
        package_id: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        duration_days: number | null;
    }[]>;
    getActiveTaskers(): Promise<({
        taskers: {
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
            tasker_id: number;
        } | null;
    } & {
        user_id: number;
        phone: string;
        password_hash: string;
        full_name: string;
        avatar_url: string | null;
        role: string;
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    })[]>;
    getTaskerHistory(req: any): Promise<({
        customers: {
            users: {
                user_id: number;
                phone: string;
                password_hash: string;
                full_name: string;
                avatar_url: string | null;
                role: string;
                status: string | null;
                created_at: Date | null;
                updated_at: Date | null;
            };
        } & {
            default_address: string | null;
            loyalty_points: number | null;
            customer_id: number;
        };
        services: {
            created_at: Date | null;
            name: string;
            service_id: number;
            description: string | null;
            base_price: import("@prisma/client-runtime-utils").Decimal;
            icon_url: string | null;
            is_active: boolean | null;
        };
    } & {
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        service_id: number;
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        voucher_id: number | null;
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
    })[]>;
    getAdminDashboard(): Promise<{
        total_orders: number;
        total_revenue: number | import("@prisma/client-runtime-utils").Decimal;
    }>;
    submitKyc(req: any, body: any): Promise<{
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
        tasker_id: number;
    }>;
    updateTaskerStatus(req: any, isOnline: boolean): Promise<{
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
        tasker_id: number;
    }>;
    createTicket(req: any, body: any): Promise<{
        user_id: number;
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        description: string;
        order_id: number | null;
        admin_id: number | null;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
    }>;
    approveTaskerKyc(req: any, id: number, status: string): Promise<{
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
        tasker_id: number;
    }>;
    createService(body: any): Promise<{
        created_at: Date | null;
        name: string;
        service_id: number;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
    } | undefined>;
    updateService(id: number, body: any): Promise<{
        created_at: Date | null;
        name: string;
        service_id: number;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
    } | undefined>;
    deleteService(id: number): Promise<{
        created_at: Date | null;
        name: string;
        service_id: number;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
    } | undefined>;
    createPackage(body: any): Promise<{
        name: string;
        description: string | null;
        is_active: boolean | null;
        package_id: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        duration_days: number | null;
    } | undefined>;
    updatePackage(id: number, body: any): Promise<{
        name: string;
        description: string | null;
        is_active: boolean | null;
        package_id: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        duration_days: number | null;
    } | undefined>;
    deletePackage(id: number): Promise<{
        name: string;
        description: string | null;
        is_active: boolean | null;
        package_id: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        duration_days: number | null;
    } | undefined>;
    approveWithdrawal(req: any, id: number, status: string): Promise<{
        status: string | null;
        created_at: Date | null;
        wallet_id: number;
        description: string | null;
        order_id: number | null;
        type: string;
        transaction_id: number;
        transaction_code: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
    }>;
    resolveTicket(req: any, id: number, status: string): Promise<{
        user_id: number;
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        description: string;
        order_id: number | null;
        admin_id: number | null;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
    }>;
    getAdminUsers(): Promise<{
        user_id: number;
        phone: string;
        full_name: string;
        role: string;
        status: string | null;
        created_at: Date | null;
        taskers: {
            bio: string | null;
            kyc_status: string | null;
            average_rating: import("@prisma/client-runtime-utils").Decimal | null;
            total_jobs: number | null;
            is_online: boolean | null;
            last_heartbeat: Date | null;
            tasker_id: number;
        } | null;
    }[]>;
    getAdminOrders(): Promise<{
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        service_id: number;
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        voucher_id: number | null;
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
    }[]>;
    adminCancelOrder(req: any, id: number): Promise<{
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        service_id: number;
        order_id: number;
        order_code: string;
        customer_id: number;
        tasker_id: number | null;
        voucher_id: number | null;
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
    }>;
    getAdminTickets(): Promise<({
        users: {
            user_id: number;
            phone: string;
            password_hash: string;
            full_name: string;
            avatar_url: string | null;
            role: string;
            status: string | null;
            created_at: Date | null;
            updated_at: Date | null;
        };
    } & {
        user_id: number;
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        description: string;
        order_id: number | null;
        admin_id: number | null;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
    })[]>;
    getAdminWithdrawals(): Promise<{
        status: string | null;
        created_at: Date | null;
        wallet_id: number;
        description: string | null;
        order_id: number | null;
        type: string;
        transaction_id: number;
        transaction_code: string;
        amount: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
}
