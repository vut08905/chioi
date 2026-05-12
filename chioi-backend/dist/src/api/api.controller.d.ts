import { ApiService } from './api.service';
export declare class ApiController {
    private apiService;
    constructor(apiService: ApiService);
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
        user_id: number;
        phone: string;
        password_hash: string;
        full_name: string;
        avatar_url: string | null;
        role: string;
        status: string | null;
        updated_at: Date | null;
    })[]>;
    getTaskerHistory(req: any): Promise<({
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
                user_id: number;
                phone: string;
                password_hash: string;
                full_name: string;
                avatar_url: string | null;
                role: string;
                status: string | null;
                updated_at: Date | null;
            };
        } & {
            customer_id: number;
            default_address: string | null;
            loyalty_points: number | null;
        };
    } & {
        service_id: number;
        created_at: Date | null;
        status: string | null;
        updated_at: Date | null;
        tasker_id: number | null;
        order_id: number;
        order_code: string;
        customer_id: number;
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
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }>;
    updateTaskerStatus(req: any, isOnline: boolean): Promise<{
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }>;
    createTicket(req: any, body: any): Promise<{
        description: string;
        created_at: Date | null;
        user_id: number;
        status: string | null;
        updated_at: Date | null;
        order_id: number | null;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
        admin_id: number | null;
    }>;
    approveTaskerKyc(req: any, id: number, status: string): Promise<{
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: import("@prisma/client-runtime-utils").Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }>;
    createService(body: any): Promise<{
        service_id: number;
        name: string;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
    } | undefined>;
    updateService(id: number, body: any): Promise<{
        service_id: number;
        name: string;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
    } | undefined>;
    deleteService(id: number): Promise<{
        service_id: number;
        name: string;
        description: string | null;
        base_price: import("@prisma/client-runtime-utils").Decimal;
        icon_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
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
        description: string | null;
        created_at: Date | null;
        status: string | null;
        order_id: number | null;
        transaction_id: number;
        transaction_code: string;
        wallet_id: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        type: string;
    }>;
    resolveTicket(req: any, id: number, status: string): Promise<{
        description: string;
        created_at: Date | null;
        user_id: number;
        status: string | null;
        updated_at: Date | null;
        order_id: number | null;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
        admin_id: number | null;
    }>;
    getAdminUsers(): Promise<{
        created_at: Date | null;
        user_id: number;
        phone: string;
        full_name: string;
        role: string;
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
    }[]>;
    getAdminOrders(): Promise<{
        service_id: number;
        created_at: Date | null;
        status: string | null;
        updated_at: Date | null;
        tasker_id: number | null;
        order_id: number;
        order_code: string;
        customer_id: number;
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
        service_id: number;
        created_at: Date | null;
        status: string | null;
        updated_at: Date | null;
        tasker_id: number | null;
        order_id: number;
        order_code: string;
        customer_id: number;
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
            created_at: Date | null;
            user_id: number;
            phone: string;
            password_hash: string;
            full_name: string;
            avatar_url: string | null;
            role: string;
            status: string | null;
            updated_at: Date | null;
        };
    } & {
        description: string;
        created_at: Date | null;
        user_id: number;
        status: string | null;
        updated_at: Date | null;
        order_id: number | null;
        ticket_code: string;
        subject: string;
        priority: string | null;
        ticket_id: number;
        admin_id: number | null;
    })[]>;
    getAdminWithdrawals(): Promise<{
        description: string | null;
        created_at: Date | null;
        status: string | null;
        order_id: number | null;
        transaction_id: number;
        transaction_code: string;
        wallet_id: number;
        amount: import("@prisma/client-runtime-utils").Decimal;
        type: string;
    }[]>;
}
