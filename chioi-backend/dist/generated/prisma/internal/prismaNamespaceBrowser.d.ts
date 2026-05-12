import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly admin_audit_logs: "admin_audit_logs";
    readonly admins: "admins";
    readonly customer_packages: "customer_packages";
    readonly customers: "customers";
    readonly family_packages: "family_packages";
    readonly messages: "messages";
    readonly notifications: "notifications";
    readonly order_interventions: "order_interventions";
    readonly order_status_history: "order_status_history";
    readonly orders: "orders";
    readonly reviews: "reviews";
    readonly services: "services";
    readonly spatial_ref_sys: "spatial_ref_sys";
    readonly support_tickets: "support_tickets";
    readonly tasker_services: "tasker_services";
    readonly taskers: "taskers";
    readonly transactions: "transactions";
    readonly users: "users";
    readonly vouchers: "vouchers";
    readonly wallets: "wallets";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Admin_audit_logsScalarFieldEnum: {
    readonly log_id: "log_id";
    readonly admin_id: "admin_id";
    readonly action: "action";
    readonly target_table: "target_table";
    readonly target_id: "target_id";
    readonly old_data: "old_data";
    readonly new_data: "new_data";
    readonly ip_address: "ip_address";
    readonly created_at: "created_at";
};
export type Admin_audit_logsScalarFieldEnum = (typeof Admin_audit_logsScalarFieldEnum)[keyof typeof Admin_audit_logsScalarFieldEnum];
export declare const AdminsScalarFieldEnum: {
    readonly admin_id: "admin_id";
    readonly department: "department";
    readonly access_level: "access_level";
};
export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum];
export declare const Customer_packagesScalarFieldEnum: {
    readonly customer_package_id: "customer_package_id";
    readonly customer_id: "customer_id";
    readonly package_id: "package_id";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Customer_packagesScalarFieldEnum = (typeof Customer_packagesScalarFieldEnum)[keyof typeof Customer_packagesScalarFieldEnum];
export declare const CustomersScalarFieldEnum: {
    readonly customer_id: "customer_id";
    readonly default_address: "default_address";
    readonly loyalty_points: "loyalty_points";
};
export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum];
export declare const Family_packagesScalarFieldEnum: {
    readonly package_id: "package_id";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly duration_days: "duration_days";
    readonly is_active: "is_active";
};
export type Family_packagesScalarFieldEnum = (typeof Family_packagesScalarFieldEnum)[keyof typeof Family_packagesScalarFieldEnum];
export declare const MessagesScalarFieldEnum: {
    readonly message_id: "message_id";
    readonly order_id: "order_id";
    readonly sender_id: "sender_id";
    readonly receiver_id: "receiver_id";
    readonly content: "content";
    readonly is_read: "is_read";
    readonly created_at: "created_at";
};
export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly notification_id: "notification_id";
    readonly user_id: "user_id";
    readonly title: "title";
    readonly content: "content";
    readonly is_read: "is_read";
    readonly created_at: "created_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const Order_interventionsScalarFieldEnum: {
    readonly intervention_id: "intervention_id";
    readonly order_id: "order_id";
    readonly admin_id: "admin_id";
    readonly action_type: "action_type";
    readonly reason: "reason";
    readonly created_at: "created_at";
};
export type Order_interventionsScalarFieldEnum = (typeof Order_interventionsScalarFieldEnum)[keyof typeof Order_interventionsScalarFieldEnum];
export declare const Order_status_historyScalarFieldEnum: {
    readonly history_id: "history_id";
    readonly order_id: "order_id";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Order_status_historyScalarFieldEnum = (typeof Order_status_historyScalarFieldEnum)[keyof typeof Order_status_historyScalarFieldEnum];
export declare const OrdersScalarFieldEnum: {
    readonly order_id: "order_id";
    readonly order_code: "order_code";
    readonly customer_id: "customer_id";
    readonly tasker_id: "tasker_id";
    readonly service_id: "service_id";
    readonly voucher_id: "voucher_id";
    readonly status: "status";
    readonly scheduled_time: "scheduled_time";
    readonly address: "address";
    readonly total_price: "total_price";
    readonly discount_amount: "discount_amount";
    readonly tasker_earnings: "tasker_earnings";
    readonly platform_fee: "platform_fee";
    readonly payment_method: "payment_method";
    readonly payment_status: "payment_status";
    readonly notes: "notes";
    readonly cancel_reason: "cancel_reason";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly review_id: "review_id";
    readonly order_id: "order_id";
    readonly customer_id: "customer_id";
    readonly tasker_id: "tasker_id";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly created_at: "created_at";
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const ServicesScalarFieldEnum: {
    readonly service_id: "service_id";
    readonly name: "name";
    readonly description: "description";
    readonly base_price: "base_price";
    readonly icon_url: "icon_url";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum];
export declare const Spatial_ref_sysScalarFieldEnum: {
    readonly srid: "srid";
    readonly auth_name: "auth_name";
    readonly auth_srid: "auth_srid";
    readonly srtext: "srtext";
    readonly proj4text: "proj4text";
};
export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum];
export declare const Support_ticketsScalarFieldEnum: {
    readonly ticket_id: "ticket_id";
    readonly ticket_code: "ticket_code";
    readonly user_id: "user_id";
    readonly admin_id: "admin_id";
    readonly order_id: "order_id";
    readonly subject: "subject";
    readonly description: "description";
    readonly status: "status";
    readonly priority: "priority";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Support_ticketsScalarFieldEnum = (typeof Support_ticketsScalarFieldEnum)[keyof typeof Support_ticketsScalarFieldEnum];
export declare const Tasker_servicesScalarFieldEnum: {
    readonly tasker_id: "tasker_id";
    readonly service_id: "service_id";
    readonly status: "status";
};
export type Tasker_servicesScalarFieldEnum = (typeof Tasker_servicesScalarFieldEnum)[keyof typeof Tasker_servicesScalarFieldEnum];
export declare const TaskersScalarFieldEnum: {
    readonly tasker_id: "tasker_id";
    readonly bio: "bio";
    readonly kyc_status: "kyc_status";
    readonly average_rating: "average_rating";
    readonly total_jobs: "total_jobs";
    readonly is_online: "is_online";
    readonly last_heartbeat: "last_heartbeat";
};
export type TaskersScalarFieldEnum = (typeof TaskersScalarFieldEnum)[keyof typeof TaskersScalarFieldEnum];
export declare const TransactionsScalarFieldEnum: {
    readonly transaction_id: "transaction_id";
    readonly transaction_code: "transaction_code";
    readonly wallet_id: "wallet_id";
    readonly amount: "amount";
    readonly type: "type";
    readonly status: "status";
    readonly order_id: "order_id";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly phone: "phone";
    readonly password_hash: "password_hash";
    readonly full_name: "full_name";
    readonly avatar_url: "avatar_url";
    readonly role: "role";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const VouchersScalarFieldEnum: {
    readonly voucher_id: "voucher_id";
    readonly code: "code";
    readonly discount_amount: "discount_amount";
    readonly conditions: "conditions";
    readonly valid_from: "valid_from";
    readonly valid_until: "valid_until";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum];
export declare const WalletsScalarFieldEnum: {
    readonly wallet_id: "wallet_id";
    readonly user_id: "user_id";
    readonly balance: "balance";
    readonly updated_at: "updated_at";
};
export type WalletsScalarFieldEnum = (typeof WalletsScalarFieldEnum)[keyof typeof WalletsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
