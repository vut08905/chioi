import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type transactionsModel = runtime.Types.Result.DefaultSelection<Prisma.$transactionsPayload>;
export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
};
export type TransactionsAvgAggregateOutputType = {
    transaction_id: number | null;
    wallet_id: number | null;
    amount: runtime.Decimal | null;
    order_id: number | null;
};
export type TransactionsSumAggregateOutputType = {
    transaction_id: number | null;
    wallet_id: number | null;
    amount: runtime.Decimal | null;
    order_id: number | null;
};
export type TransactionsMinAggregateOutputType = {
    transaction_id: number | null;
    transaction_code: string | null;
    wallet_id: number | null;
    amount: runtime.Decimal | null;
    type: string | null;
    status: string | null;
    order_id: number | null;
    description: string | null;
    created_at: Date | null;
};
export type TransactionsMaxAggregateOutputType = {
    transaction_id: number | null;
    transaction_code: string | null;
    wallet_id: number | null;
    amount: runtime.Decimal | null;
    type: string | null;
    status: string | null;
    order_id: number | null;
    description: string | null;
    created_at: Date | null;
};
export type TransactionsCountAggregateOutputType = {
    transaction_id: number;
    transaction_code: number;
    wallet_id: number;
    amount: number;
    type: number;
    status: number;
    order_id: number;
    description: number;
    created_at: number;
    _all: number;
};
export type TransactionsAvgAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    amount?: true;
    order_id?: true;
};
export type TransactionsSumAggregateInputType = {
    transaction_id?: true;
    wallet_id?: true;
    amount?: true;
    order_id?: true;
};
export type TransactionsMinAggregateInputType = {
    transaction_id?: true;
    transaction_code?: true;
    wallet_id?: true;
    amount?: true;
    type?: true;
    status?: true;
    order_id?: true;
    description?: true;
    created_at?: true;
};
export type TransactionsMaxAggregateInputType = {
    transaction_id?: true;
    transaction_code?: true;
    wallet_id?: true;
    amount?: true;
    type?: true;
    status?: true;
    order_id?: true;
    description?: true;
    created_at?: true;
};
export type TransactionsCountAggregateInputType = {
    transaction_id?: true;
    transaction_code?: true;
    wallet_id?: true;
    amount?: true;
    type?: true;
    status?: true;
    order_id?: true;
    description?: true;
    created_at?: true;
    _all?: true;
};
export type TransactionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    cursor?: Prisma.transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransactionsCountAggregateInputType;
    _avg?: TransactionsAvgAggregateInputType;
    _sum?: TransactionsSumAggregateInputType;
    _min?: TransactionsMinAggregateInputType;
    _max?: TransactionsMaxAggregateInputType;
};
export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
    [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransactions[P]> : Prisma.GetScalarType<T[P], AggregateTransactions[P]>;
};
export type transactionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
    orderBy?: Prisma.transactionsOrderByWithAggregationInput | Prisma.transactionsOrderByWithAggregationInput[];
    by: Prisma.TransactionsScalarFieldEnum[] | Prisma.TransactionsScalarFieldEnum;
    having?: Prisma.transactionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionsCountAggregateInputType | true;
    _avg?: TransactionsAvgAggregateInputType;
    _sum?: TransactionsSumAggregateInputType;
    _min?: TransactionsMinAggregateInputType;
    _max?: TransactionsMaxAggregateInputType;
};
export type TransactionsGroupByOutputType = {
    transaction_id: number;
    transaction_code: string;
    wallet_id: number;
    amount: runtime.Decimal;
    type: string;
    status: string | null;
    order_id: number | null;
    description: string | null;
    created_at: Date | null;
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
};
export type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionsGroupByOutputType[P]>;
}>>;
export type transactionsWhereInput = {
    AND?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    OR?: Prisma.transactionsWhereInput[];
    NOT?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    transaction_id?: Prisma.IntFilter<"transactions"> | number;
    transaction_code?: Prisma.StringFilter<"transactions"> | string;
    wallet_id?: Prisma.IntFilter<"transactions"> | number;
    amount?: Prisma.DecimalFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFilter<"transactions"> | string;
    status?: Prisma.StringNullableFilter<"transactions"> | string | null;
    order_id?: Prisma.IntNullableFilter<"transactions"> | number | null;
    description?: Prisma.StringNullableFilter<"transactions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"transactions"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    wallets?: Prisma.XOR<Prisma.WalletsScalarRelationFilter, Prisma.walletsWhereInput>;
};
export type transactionsOrderByWithRelationInput = {
    transaction_id?: Prisma.SortOrder;
    transaction_code?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    wallets?: Prisma.walletsOrderByWithRelationInput;
};
export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: number;
    transaction_code?: string;
    AND?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    OR?: Prisma.transactionsWhereInput[];
    NOT?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    wallet_id?: Prisma.IntFilter<"transactions"> | number;
    amount?: Prisma.DecimalFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFilter<"transactions"> | string;
    status?: Prisma.StringNullableFilter<"transactions"> | string | null;
    order_id?: Prisma.IntNullableFilter<"transactions"> | number | null;
    description?: Prisma.StringNullableFilter<"transactions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"transactions"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    wallets?: Prisma.XOR<Prisma.WalletsScalarRelationFilter, Prisma.walletsWhereInput>;
}, "transaction_id" | "transaction_code">;
export type transactionsOrderByWithAggregationInput = {
    transaction_id?: Prisma.SortOrder;
    transaction_code?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.transactionsCountOrderByAggregateInput;
    _avg?: Prisma.transactionsAvgOrderByAggregateInput;
    _max?: Prisma.transactionsMaxOrderByAggregateInput;
    _min?: Prisma.transactionsMinOrderByAggregateInput;
    _sum?: Prisma.transactionsSumOrderByAggregateInput;
};
export type transactionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.transactionsScalarWhereWithAggregatesInput | Prisma.transactionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.transactionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transactionsScalarWhereWithAggregatesInput | Prisma.transactionsScalarWhereWithAggregatesInput[];
    transaction_id?: Prisma.IntWithAggregatesFilter<"transactions"> | number;
    transaction_code?: Prisma.StringWithAggregatesFilter<"transactions"> | string;
    wallet_id?: Prisma.IntWithAggregatesFilter<"transactions"> | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringWithAggregatesFilter<"transactions"> | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"transactions"> | string | null;
    order_id?: Prisma.IntNullableWithAggregatesFilter<"transactions"> | number | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"transactions"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null;
};
export type transactionsCreateInput = {
    transaction_code: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutTransactionsInput;
    wallets: Prisma.walletsCreateNestedOneWithoutTransactionsInput;
};
export type transactionsUncheckedCreateInput = {
    transaction_id?: number;
    transaction_code: string;
    wallet_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    order_id?: number | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type transactionsUpdateInput = {
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneWithoutTransactionsNestedInput;
    wallets?: Prisma.walletsUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateInput = {
    transaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transactionsCreateManyInput = {
    transaction_id?: number;
    transaction_code: string;
    wallet_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    order_id?: number | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type transactionsUpdateManyMutationInput = {
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transactionsUncheckedUpdateManyInput = {
    transaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionsListRelationFilter = {
    every?: Prisma.transactionsWhereInput;
    some?: Prisma.transactionsWhereInput;
    none?: Prisma.transactionsWhereInput;
};
export type transactionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type transactionsCountOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    transaction_code?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type transactionsAvgOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type transactionsMaxOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    transaction_code?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type transactionsMinOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    transaction_code?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type transactionsSumOrderByAggregateInput = {
    transaction_id?: Prisma.SortOrder;
    wallet_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type transactionsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutOrdersInput, Prisma.transactionsUncheckedCreateWithoutOrdersInput> | Prisma.transactionsCreateWithoutOrdersInput[] | Prisma.transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutOrdersInput | Prisma.transactionsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.transactionsCreateManyOrdersInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutOrdersInput, Prisma.transactionsUncheckedCreateWithoutOrdersInput> | Prisma.transactionsCreateWithoutOrdersInput[] | Prisma.transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutOrdersInput | Prisma.transactionsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.transactionsCreateManyOrdersInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutOrdersInput, Prisma.transactionsUncheckedCreateWithoutOrdersInput> | Prisma.transactionsCreateWithoutOrdersInput[] | Prisma.transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutOrdersInput | Prisma.transactionsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.transactionsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.transactionsCreateManyOrdersInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.transactionsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutOrdersInput | Prisma.transactionsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutOrdersInput, Prisma.transactionsUncheckedCreateWithoutOrdersInput> | Prisma.transactionsCreateWithoutOrdersInput[] | Prisma.transactionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutOrdersInput | Prisma.transactionsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.transactionsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.transactionsCreateManyOrdersInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.transactionsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutOrdersInput | Prisma.transactionsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsCreateNestedManyWithoutWalletsInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWalletsInput, Prisma.transactionsUncheckedCreateWithoutWalletsInput> | Prisma.transactionsCreateWithoutWalletsInput[] | Prisma.transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWalletsInput | Prisma.transactionsCreateOrConnectWithoutWalletsInput[];
    createMany?: Prisma.transactionsCreateManyWalletsInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutWalletsInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWalletsInput, Prisma.transactionsUncheckedCreateWithoutWalletsInput> | Prisma.transactionsCreateWithoutWalletsInput[] | Prisma.transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWalletsInput | Prisma.transactionsCreateOrConnectWithoutWalletsInput[];
    createMany?: Prisma.transactionsCreateManyWalletsInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUpdateManyWithoutWalletsNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWalletsInput, Prisma.transactionsUncheckedCreateWithoutWalletsInput> | Prisma.transactionsCreateWithoutWalletsInput[] | Prisma.transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWalletsInput | Prisma.transactionsCreateOrConnectWithoutWalletsInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutWalletsInput | Prisma.transactionsUpsertWithWhereUniqueWithoutWalletsInput[];
    createMany?: Prisma.transactionsCreateManyWalletsInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutWalletsInput | Prisma.transactionsUpdateWithWhereUniqueWithoutWalletsInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutWalletsInput | Prisma.transactionsUpdateManyWithWhereWithoutWalletsInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutWalletsNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWalletsInput, Prisma.transactionsUncheckedCreateWithoutWalletsInput> | Prisma.transactionsCreateWithoutWalletsInput[] | Prisma.transactionsUncheckedCreateWithoutWalletsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWalletsInput | Prisma.transactionsCreateOrConnectWithoutWalletsInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutWalletsInput | Prisma.transactionsUpsertWithWhereUniqueWithoutWalletsInput[];
    createMany?: Prisma.transactionsCreateManyWalletsInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutWalletsInput | Prisma.transactionsUpdateWithWhereUniqueWithoutWalletsInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutWalletsInput | Prisma.transactionsUpdateManyWithWhereWithoutWalletsInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsCreateWithoutOrdersInput = {
    transaction_code: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    wallets: Prisma.walletsCreateNestedOneWithoutTransactionsInput;
};
export type transactionsUncheckedCreateWithoutOrdersInput = {
    transaction_id?: number;
    transaction_code: string;
    wallet_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type transactionsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutOrdersInput, Prisma.transactionsUncheckedCreateWithoutOrdersInput>;
};
export type transactionsCreateManyOrdersInputEnvelope = {
    data: Prisma.transactionsCreateManyOrdersInput | Prisma.transactionsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type transactionsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutOrdersInput, Prisma.transactionsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutOrdersInput, Prisma.transactionsUncheckedCreateWithoutOrdersInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutOrdersInput, Prisma.transactionsUncheckedUpdateWithoutOrdersInput>;
};
export type transactionsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutOrdersInput>;
};
export type transactionsScalarWhereInput = {
    AND?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
    OR?: Prisma.transactionsScalarWhereInput[];
    NOT?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
    transaction_id?: Prisma.IntFilter<"transactions"> | number;
    transaction_code?: Prisma.StringFilter<"transactions"> | string;
    wallet_id?: Prisma.IntFilter<"transactions"> | number;
    amount?: Prisma.DecimalFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFilter<"transactions"> | string;
    status?: Prisma.StringNullableFilter<"transactions"> | string | null;
    order_id?: Prisma.IntNullableFilter<"transactions"> | number | null;
    description?: Prisma.StringNullableFilter<"transactions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"transactions"> | Date | string | null;
};
export type transactionsCreateWithoutWalletsInput = {
    transaction_code: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutTransactionsInput;
};
export type transactionsUncheckedCreateWithoutWalletsInput = {
    transaction_id?: number;
    transaction_code: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    order_id?: number | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type transactionsCreateOrConnectWithoutWalletsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutWalletsInput, Prisma.transactionsUncheckedCreateWithoutWalletsInput>;
};
export type transactionsCreateManyWalletsInputEnvelope = {
    data: Prisma.transactionsCreateManyWalletsInput | Prisma.transactionsCreateManyWalletsInput[];
    skipDuplicates?: boolean;
};
export type transactionsUpsertWithWhereUniqueWithoutWalletsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutWalletsInput, Prisma.transactionsUncheckedUpdateWithoutWalletsInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutWalletsInput, Prisma.transactionsUncheckedCreateWithoutWalletsInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutWalletsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutWalletsInput, Prisma.transactionsUncheckedUpdateWithoutWalletsInput>;
};
export type transactionsUpdateManyWithWhereWithoutWalletsInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutWalletsInput>;
};
export type transactionsCreateManyOrdersInput = {
    transaction_id?: number;
    transaction_code: string;
    wallet_id: number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type transactionsUpdateWithoutOrdersInput = {
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    wallets?: Prisma.walletsUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateWithoutOrdersInput = {
    transaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transactionsUncheckedUpdateManyWithoutOrdersInput = {
    transaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    wallet_id?: Prisma.IntFieldUpdateOperationsInput | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transactionsCreateManyWalletsInput = {
    transaction_id?: number;
    transaction_code: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    type: string;
    status?: string | null;
    order_id?: number | null;
    description?: string | null;
    created_at?: Date | string | null;
};
export type transactionsUpdateWithoutWalletsInput = {
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateWithoutWalletsInput = {
    transaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transactionsUncheckedUpdateManyWithoutWalletsInput = {
    transaction_id?: Prisma.IntFieldUpdateOperationsInput | number;
    transaction_code?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type transactionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    transaction_id?: boolean;
    transaction_code?: boolean;
    wallet_id?: boolean;
    amount?: boolean;
    type?: boolean;
    status?: boolean;
    order_id?: boolean;
    description?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.transactions$ordersArgs<ExtArgs>;
    wallets?: boolean | Prisma.walletsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transactions"]>;
export type transactionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    transaction_id?: boolean;
    transaction_code?: boolean;
    wallet_id?: boolean;
    amount?: boolean;
    type?: boolean;
    status?: boolean;
    order_id?: boolean;
    description?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.transactions$ordersArgs<ExtArgs>;
    wallets?: boolean | Prisma.walletsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transactions"]>;
export type transactionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    transaction_id?: boolean;
    transaction_code?: boolean;
    wallet_id?: boolean;
    amount?: boolean;
    type?: boolean;
    status?: boolean;
    order_id?: boolean;
    description?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.transactions$ordersArgs<ExtArgs>;
    wallets?: boolean | Prisma.walletsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transactions"]>;
export type transactionsSelectScalar = {
    transaction_id?: boolean;
    transaction_code?: boolean;
    wallet_id?: boolean;
    amount?: boolean;
    type?: boolean;
    status?: boolean;
    order_id?: boolean;
    description?: boolean;
    created_at?: boolean;
};
export type transactionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"transaction_id" | "transaction_code" | "wallet_id" | "amount" | "type" | "status" | "order_id" | "description" | "created_at", ExtArgs["result"]["transactions"]>;
export type transactionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.transactions$ordersArgs<ExtArgs>;
    wallets?: boolean | Prisma.walletsDefaultArgs<ExtArgs>;
};
export type transactionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.transactions$ordersArgs<ExtArgs>;
    wallets?: boolean | Prisma.walletsDefaultArgs<ExtArgs>;
};
export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.transactions$ordersArgs<ExtArgs>;
    wallets?: boolean | Prisma.walletsDefaultArgs<ExtArgs>;
};
export type $transactionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transactions";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs> | null;
        wallets: Prisma.$walletsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        transaction_id: number;
        transaction_code: string;
        wallet_id: number;
        amount: runtime.Decimal;
        type: string;
        status: string | null;
        order_id: number | null;
        description: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["transactions"]>;
    composites: {};
};
export type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transactionsPayload, S>;
export type transactionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionsCountAggregateInputType | true;
};
export interface transactionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transactions'];
        meta: {
            name: 'transactions';
        };
    };
    findUnique<T extends transactionsFindUniqueArgs>(args: Prisma.SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends transactionsFindFirstArgs>(args?: Prisma.SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends transactionsFindManyArgs>(args?: Prisma.SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends transactionsCreateArgs>(args: Prisma.SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends transactionsCreateManyArgs>(args?: Prisma.SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends transactionsDeleteArgs>(args: Prisma.SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends transactionsUpdateArgs>(args: Prisma.SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends transactionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends transactionsUpdateManyArgs>(args: Prisma.SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends transactionsUpsertArgs>(args: Prisma.SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends transactionsCountArgs>(args?: Prisma.Subset<T, transactionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionsCountAggregateOutputType> : number>;
    aggregate<T extends TransactionsAggregateArgs>(args: Prisma.Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>;
    groupBy<T extends transactionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transactionsGroupByArgs['orderBy'];
    } : {
        orderBy?: transactionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: transactionsFieldRefs;
}
export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.transactions$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wallets<T extends Prisma.walletsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.walletsDefaultArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface transactionsFieldRefs {
    readonly transaction_id: Prisma.FieldRef<"transactions", 'Int'>;
    readonly transaction_code: Prisma.FieldRef<"transactions", 'String'>;
    readonly wallet_id: Prisma.FieldRef<"transactions", 'Int'>;
    readonly amount: Prisma.FieldRef<"transactions", 'Decimal'>;
    readonly type: Prisma.FieldRef<"transactions", 'String'>;
    readonly status: Prisma.FieldRef<"transactions", 'String'>;
    readonly order_id: Prisma.FieldRef<"transactions", 'Int'>;
    readonly description: Prisma.FieldRef<"transactions", 'String'>;
    readonly created_at: Prisma.FieldRef<"transactions", 'DateTime'>;
}
export type transactionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where: Prisma.transactionsWhereUniqueInput;
};
export type transactionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where: Prisma.transactionsWhereUniqueInput;
};
export type transactionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type transactionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type transactionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type transactionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transactionsCreateInput, Prisma.transactionsUncheckedCreateInput>;
};
export type transactionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.transactionsCreateManyInput | Prisma.transactionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type transactionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    data: Prisma.transactionsCreateManyInput | Prisma.transactionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.transactionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type transactionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transactionsUpdateInput, Prisma.transactionsUncheckedUpdateInput>;
    where: Prisma.transactionsWhereUniqueInput;
};
export type transactionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyInput>;
    where?: Prisma.transactionsWhereInput;
    limit?: number;
};
export type transactionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyInput>;
    where?: Prisma.transactionsWhereInput;
    limit?: number;
    include?: Prisma.transactionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type transactionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateInput, Prisma.transactionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.transactionsUpdateInput, Prisma.transactionsUncheckedUpdateInput>;
};
export type transactionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where: Prisma.transactionsWhereUniqueInput;
};
export type transactionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
    limit?: number;
};
export type transactions$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type transactionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    include?: Prisma.transactionsInclude<ExtArgs> | null;
};
