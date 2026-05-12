"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.WalletsScalarFieldEnum = exports.VouchersScalarFieldEnum = exports.UsersScalarFieldEnum = exports.TransactionsScalarFieldEnum = exports.TaskersScalarFieldEnum = exports.Tasker_servicesScalarFieldEnum = exports.Support_ticketsScalarFieldEnum = exports.Spatial_ref_sysScalarFieldEnum = exports.ServicesScalarFieldEnum = exports.ReviewsScalarFieldEnum = exports.OrdersScalarFieldEnum = exports.Order_status_historyScalarFieldEnum = exports.Order_interventionsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.MessagesScalarFieldEnum = exports.Family_packagesScalarFieldEnum = exports.CustomersScalarFieldEnum = exports.Customer_packagesScalarFieldEnum = exports.AdminsScalarFieldEnum = exports.Admin_audit_logsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    admin_audit_logs: 'admin_audit_logs',
    admins: 'admins',
    customer_packages: 'customer_packages',
    customers: 'customers',
    family_packages: 'family_packages',
    messages: 'messages',
    notifications: 'notifications',
    order_interventions: 'order_interventions',
    order_status_history: 'order_status_history',
    orders: 'orders',
    reviews: 'reviews',
    services: 'services',
    spatial_ref_sys: 'spatial_ref_sys',
    support_tickets: 'support_tickets',
    tasker_services: 'tasker_services',
    taskers: 'taskers',
    transactions: 'transactions',
    users: 'users',
    vouchers: 'vouchers',
    wallets: 'wallets'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Admin_audit_logsScalarFieldEnum = {
    log_id: 'log_id',
    admin_id: 'admin_id',
    action: 'action',
    target_table: 'target_table',
    target_id: 'target_id',
    old_data: 'old_data',
    new_data: 'new_data',
    ip_address: 'ip_address',
    created_at: 'created_at'
};
exports.AdminsScalarFieldEnum = {
    admin_id: 'admin_id',
    department: 'department',
    access_level: 'access_level'
};
exports.Customer_packagesScalarFieldEnum = {
    customer_package_id: 'customer_package_id',
    customer_id: 'customer_id',
    package_id: 'package_id',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    created_at: 'created_at'
};
exports.CustomersScalarFieldEnum = {
    customer_id: 'customer_id',
    default_address: 'default_address',
    loyalty_points: 'loyalty_points'
};
exports.Family_packagesScalarFieldEnum = {
    package_id: 'package_id',
    name: 'name',
    description: 'description',
    price: 'price',
    duration_days: 'duration_days',
    is_active: 'is_active'
};
exports.MessagesScalarFieldEnum = {
    message_id: 'message_id',
    order_id: 'order_id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    content: 'content',
    is_read: 'is_read',
    created_at: 'created_at'
};
exports.NotificationsScalarFieldEnum = {
    notification_id: 'notification_id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    is_read: 'is_read',
    created_at: 'created_at'
};
exports.Order_interventionsScalarFieldEnum = {
    intervention_id: 'intervention_id',
    order_id: 'order_id',
    admin_id: 'admin_id',
    action_type: 'action_type',
    reason: 'reason',
    created_at: 'created_at'
};
exports.Order_status_historyScalarFieldEnum = {
    history_id: 'history_id',
    order_id: 'order_id',
    status: 'status',
    created_at: 'created_at'
};
exports.OrdersScalarFieldEnum = {
    order_id: 'order_id',
    order_code: 'order_code',
    customer_id: 'customer_id',
    tasker_id: 'tasker_id',
    service_id: 'service_id',
    voucher_id: 'voucher_id',
    status: 'status',
    scheduled_time: 'scheduled_time',
    address: 'address',
    total_price: 'total_price',
    discount_amount: 'discount_amount',
    tasker_earnings: 'tasker_earnings',
    platform_fee: 'platform_fee',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    notes: 'notes',
    cancel_reason: 'cancel_reason',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ReviewsScalarFieldEnum = {
    review_id: 'review_id',
    order_id: 'order_id',
    customer_id: 'customer_id',
    tasker_id: 'tasker_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
};
exports.ServicesScalarFieldEnum = {
    service_id: 'service_id',
    name: 'name',
    description: 'description',
    base_price: 'base_price',
    icon_url: 'icon_url',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Spatial_ref_sysScalarFieldEnum = {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
};
exports.Support_ticketsScalarFieldEnum = {
    ticket_id: 'ticket_id',
    ticket_code: 'ticket_code',
    user_id: 'user_id',
    admin_id: 'admin_id',
    order_id: 'order_id',
    subject: 'subject',
    description: 'description',
    status: 'status',
    priority: 'priority',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Tasker_servicesScalarFieldEnum = {
    tasker_id: 'tasker_id',
    service_id: 'service_id',
    status: 'status'
};
exports.TaskersScalarFieldEnum = {
    tasker_id: 'tasker_id',
    bio: 'bio',
    kyc_status: 'kyc_status',
    average_rating: 'average_rating',
    total_jobs: 'total_jobs',
    is_online: 'is_online',
    last_heartbeat: 'last_heartbeat'
};
exports.TransactionsScalarFieldEnum = {
    transaction_id: 'transaction_id',
    transaction_code: 'transaction_code',
    wallet_id: 'wallet_id',
    amount: 'amount',
    type: 'type',
    status: 'status',
    order_id: 'order_id',
    description: 'description',
    created_at: 'created_at'
};
exports.UsersScalarFieldEnum = {
    user_id: 'user_id',
    phone: 'phone',
    password_hash: 'password_hash',
    full_name: 'full_name',
    avatar_url: 'avatar_url',
    role: 'role',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.VouchersScalarFieldEnum = {
    voucher_id: 'voucher_id',
    code: 'code',
    discount_amount: 'discount_amount',
    conditions: 'conditions',
    valid_from: 'valid_from',
    valid_until: 'valid_until',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.WalletsScalarFieldEnum = {
    wallet_id: 'wallet_id',
    user_id: 'user_id',
    balance: 'balance',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map