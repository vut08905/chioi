import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "admin_audit_logs" | "admins" | "customer_packages" | "customers" | "family_packages" | "messages" | "notifications" | "order_interventions" | "order_status_history" | "orders" | "reviews" | "services" | "spatial_ref_sys" | "support_tickets" | "tasker_services" | "taskers" | "transactions" | "users" | "vouchers" | "wallets";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        admin_audit_logs: {
            payload: Prisma.$admin_audit_logsPayload<ExtArgs>;
            fields: Prisma.admin_audit_logsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.admin_audit_logsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.admin_audit_logsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>;
                };
                findFirst: {
                    args: Prisma.admin_audit_logsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.admin_audit_logsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>;
                };
                findMany: {
                    args: Prisma.admin_audit_logsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>[];
                };
                create: {
                    args: Prisma.admin_audit_logsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>;
                };
                createMany: {
                    args: Prisma.admin_audit_logsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.admin_audit_logsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>[];
                };
                delete: {
                    args: Prisma.admin_audit_logsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>;
                };
                update: {
                    args: Prisma.admin_audit_logsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>;
                };
                deleteMany: {
                    args: Prisma.admin_audit_logsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.admin_audit_logsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.admin_audit_logsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>[];
                };
                upsert: {
                    args: Prisma.admin_audit_logsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$admin_audit_logsPayload>;
                };
                aggregate: {
                    args: Prisma.Admin_audit_logsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin_audit_logs>;
                };
                groupBy: {
                    args: Prisma.admin_audit_logsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Admin_audit_logsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.admin_audit_logsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Admin_audit_logsCountAggregateOutputType> | number;
                };
            };
        };
        admins: {
            payload: Prisma.$adminsPayload<ExtArgs>;
            fields: Prisma.adminsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.adminsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.adminsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>;
                };
                findFirst: {
                    args: Prisma.adminsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.adminsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>;
                };
                findMany: {
                    args: Prisma.adminsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>[];
                };
                create: {
                    args: Prisma.adminsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>;
                };
                createMany: {
                    args: Prisma.adminsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.adminsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>[];
                };
                delete: {
                    args: Prisma.adminsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>;
                };
                update: {
                    args: Prisma.adminsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>;
                };
                deleteMany: {
                    args: Prisma.adminsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.adminsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.adminsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>[];
                };
                upsert: {
                    args: Prisma.adminsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminsPayload>;
                };
                aggregate: {
                    args: Prisma.AdminsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmins>;
                };
                groupBy: {
                    args: Prisma.adminsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.adminsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminsCountAggregateOutputType> | number;
                };
            };
        };
        customer_packages: {
            payload: Prisma.$customer_packagesPayload<ExtArgs>;
            fields: Prisma.customer_packagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customer_packagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customer_packagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>;
                };
                findFirst: {
                    args: Prisma.customer_packagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customer_packagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>;
                };
                findMany: {
                    args: Prisma.customer_packagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>[];
                };
                create: {
                    args: Prisma.customer_packagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>;
                };
                createMany: {
                    args: Prisma.customer_packagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customer_packagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>[];
                };
                delete: {
                    args: Prisma.customer_packagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>;
                };
                update: {
                    args: Prisma.customer_packagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>;
                };
                deleteMany: {
                    args: Prisma.customer_packagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customer_packagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customer_packagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>[];
                };
                upsert: {
                    args: Prisma.customer_packagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customer_packagesPayload>;
                };
                aggregate: {
                    args: Prisma.Customer_packagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer_packages>;
                };
                groupBy: {
                    args: Prisma.customer_packagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Customer_packagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customer_packagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Customer_packagesCountAggregateOutputType> | number;
                };
            };
        };
        customers: {
            payload: Prisma.$customersPayload<ExtArgs>;
            fields: Prisma.customersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findFirst: {
                    args: Prisma.customersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findMany: {
                    args: Prisma.customersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                create: {
                    args: Prisma.customersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                createMany: {
                    args: Prisma.customersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                delete: {
                    args: Prisma.customersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                update: {
                    args: Prisma.customersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                deleteMany: {
                    args: Prisma.customersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                upsert: {
                    args: Prisma.customersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                aggregate: {
                    args: Prisma.CustomersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomers>;
                };
                groupBy: {
                    args: Prisma.customersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersCountAggregateOutputType> | number;
                };
            };
        };
        family_packages: {
            payload: Prisma.$family_packagesPayload<ExtArgs>;
            fields: Prisma.family_packagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.family_packagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.family_packagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>;
                };
                findFirst: {
                    args: Prisma.family_packagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.family_packagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>;
                };
                findMany: {
                    args: Prisma.family_packagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>[];
                };
                create: {
                    args: Prisma.family_packagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>;
                };
                createMany: {
                    args: Prisma.family_packagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.family_packagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>[];
                };
                delete: {
                    args: Prisma.family_packagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>;
                };
                update: {
                    args: Prisma.family_packagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>;
                };
                deleteMany: {
                    args: Prisma.family_packagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.family_packagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.family_packagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>[];
                };
                upsert: {
                    args: Prisma.family_packagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$family_packagesPayload>;
                };
                aggregate: {
                    args: Prisma.Family_packagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFamily_packages>;
                };
                groupBy: {
                    args: Prisma.family_packagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Family_packagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.family_packagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Family_packagesCountAggregateOutputType> | number;
                };
            };
        };
        messages: {
            payload: Prisma.$messagesPayload<ExtArgs>;
            fields: Prisma.messagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.messagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.messagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                findFirst: {
                    args: Prisma.messagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.messagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                findMany: {
                    args: Prisma.messagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>[];
                };
                create: {
                    args: Prisma.messagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                createMany: {
                    args: Prisma.messagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.messagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>[];
                };
                delete: {
                    args: Prisma.messagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                update: {
                    args: Prisma.messagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                deleteMany: {
                    args: Prisma.messagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.messagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.messagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>[];
                };
                upsert: {
                    args: Prisma.messagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$messagesPayload>;
                };
                aggregate: {
                    args: Prisma.MessagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessages>;
                };
                groupBy: {
                    args: Prisma.messagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.messagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessagesCountAggregateOutputType> | number;
                };
            };
        };
        notifications: {
            payload: Prisma.$notificationsPayload<ExtArgs>;
            fields: Prisma.notificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findFirst: {
                    args: Prisma.notificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findMany: {
                    args: Prisma.notificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                create: {
                    args: Prisma.notificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                createMany: {
                    args: Prisma.notificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                delete: {
                    args: Prisma.notificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                update: {
                    args: Prisma.notificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                upsert: {
                    args: Prisma.notificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotifications>;
                };
                groupBy: {
                    args: Prisma.notificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsCountAggregateOutputType> | number;
                };
            };
        };
        order_interventions: {
            payload: Prisma.$order_interventionsPayload<ExtArgs>;
            fields: Prisma.order_interventionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_interventionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_interventionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>;
                };
                findFirst: {
                    args: Prisma.order_interventionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_interventionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>;
                };
                findMany: {
                    args: Prisma.order_interventionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>[];
                };
                create: {
                    args: Prisma.order_interventionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>;
                };
                createMany: {
                    args: Prisma.order_interventionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_interventionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>[];
                };
                delete: {
                    args: Prisma.order_interventionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>;
                };
                update: {
                    args: Prisma.order_interventionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>;
                };
                deleteMany: {
                    args: Prisma.order_interventionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_interventionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_interventionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>[];
                };
                upsert: {
                    args: Prisma.order_interventionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_interventionsPayload>;
                };
                aggregate: {
                    args: Prisma.Order_interventionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_interventions>;
                };
                groupBy: {
                    args: Prisma.order_interventionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_interventionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_interventionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_interventionsCountAggregateOutputType> | number;
                };
            };
        };
        order_status_history: {
            payload: Prisma.$order_status_historyPayload<ExtArgs>;
            fields: Prisma.order_status_historyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_status_historyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_status_historyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                findFirst: {
                    args: Prisma.order_status_historyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_status_historyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                findMany: {
                    args: Prisma.order_status_historyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                create: {
                    args: Prisma.order_status_historyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                createMany: {
                    args: Prisma.order_status_historyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_status_historyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                delete: {
                    args: Prisma.order_status_historyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                update: {
                    args: Prisma.order_status_historyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                deleteMany: {
                    args: Prisma.order_status_historyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_status_historyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_status_historyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>[];
                };
                upsert: {
                    args: Prisma.order_status_historyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_status_historyPayload>;
                };
                aggregate: {
                    args: Prisma.Order_status_historyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_status_history>;
                };
                groupBy: {
                    args: Prisma.order_status_historyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_status_historyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_status_historyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_status_historyCountAggregateOutputType> | number;
                };
            };
        };
        orders: {
            payload: Prisma.$ordersPayload<ExtArgs>;
            fields: Prisma.ordersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ordersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findFirst: {
                    args: Prisma.ordersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findMany: {
                    args: Prisma.ordersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                create: {
                    args: Prisma.ordersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                createMany: {
                    args: Prisma.ordersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                delete: {
                    args: Prisma.ordersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                update: {
                    args: Prisma.ordersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                deleteMany: {
                    args: Prisma.ordersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ordersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                upsert: {
                    args: Prisma.ordersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                aggregate: {
                    args: Prisma.OrdersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrders>;
                };
                groupBy: {
                    args: Prisma.ordersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ordersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersCountAggregateOutputType> | number;
                };
            };
        };
        reviews: {
            payload: Prisma.$reviewsPayload<ExtArgs>;
            fields: Prisma.reviewsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.reviewsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findFirst: {
                    args: Prisma.reviewsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                findMany: {
                    args: Prisma.reviewsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                create: {
                    args: Prisma.reviewsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                createMany: {
                    args: Prisma.reviewsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                delete: {
                    args: Prisma.reviewsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                update: {
                    args: Prisma.reviewsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                deleteMany: {
                    args: Prisma.reviewsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.reviewsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>[];
                };
                upsert: {
                    args: Prisma.reviewsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reviewsPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReviews>;
                };
                groupBy: {
                    args: Prisma.reviewsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.reviewsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewsCountAggregateOutputType> | number;
                };
            };
        };
        services: {
            payload: Prisma.$servicesPayload<ExtArgs>;
            fields: Prisma.servicesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.servicesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>;
                };
                findFirst: {
                    args: Prisma.servicesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>;
                };
                findMany: {
                    args: Prisma.servicesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>[];
                };
                create: {
                    args: Prisma.servicesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>;
                };
                createMany: {
                    args: Prisma.servicesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>[];
                };
                delete: {
                    args: Prisma.servicesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>;
                };
                update: {
                    args: Prisma.servicesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>;
                };
                deleteMany: {
                    args: Prisma.servicesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.servicesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>[];
                };
                upsert: {
                    args: Prisma.servicesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$servicesPayload>;
                };
                aggregate: {
                    args: Prisma.ServicesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServices>;
                };
                groupBy: {
                    args: Prisma.servicesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.servicesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicesCountAggregateOutputType> | number;
                };
            };
        };
        spatial_ref_sys: {
            payload: Prisma.$spatial_ref_sysPayload<ExtArgs>;
            fields: Prisma.spatial_ref_sysFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>;
                };
                findFirst: {
                    args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>;
                };
                findMany: {
                    args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[];
                };
                create: {
                    args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>;
                };
                createMany: {
                    args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[];
                };
                delete: {
                    args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>;
                };
                update: {
                    args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>;
                };
                deleteMany: {
                    args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[];
                };
                upsert: {
                    args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>;
                };
                aggregate: {
                    args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSpatial_ref_sys>;
                };
                groupBy: {
                    args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Spatial_ref_sysGroupByOutputType>[];
                };
                count: {
                    args: Prisma.spatial_ref_sysCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Spatial_ref_sysCountAggregateOutputType> | number;
                };
            };
        };
        support_tickets: {
            payload: Prisma.$support_ticketsPayload<ExtArgs>;
            fields: Prisma.support_ticketsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.support_ticketsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.support_ticketsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                findFirst: {
                    args: Prisma.support_ticketsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.support_ticketsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                findMany: {
                    args: Prisma.support_ticketsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>[];
                };
                create: {
                    args: Prisma.support_ticketsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                createMany: {
                    args: Prisma.support_ticketsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.support_ticketsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>[];
                };
                delete: {
                    args: Prisma.support_ticketsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                update: {
                    args: Prisma.support_ticketsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                deleteMany: {
                    args: Prisma.support_ticketsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.support_ticketsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.support_ticketsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>[];
                };
                upsert: {
                    args: Prisma.support_ticketsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$support_ticketsPayload>;
                };
                aggregate: {
                    args: Prisma.Support_ticketsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupport_tickets>;
                };
                groupBy: {
                    args: Prisma.support_ticketsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Support_ticketsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.support_ticketsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Support_ticketsCountAggregateOutputType> | number;
                };
            };
        };
        tasker_services: {
            payload: Prisma.$tasker_servicesPayload<ExtArgs>;
            fields: Prisma.tasker_servicesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tasker_servicesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tasker_servicesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>;
                };
                findFirst: {
                    args: Prisma.tasker_servicesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tasker_servicesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>;
                };
                findMany: {
                    args: Prisma.tasker_servicesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>[];
                };
                create: {
                    args: Prisma.tasker_servicesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>;
                };
                createMany: {
                    args: Prisma.tasker_servicesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tasker_servicesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>[];
                };
                delete: {
                    args: Prisma.tasker_servicesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>;
                };
                update: {
                    args: Prisma.tasker_servicesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>;
                };
                deleteMany: {
                    args: Prisma.tasker_servicesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tasker_servicesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tasker_servicesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>[];
                };
                upsert: {
                    args: Prisma.tasker_servicesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tasker_servicesPayload>;
                };
                aggregate: {
                    args: Prisma.Tasker_servicesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTasker_services>;
                };
                groupBy: {
                    args: Prisma.tasker_servicesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tasker_servicesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tasker_servicesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tasker_servicesCountAggregateOutputType> | number;
                };
            };
        };
        taskers: {
            payload: Prisma.$taskersPayload<ExtArgs>;
            fields: Prisma.taskersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.taskersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.taskersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>;
                };
                findFirst: {
                    args: Prisma.taskersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.taskersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>;
                };
                findMany: {
                    args: Prisma.taskersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>[];
                };
                create: {
                    args: Prisma.taskersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>;
                };
                createMany: {
                    args: Prisma.taskersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.taskersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>[];
                };
                delete: {
                    args: Prisma.taskersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>;
                };
                update: {
                    args: Prisma.taskersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>;
                };
                deleteMany: {
                    args: Prisma.taskersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.taskersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.taskersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>[];
                };
                upsert: {
                    args: Prisma.taskersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$taskersPayload>;
                };
                aggregate: {
                    args: Prisma.TaskersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTaskers>;
                };
                groupBy: {
                    args: Prisma.taskersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.taskersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskersCountAggregateOutputType> | number;
                };
            };
        };
        transactions: {
            payload: Prisma.$transactionsPayload<ExtArgs>;
            fields: Prisma.transactionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.transactionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                findFirst: {
                    args: Prisma.transactionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                findMany: {
                    args: Prisma.transactionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>[];
                };
                create: {
                    args: Prisma.transactionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                createMany: {
                    args: Prisma.transactionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>[];
                };
                delete: {
                    args: Prisma.transactionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                update: {
                    args: Prisma.transactionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                deleteMany: {
                    args: Prisma.transactionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.transactionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>[];
                };
                upsert: {
                    args: Prisma.transactionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransactions>;
                };
                groupBy: {
                    args: Prisma.transactionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.transactionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        vouchers: {
            payload: Prisma.$vouchersPayload<ExtArgs>;
            fields: Prisma.vouchersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.vouchersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.vouchersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>;
                };
                findFirst: {
                    args: Prisma.vouchersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.vouchersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>;
                };
                findMany: {
                    args: Prisma.vouchersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>[];
                };
                create: {
                    args: Prisma.vouchersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>;
                };
                createMany: {
                    args: Prisma.vouchersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.vouchersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>[];
                };
                delete: {
                    args: Prisma.vouchersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>;
                };
                update: {
                    args: Prisma.vouchersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>;
                };
                deleteMany: {
                    args: Prisma.vouchersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.vouchersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.vouchersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>[];
                };
                upsert: {
                    args: Prisma.vouchersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$vouchersPayload>;
                };
                aggregate: {
                    args: Prisma.VouchersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVouchers>;
                };
                groupBy: {
                    args: Prisma.vouchersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VouchersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.vouchersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VouchersCountAggregateOutputType> | number;
                };
            };
        };
        wallets: {
            payload: Prisma.$walletsPayload<ExtArgs>;
            fields: Prisma.walletsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.walletsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.walletsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>;
                };
                findFirst: {
                    args: Prisma.walletsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.walletsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>;
                };
                findMany: {
                    args: Prisma.walletsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>[];
                };
                create: {
                    args: Prisma.walletsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>;
                };
                createMany: {
                    args: Prisma.walletsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.walletsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>[];
                };
                delete: {
                    args: Prisma.walletsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>;
                };
                update: {
                    args: Prisma.walletsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>;
                };
                deleteMany: {
                    args: Prisma.walletsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.walletsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.walletsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>[];
                };
                upsert: {
                    args: Prisma.walletsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$walletsPayload>;
                };
                aggregate: {
                    args: Prisma.WalletsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWallets>;
                };
                groupBy: {
                    args: Prisma.walletsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.walletsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WalletsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    admin_audit_logs?: Prisma.admin_audit_logsOmit;
    admins?: Prisma.adminsOmit;
    customer_packages?: Prisma.customer_packagesOmit;
    customers?: Prisma.customersOmit;
    family_packages?: Prisma.family_packagesOmit;
    messages?: Prisma.messagesOmit;
    notifications?: Prisma.notificationsOmit;
    order_interventions?: Prisma.order_interventionsOmit;
    order_status_history?: Prisma.order_status_historyOmit;
    orders?: Prisma.ordersOmit;
    reviews?: Prisma.reviewsOmit;
    services?: Prisma.servicesOmit;
    spatial_ref_sys?: Prisma.spatial_ref_sysOmit;
    support_tickets?: Prisma.support_ticketsOmit;
    tasker_services?: Prisma.tasker_servicesOmit;
    taskers?: Prisma.taskersOmit;
    transactions?: Prisma.transactionsOmit;
    users?: Prisma.usersOmit;
    vouchers?: Prisma.vouchersOmit;
    wallets?: Prisma.walletsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
