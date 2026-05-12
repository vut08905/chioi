import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type vouchersModel = runtime.Types.Result.DefaultSelection<Prisma.$vouchersPayload>;
export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null;
    _avg: VouchersAvgAggregateOutputType | null;
    _sum: VouchersSumAggregateOutputType | null;
    _min: VouchersMinAggregateOutputType | null;
    _max: VouchersMaxAggregateOutputType | null;
};
export type VouchersAvgAggregateOutputType = {
    voucher_id: number | null;
    discount_amount: runtime.Decimal | null;
};
export type VouchersSumAggregateOutputType = {
    voucher_id: number | null;
    discount_amount: runtime.Decimal | null;
};
export type VouchersMinAggregateOutputType = {
    voucher_id: number | null;
    code: string | null;
    discount_amount: runtime.Decimal | null;
    conditions: string | null;
    valid_from: Date | null;
    valid_until: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type VouchersMaxAggregateOutputType = {
    voucher_id: number | null;
    code: string | null;
    discount_amount: runtime.Decimal | null;
    conditions: string | null;
    valid_from: Date | null;
    valid_until: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type VouchersCountAggregateOutputType = {
    voucher_id: number;
    code: number;
    discount_amount: number;
    conditions: number;
    valid_from: number;
    valid_until: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type VouchersAvgAggregateInputType = {
    voucher_id?: true;
    discount_amount?: true;
};
export type VouchersSumAggregateInputType = {
    voucher_id?: true;
    discount_amount?: true;
};
export type VouchersMinAggregateInputType = {
    voucher_id?: true;
    code?: true;
    discount_amount?: true;
    conditions?: true;
    valid_from?: true;
    valid_until?: true;
    is_active?: true;
    created_at?: true;
};
export type VouchersMaxAggregateInputType = {
    voucher_id?: true;
    code?: true;
    discount_amount?: true;
    conditions?: true;
    valid_from?: true;
    valid_until?: true;
    is_active?: true;
    created_at?: true;
};
export type VouchersCountAggregateInputType = {
    voucher_id?: true;
    code?: true;
    discount_amount?: true;
    conditions?: true;
    valid_from?: true;
    valid_until?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type VouchersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vouchersWhereInput;
    orderBy?: Prisma.vouchersOrderByWithRelationInput | Prisma.vouchersOrderByWithRelationInput[];
    cursor?: Prisma.vouchersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VouchersCountAggregateInputType;
    _avg?: VouchersAvgAggregateInputType;
    _sum?: VouchersSumAggregateInputType;
    _min?: VouchersMinAggregateInputType;
    _max?: VouchersMaxAggregateInputType;
};
export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
    [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVouchers[P]> : Prisma.GetScalarType<T[P], AggregateVouchers[P]>;
};
export type vouchersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vouchersWhereInput;
    orderBy?: Prisma.vouchersOrderByWithAggregationInput | Prisma.vouchersOrderByWithAggregationInput[];
    by: Prisma.VouchersScalarFieldEnum[] | Prisma.VouchersScalarFieldEnum;
    having?: Prisma.vouchersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VouchersCountAggregateInputType | true;
    _avg?: VouchersAvgAggregateInputType;
    _sum?: VouchersSumAggregateInputType;
    _min?: VouchersMinAggregateInputType;
    _max?: VouchersMaxAggregateInputType;
};
export type VouchersGroupByOutputType = {
    voucher_id: number;
    code: string;
    discount_amount: runtime.Decimal;
    conditions: string | null;
    valid_from: Date | null;
    valid_until: Date | null;
    is_active: boolean | null;
    created_at: Date | null;
    _count: VouchersCountAggregateOutputType | null;
    _avg: VouchersAvgAggregateOutputType | null;
    _sum: VouchersSumAggregateOutputType | null;
    _min: VouchersMinAggregateOutputType | null;
    _max: VouchersMaxAggregateOutputType | null;
};
export type GetVouchersGroupByPayload<T extends vouchersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VouchersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VouchersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VouchersGroupByOutputType[P]>;
}>>;
export type vouchersWhereInput = {
    AND?: Prisma.vouchersWhereInput | Prisma.vouchersWhereInput[];
    OR?: Prisma.vouchersWhereInput[];
    NOT?: Prisma.vouchersWhereInput | Prisma.vouchersWhereInput[];
    voucher_id?: Prisma.IntFilter<"vouchers"> | number;
    code?: Prisma.StringFilter<"vouchers"> | string;
    discount_amount?: Prisma.DecimalFilter<"vouchers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.StringNullableFilter<"vouchers"> | string | null;
    valid_from?: Prisma.DateTimeNullableFilter<"vouchers"> | Date | string | null;
    valid_until?: Prisma.DateTimeNullableFilter<"vouchers"> | Date | string | null;
    is_active?: Prisma.BoolNullableFilter<"vouchers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"vouchers"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
};
export type vouchersOrderByWithRelationInput = {
    voucher_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    conditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    valid_from?: Prisma.SortOrderInput | Prisma.SortOrder;
    valid_until?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
};
export type vouchersWhereUniqueInput = Prisma.AtLeast<{
    voucher_id?: number;
    code?: string;
    AND?: Prisma.vouchersWhereInput | Prisma.vouchersWhereInput[];
    OR?: Prisma.vouchersWhereInput[];
    NOT?: Prisma.vouchersWhereInput | Prisma.vouchersWhereInput[];
    discount_amount?: Prisma.DecimalFilter<"vouchers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.StringNullableFilter<"vouchers"> | string | null;
    valid_from?: Prisma.DateTimeNullableFilter<"vouchers"> | Date | string | null;
    valid_until?: Prisma.DateTimeNullableFilter<"vouchers"> | Date | string | null;
    is_active?: Prisma.BoolNullableFilter<"vouchers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"vouchers"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
}, "voucher_id" | "code">;
export type vouchersOrderByWithAggregationInput = {
    voucher_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    conditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    valid_from?: Prisma.SortOrderInput | Prisma.SortOrder;
    valid_until?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.vouchersCountOrderByAggregateInput;
    _avg?: Prisma.vouchersAvgOrderByAggregateInput;
    _max?: Prisma.vouchersMaxOrderByAggregateInput;
    _min?: Prisma.vouchersMinOrderByAggregateInput;
    _sum?: Prisma.vouchersSumOrderByAggregateInput;
};
export type vouchersScalarWhereWithAggregatesInput = {
    AND?: Prisma.vouchersScalarWhereWithAggregatesInput | Prisma.vouchersScalarWhereWithAggregatesInput[];
    OR?: Prisma.vouchersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.vouchersScalarWhereWithAggregatesInput | Prisma.vouchersScalarWhereWithAggregatesInput[];
    voucher_id?: Prisma.IntWithAggregatesFilter<"vouchers"> | number;
    code?: Prisma.StringWithAggregatesFilter<"vouchers"> | string;
    discount_amount?: Prisma.DecimalWithAggregatesFilter<"vouchers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.StringNullableWithAggregatesFilter<"vouchers"> | string | null;
    valid_from?: Prisma.DateTimeNullableWithAggregatesFilter<"vouchers"> | Date | string | null;
    valid_until?: Prisma.DateTimeNullableWithAggregatesFilter<"vouchers"> | Date | string | null;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"vouchers"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"vouchers"> | Date | string | null;
};
export type vouchersCreateInput = {
    code: string;
    discount_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: string | null;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutVouchersInput;
};
export type vouchersUncheckedCreateInput = {
    voucher_id?: number;
    code: string;
    discount_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: string | null;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutVouchersInput;
};
export type vouchersUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutVouchersNestedInput;
};
export type vouchersUncheckedUpdateInput = {
    voucher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutVouchersNestedInput;
};
export type vouchersCreateManyInput = {
    voucher_id?: number;
    code: string;
    discount_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: string | null;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type vouchersUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vouchersUncheckedUpdateManyInput = {
    voucher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VouchersNullableScalarRelationFilter = {
    is?: Prisma.vouchersWhereInput | null;
    isNot?: Prisma.vouchersWhereInput | null;
};
export type vouchersCountOrderByAggregateInput = {
    voucher_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_until?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type vouchersAvgOrderByAggregateInput = {
    voucher_id?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
};
export type vouchersMaxOrderByAggregateInput = {
    voucher_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_until?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type vouchersMinOrderByAggregateInput = {
    voucher_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_until?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type vouchersSumOrderByAggregateInput = {
    voucher_id?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
};
export type vouchersCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.vouchersCreateWithoutOrdersInput, Prisma.vouchersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.vouchersCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.vouchersWhereUniqueInput;
};
export type vouchersUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.vouchersCreateWithoutOrdersInput, Prisma.vouchersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.vouchersCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.vouchersUpsertWithoutOrdersInput;
    disconnect?: Prisma.vouchersWhereInput | boolean;
    delete?: Prisma.vouchersWhereInput | boolean;
    connect?: Prisma.vouchersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.vouchersUpdateToOneWithWhereWithoutOrdersInput, Prisma.vouchersUpdateWithoutOrdersInput>, Prisma.vouchersUncheckedUpdateWithoutOrdersInput>;
};
export type vouchersCreateWithoutOrdersInput = {
    code: string;
    discount_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: string | null;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type vouchersUncheckedCreateWithoutOrdersInput = {
    voucher_id?: number;
    code: string;
    discount_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: string | null;
    valid_from?: Date | string | null;
    valid_until?: Date | string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type vouchersCreateOrConnectWithoutOrdersInput = {
    where: Prisma.vouchersWhereUniqueInput;
    create: Prisma.XOR<Prisma.vouchersCreateWithoutOrdersInput, Prisma.vouchersUncheckedCreateWithoutOrdersInput>;
};
export type vouchersUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.vouchersUpdateWithoutOrdersInput, Prisma.vouchersUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.vouchersCreateWithoutOrdersInput, Prisma.vouchersUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.vouchersWhereInput;
};
export type vouchersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.vouchersWhereInput;
    data: Prisma.XOR<Prisma.vouchersUpdateWithoutOrdersInput, Prisma.vouchersUncheckedUpdateWithoutOrdersInput>;
};
export type vouchersUpdateWithoutOrdersInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type vouchersUncheckedUpdateWithoutOrdersInput = {
    voucher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    conditions?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    valid_from?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    valid_until?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VouchersCountOutputType = {
    orders: number;
};
export type VouchersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | VouchersCountOutputTypeCountOrdersArgs;
};
export type VouchersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VouchersCountOutputTypeSelect<ExtArgs> | null;
};
export type VouchersCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type vouchersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    voucher_id?: boolean;
    code?: boolean;
    discount_amount?: boolean;
    conditions?: boolean;
    valid_from?: boolean;
    valid_until?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.vouchers$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.VouchersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vouchers"]>;
export type vouchersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    voucher_id?: boolean;
    code?: boolean;
    discount_amount?: boolean;
    conditions?: boolean;
    valid_from?: boolean;
    valid_until?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["vouchers"]>;
export type vouchersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    voucher_id?: boolean;
    code?: boolean;
    discount_amount?: boolean;
    conditions?: boolean;
    valid_from?: boolean;
    valid_until?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["vouchers"]>;
export type vouchersSelectScalar = {
    voucher_id?: boolean;
    code?: boolean;
    discount_amount?: boolean;
    conditions?: boolean;
    valid_from?: boolean;
    valid_until?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type vouchersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"voucher_id" | "code" | "discount_amount" | "conditions" | "valid_from" | "valid_until" | "is_active" | "created_at", ExtArgs["result"]["vouchers"]>;
export type vouchersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.vouchers$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.VouchersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type vouchersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type vouchersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $vouchersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "vouchers";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        voucher_id: number;
        code: string;
        discount_amount: runtime.Decimal;
        conditions: string | null;
        valid_from: Date | null;
        valid_until: Date | null;
        is_active: boolean | null;
        created_at: Date | null;
    }, ExtArgs["result"]["vouchers"]>;
    composites: {};
};
export type vouchersGetPayload<S extends boolean | null | undefined | vouchersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$vouchersPayload, S>;
export type vouchersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<vouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VouchersCountAggregateInputType | true;
};
export interface vouchersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['vouchers'];
        meta: {
            name: 'vouchers';
        };
    };
    findUnique<T extends vouchersFindUniqueArgs>(args: Prisma.SelectSubset<T, vouchersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends vouchersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, vouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends vouchersFindFirstArgs>(args?: Prisma.SelectSubset<T, vouchersFindFirstArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends vouchersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, vouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends vouchersFindManyArgs>(args?: Prisma.SelectSubset<T, vouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends vouchersCreateArgs>(args: Prisma.SelectSubset<T, vouchersCreateArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends vouchersCreateManyArgs>(args?: Prisma.SelectSubset<T, vouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends vouchersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, vouchersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends vouchersDeleteArgs>(args: Prisma.SelectSubset<T, vouchersDeleteArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends vouchersUpdateArgs>(args: Prisma.SelectSubset<T, vouchersUpdateArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends vouchersDeleteManyArgs>(args?: Prisma.SelectSubset<T, vouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends vouchersUpdateManyArgs>(args: Prisma.SelectSubset<T, vouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends vouchersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, vouchersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends vouchersUpsertArgs>(args: Prisma.SelectSubset<T, vouchersUpsertArgs<ExtArgs>>): Prisma.Prisma__vouchersClient<runtime.Types.Result.GetResult<Prisma.$vouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends vouchersCountArgs>(args?: Prisma.Subset<T, vouchersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VouchersCountAggregateOutputType> : number>;
    aggregate<T extends VouchersAggregateArgs>(args: Prisma.Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>;
    groupBy<T extends vouchersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: vouchersGroupByArgs['orderBy'];
    } : {
        orderBy?: vouchersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, vouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: vouchersFieldRefs;
}
export interface Prisma__vouchersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.vouchers$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.vouchers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface vouchersFieldRefs {
    readonly voucher_id: Prisma.FieldRef<"vouchers", 'Int'>;
    readonly code: Prisma.FieldRef<"vouchers", 'String'>;
    readonly discount_amount: Prisma.FieldRef<"vouchers", 'Decimal'>;
    readonly conditions: Prisma.FieldRef<"vouchers", 'String'>;
    readonly valid_from: Prisma.FieldRef<"vouchers", 'DateTime'>;
    readonly valid_until: Prisma.FieldRef<"vouchers", 'DateTime'>;
    readonly is_active: Prisma.FieldRef<"vouchers", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"vouchers", 'DateTime'>;
}
export type vouchersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where: Prisma.vouchersWhereUniqueInput;
};
export type vouchersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where: Prisma.vouchersWhereUniqueInput;
};
export type vouchersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where?: Prisma.vouchersWhereInput;
    orderBy?: Prisma.vouchersOrderByWithRelationInput | Prisma.vouchersOrderByWithRelationInput[];
    cursor?: Prisma.vouchersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VouchersScalarFieldEnum | Prisma.VouchersScalarFieldEnum[];
};
export type vouchersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where?: Prisma.vouchersWhereInput;
    orderBy?: Prisma.vouchersOrderByWithRelationInput | Prisma.vouchersOrderByWithRelationInput[];
    cursor?: Prisma.vouchersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VouchersScalarFieldEnum | Prisma.VouchersScalarFieldEnum[];
};
export type vouchersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where?: Prisma.vouchersWhereInput;
    orderBy?: Prisma.vouchersOrderByWithRelationInput | Prisma.vouchersOrderByWithRelationInput[];
    cursor?: Prisma.vouchersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VouchersScalarFieldEnum | Prisma.VouchersScalarFieldEnum[];
};
export type vouchersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.vouchersCreateInput, Prisma.vouchersUncheckedCreateInput>;
};
export type vouchersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.vouchersCreateManyInput | Prisma.vouchersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type vouchersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    data: Prisma.vouchersCreateManyInput | Prisma.vouchersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type vouchersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.vouchersUpdateInput, Prisma.vouchersUncheckedUpdateInput>;
    where: Prisma.vouchersWhereUniqueInput;
};
export type vouchersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.vouchersUpdateManyMutationInput, Prisma.vouchersUncheckedUpdateManyInput>;
    where?: Prisma.vouchersWhereInput;
    limit?: number;
};
export type vouchersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.vouchersUpdateManyMutationInput, Prisma.vouchersUncheckedUpdateManyInput>;
    where?: Prisma.vouchersWhereInput;
    limit?: number;
};
export type vouchersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where: Prisma.vouchersWhereUniqueInput;
    create: Prisma.XOR<Prisma.vouchersCreateInput, Prisma.vouchersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.vouchersUpdateInput, Prisma.vouchersUncheckedUpdateInput>;
};
export type vouchersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
    where: Prisma.vouchersWhereUniqueInput;
};
export type vouchersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vouchersWhereInput;
    limit?: number;
};
export type vouchers$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type vouchersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.vouchersSelect<ExtArgs> | null;
    omit?: Prisma.vouchersOmit<ExtArgs> | null;
    include?: Prisma.vouchersInclude<ExtArgs> | null;
};
