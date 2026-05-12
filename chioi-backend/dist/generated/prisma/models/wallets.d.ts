import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type walletsModel = runtime.Types.Result.DefaultSelection<Prisma.$walletsPayload>;
export type AggregateWallets = {
    _count: WalletsCountAggregateOutputType | null;
    _avg: WalletsAvgAggregateOutputType | null;
    _sum: WalletsSumAggregateOutputType | null;
    _min: WalletsMinAggregateOutputType | null;
    _max: WalletsMaxAggregateOutputType | null;
};
export type WalletsAvgAggregateOutputType = {
    wallet_id: number | null;
    user_id: number | null;
    balance: runtime.Decimal | null;
};
export type WalletsSumAggregateOutputType = {
    wallet_id: number | null;
    user_id: number | null;
    balance: runtime.Decimal | null;
};
export type WalletsMinAggregateOutputType = {
    wallet_id: number | null;
    user_id: number | null;
    balance: runtime.Decimal | null;
    updated_at: Date | null;
};
export type WalletsMaxAggregateOutputType = {
    wallet_id: number | null;
    user_id: number | null;
    balance: runtime.Decimal | null;
    updated_at: Date | null;
};
export type WalletsCountAggregateOutputType = {
    wallet_id: number;
    user_id: number;
    balance: number;
    updated_at: number;
    _all: number;
};
export type WalletsAvgAggregateInputType = {
    wallet_id?: true;
    user_id?: true;
    balance?: true;
};
export type WalletsSumAggregateInputType = {
    wallet_id?: true;
    user_id?: true;
    balance?: true;
};
export type WalletsMinAggregateInputType = {
    wallet_id?: true;
    user_id?: true;
    balance?: true;
    updated_at?: true;
};
export type WalletsMaxAggregateInputType = {
    wallet_id?: true;
    user_id?: true;
    balance?: true;
    updated_at?: true;
};
export type WalletsCountAggregateInputType = {
    wallet_id?: true;
    user_id?: true;
    balance?: true;
    updated_at?: true;
    _all?: true;
};
export type WalletsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WalletsCountAggregateInputType;
    _avg?: WalletsAvgAggregateInputType;
    _sum?: WalletsSumAggregateInputType;
    _min?: WalletsMinAggregateInputType;
    _max?: WalletsMaxAggregateInputType;
};
export type GetWalletsAggregateType<T extends WalletsAggregateArgs> = {
    [P in keyof T & keyof AggregateWallets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWallets[P]> : Prisma.GetScalarType<T[P], AggregateWallets[P]>;
};
export type walletsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithAggregationInput | Prisma.walletsOrderByWithAggregationInput[];
    by: Prisma.WalletsScalarFieldEnum[] | Prisma.WalletsScalarFieldEnum;
    having?: Prisma.walletsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WalletsCountAggregateInputType | true;
    _avg?: WalletsAvgAggregateInputType;
    _sum?: WalletsSumAggregateInputType;
    _min?: WalletsMinAggregateInputType;
    _max?: WalletsMaxAggregateInputType;
};
export type WalletsGroupByOutputType = {
    wallet_id: number;
    user_id: number;
    balance: runtime.Decimal | null;
    updated_at: Date | null;
    _count: WalletsCountAggregateOutputType | null;
    _avg: WalletsAvgAggregateOutputType | null;
    _sum: WalletsSumAggregateOutputType | null;
    _min: WalletsMinAggregateOutputType | null;
    _max: WalletsMaxAggregateOutputType | null;
};
export type GetWalletsGroupByPayload<T extends walletsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WalletsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WalletsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WalletsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WalletsGroupByOutputType[P]>;
}>>;
export type walletsWhereInput = {
    AND?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    OR?: Prisma.walletsWhereInput[];
    NOT?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    wallet_id?: Prisma.IntFilter<"wallets"> | number;
    user_id?: Prisma.IntFilter<"wallets"> | number;
    balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"wallets"> | Date | string | null;
    transactions?: Prisma.TransactionsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type walletsOrderByWithRelationInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    transactions?: Prisma.transactionsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type walletsWhereUniqueInput = Prisma.AtLeast<{
    wallet_id?: number;
    user_id?: number;
    AND?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    OR?: Prisma.walletsWhereInput[];
    NOT?: Prisma.walletsWhereInput | Prisma.walletsWhereInput[];
    balance?: Prisma.DecimalNullableFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"wallets"> | Date | string | null;
    transactions?: Prisma.TransactionsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "wallet_id" | "user_id">;
export type walletsOrderByWithAggregationInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.walletsCountOrderByAggregateInput;
    _avg?: Prisma.walletsAvgOrderByAggregateInput;
    _max?: Prisma.walletsMaxOrderByAggregateInput;
    _min?: Prisma.walletsMinOrderByAggregateInput;
    _sum?: Prisma.walletsSumOrderByAggregateInput;
};
export type walletsScalarWhereWithAggregatesInput = {
    AND?: Prisma.walletsScalarWhereWithAggregatesInput | Prisma.walletsScalarWhereWithAggregatesInput[];
    OR?: Prisma.walletsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.walletsScalarWhereWithAggregatesInput | Prisma.walletsScalarWhereWithAggregatesInput[];
    wallet_id?: Prisma.IntWithAggregatesFilter<"wallets"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"wallets"> | number;
    balance?: Prisma.DecimalNullableWithAggregatesFilter<"wallets"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"wallets"> | Date | string | null;
};
export type walletsCreateInput = {
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWalletsInput;
    users: Prisma.usersCreateNestedOneWithoutWalletsInput;
};
export type walletsUncheckedCreateInput = {
    wallet_id?: number;
    user_id: number;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWalletsInput;
};
export type walletsUpdateInput = {
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transactions?: Prisma.transactionsUpdateManyWithoutWalletsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateInput = {
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWalletsNestedInput;
};
export type walletsCreateManyInput = {
    wallet_id?: number;
    user_id: number;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
};
export type walletsUpdateManyMutationInput = {
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type walletsUncheckedUpdateManyInput = {
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type WalletsScalarRelationFilter = {
    is?: Prisma.walletsWhereInput;
    isNot?: Prisma.walletsWhereInput;
};
export type WalletsNullableScalarRelationFilter = {
    is?: Prisma.walletsWhereInput | null;
    isNot?: Prisma.walletsWhereInput | null;
};
export type walletsCountOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type walletsAvgOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type walletsMaxOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type walletsMinOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type walletsSumOrderByAggregateInput = {
    wallet_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
};
export type walletsCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutTransactionsInput, Prisma.walletsUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.walletsWhereUniqueInput;
};
export type walletsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutTransactionsInput, Prisma.walletsUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.walletsUpsertWithoutTransactionsInput;
    connect?: Prisma.walletsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.walletsUpdateToOneWithWhereWithoutTransactionsInput, Prisma.walletsUpdateWithoutTransactionsInput>, Prisma.walletsUncheckedUpdateWithoutTransactionsInput>;
};
export type walletsCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutUsersInput, Prisma.walletsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutUsersInput;
    connect?: Prisma.walletsWhereUniqueInput;
};
export type walletsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutUsersInput, Prisma.walletsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutUsersInput;
    connect?: Prisma.walletsWhereUniqueInput;
};
export type walletsUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutUsersInput, Prisma.walletsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.walletsUpsertWithoutUsersInput;
    disconnect?: Prisma.walletsWhereInput | boolean;
    delete?: Prisma.walletsWhereInput | boolean;
    connect?: Prisma.walletsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.walletsUpdateToOneWithWhereWithoutUsersInput, Prisma.walletsUpdateWithoutUsersInput>, Prisma.walletsUncheckedUpdateWithoutUsersInput>;
};
export type walletsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.walletsCreateWithoutUsersInput, Prisma.walletsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.walletsCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.walletsUpsertWithoutUsersInput;
    disconnect?: Prisma.walletsWhereInput | boolean;
    delete?: Prisma.walletsWhereInput | boolean;
    connect?: Prisma.walletsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.walletsUpdateToOneWithWhereWithoutUsersInput, Prisma.walletsUpdateWithoutUsersInput>, Prisma.walletsUncheckedUpdateWithoutUsersInput>;
};
export type walletsCreateWithoutTransactionsInput = {
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    users: Prisma.usersCreateNestedOneWithoutWalletsInput;
};
export type walletsUncheckedCreateWithoutTransactionsInput = {
    wallet_id?: number;
    user_id: number;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
};
export type walletsCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.walletsWhereUniqueInput;
    create: Prisma.XOR<Prisma.walletsCreateWithoutTransactionsInput, Prisma.walletsUncheckedCreateWithoutTransactionsInput>;
};
export type walletsUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.walletsUpdateWithoutTransactionsInput, Prisma.walletsUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.walletsCreateWithoutTransactionsInput, Prisma.walletsUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.walletsWhereInput;
};
export type walletsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.walletsWhereInput;
    data: Prisma.XOR<Prisma.walletsUpdateWithoutTransactionsInput, Prisma.walletsUncheckedUpdateWithoutTransactionsInput>;
};
export type walletsUpdateWithoutTransactionsInput = {
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateWithoutTransactionsInput = {
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type walletsCreateWithoutUsersInput = {
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWalletsInput;
};
export type walletsUncheckedCreateWithoutUsersInput = {
    wallet_id?: number;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Date | string | null;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWalletsInput;
};
export type walletsCreateOrConnectWithoutUsersInput = {
    where: Prisma.walletsWhereUniqueInput;
    create: Prisma.XOR<Prisma.walletsCreateWithoutUsersInput, Prisma.walletsUncheckedCreateWithoutUsersInput>;
};
export type walletsUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.walletsUpdateWithoutUsersInput, Prisma.walletsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.walletsCreateWithoutUsersInput, Prisma.walletsUncheckedCreateWithoutUsersInput>;
    where?: Prisma.walletsWhereInput;
};
export type walletsUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.walletsWhereInput;
    data: Prisma.XOR<Prisma.walletsUpdateWithoutUsersInput, Prisma.walletsUncheckedUpdateWithoutUsersInput>;
};
export type walletsUpdateWithoutUsersInput = {
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transactions?: Prisma.transactionsUpdateManyWithoutWalletsNestedInput;
};
export type walletsUncheckedUpdateWithoutUsersInput = {
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    balance?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWalletsNestedInput;
};
export type WalletsCountOutputType = {
    transactions: number;
};
export type WalletsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | WalletsCountOutputTypeCountTransactionsArgs;
};
export type WalletsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WalletsCountOutputTypeSelect<ExtArgs> | null;
};
export type WalletsCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
export type walletsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wallet_id?: boolean;
    user_id?: boolean;
    balance?: boolean;
    updated_at?: boolean;
    transactions?: boolean | Prisma.wallets$transactionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WalletsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wallets"]>;
export type walletsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wallet_id?: boolean;
    user_id?: boolean;
    balance?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wallets"]>;
export type walletsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    wallet_id?: boolean;
    user_id?: boolean;
    balance?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wallets"]>;
export type walletsSelectScalar = {
    wallet_id?: boolean;
    user_id?: boolean;
    balance?: boolean;
    updated_at?: boolean;
};
export type walletsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"wallet_id" | "user_id" | "balance" | "updated_at", ExtArgs["result"]["wallets"]>;
export type walletsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | Prisma.wallets$transactionsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WalletsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type walletsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type walletsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $walletsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wallets";
    objects: {
        transactions: Prisma.$transactionsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        wallet_id: number;
        user_id: number;
        balance: runtime.Decimal | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["wallets"]>;
    composites: {};
};
export type walletsGetPayload<S extends boolean | null | undefined | walletsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$walletsPayload, S>;
export type walletsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<walletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WalletsCountAggregateInputType | true;
};
export interface walletsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wallets'];
        meta: {
            name: 'wallets';
        };
    };
    findUnique<T extends walletsFindUniqueArgs>(args: Prisma.SelectSubset<T, walletsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends walletsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, walletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends walletsFindFirstArgs>(args?: Prisma.SelectSubset<T, walletsFindFirstArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends walletsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, walletsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends walletsFindManyArgs>(args?: Prisma.SelectSubset<T, walletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends walletsCreateArgs>(args: Prisma.SelectSubset<T, walletsCreateArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends walletsCreateManyArgs>(args?: Prisma.SelectSubset<T, walletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends walletsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, walletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends walletsDeleteArgs>(args: Prisma.SelectSubset<T, walletsDeleteArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends walletsUpdateArgs>(args: Prisma.SelectSubset<T, walletsUpdateArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends walletsDeleteManyArgs>(args?: Prisma.SelectSubset<T, walletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends walletsUpdateManyArgs>(args: Prisma.SelectSubset<T, walletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends walletsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, walletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends walletsUpsertArgs>(args: Prisma.SelectSubset<T, walletsUpsertArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends walletsCountArgs>(args?: Prisma.Subset<T, walletsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WalletsCountAggregateOutputType> : number>;
    aggregate<T extends WalletsAggregateArgs>(args: Prisma.Subset<T, WalletsAggregateArgs>): Prisma.PrismaPromise<GetWalletsAggregateType<T>>;
    groupBy<T extends walletsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: walletsGroupByArgs['orderBy'];
    } : {
        orderBy?: walletsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, walletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: walletsFieldRefs;
}
export interface Prisma__walletsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transactions<T extends Prisma.wallets$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wallets$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface walletsFieldRefs {
    readonly wallet_id: Prisma.FieldRef<"wallets", 'Int'>;
    readonly user_id: Prisma.FieldRef<"wallets", 'Int'>;
    readonly balance: Prisma.FieldRef<"wallets", 'Decimal'>;
    readonly updated_at: Prisma.FieldRef<"wallets", 'DateTime'>;
}
export type walletsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type walletsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type walletsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
    orderBy?: Prisma.walletsOrderByWithRelationInput | Prisma.walletsOrderByWithRelationInput[];
    cursor?: Prisma.walletsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WalletsScalarFieldEnum | Prisma.WalletsScalarFieldEnum[];
};
export type walletsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.walletsCreateInput, Prisma.walletsUncheckedCreateInput>;
};
export type walletsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.walletsCreateManyInput | Prisma.walletsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type walletsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    data: Prisma.walletsCreateManyInput | Prisma.walletsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.walletsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type walletsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.walletsUpdateInput, Prisma.walletsUncheckedUpdateInput>;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.walletsUpdateManyMutationInput, Prisma.walletsUncheckedUpdateManyInput>;
    where?: Prisma.walletsWhereInput;
    limit?: number;
};
export type walletsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.walletsUpdateManyMutationInput, Prisma.walletsUncheckedUpdateManyInput>;
    where?: Prisma.walletsWhereInput;
    limit?: number;
    include?: Prisma.walletsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type walletsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
    create: Prisma.XOR<Prisma.walletsCreateInput, Prisma.walletsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.walletsUpdateInput, Prisma.walletsUncheckedUpdateInput>;
};
export type walletsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where: Prisma.walletsWhereUniqueInput;
};
export type walletsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.walletsWhereInput;
    limit?: number;
};
export type wallets$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where?: Prisma.transactionsWhereInput;
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    cursor?: Prisma.transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionsScalarFieldEnum | Prisma.TransactionsScalarFieldEnum[];
};
export type walletsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
};
