import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get admin_audit_logs(): Prisma.admin_audit_logsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get admins(): Prisma.adminsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customer_packages(): Prisma.customer_packagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customers(): Prisma.customersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get family_packages(): Prisma.family_packagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get messages(): Prisma.messagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notifications(): Prisma.notificationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_interventions(): Prisma.order_interventionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_status_history(): Prisma.order_status_historyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orders(): Prisma.ordersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reviews(): Prisma.reviewsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get services(): Prisma.servicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get support_tickets(): Prisma.support_ticketsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tasker_services(): Prisma.tasker_servicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get taskers(): Prisma.taskersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get transactions(): Prisma.transactionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get vouchers(): Prisma.vouchersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get wallets(): Prisma.walletsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
