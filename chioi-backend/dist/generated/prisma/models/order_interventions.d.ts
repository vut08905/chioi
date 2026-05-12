import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_interventionsModel = runtime.Types.Result.DefaultSelection<Prisma.$order_interventionsPayload>;
export type AggregateOrder_interventions = {
    _count: Order_interventionsCountAggregateOutputType | null;
    _avg: Order_interventionsAvgAggregateOutputType | null;
    _sum: Order_interventionsSumAggregateOutputType | null;
    _min: Order_interventionsMinAggregateOutputType | null;
    _max: Order_interventionsMaxAggregateOutputType | null;
};
export type Order_interventionsAvgAggregateOutputType = {
    intervention_id: number | null;
    order_id: number | null;
    admin_id: number | null;
};
export type Order_interventionsSumAggregateOutputType = {
    intervention_id: number | null;
    order_id: number | null;
    admin_id: number | null;
};
export type Order_interventionsMinAggregateOutputType = {
    intervention_id: number | null;
    order_id: number | null;
    admin_id: number | null;
    action_type: string | null;
    reason: string | null;
    created_at: Date | null;
};
export type Order_interventionsMaxAggregateOutputType = {
    intervention_id: number | null;
    order_id: number | null;
    admin_id: number | null;
    action_type: string | null;
    reason: string | null;
    created_at: Date | null;
};
export type Order_interventionsCountAggregateOutputType = {
    intervention_id: number;
    order_id: number;
    admin_id: number;
    action_type: number;
    reason: number;
    created_at: number;
    _all: number;
};
export type Order_interventionsAvgAggregateInputType = {
    intervention_id?: true;
    order_id?: true;
    admin_id?: true;
};
export type Order_interventionsSumAggregateInputType = {
    intervention_id?: true;
    order_id?: true;
    admin_id?: true;
};
export type Order_interventionsMinAggregateInputType = {
    intervention_id?: true;
    order_id?: true;
    admin_id?: true;
    action_type?: true;
    reason?: true;
    created_at?: true;
};
export type Order_interventionsMaxAggregateInputType = {
    intervention_id?: true;
    order_id?: true;
    admin_id?: true;
    action_type?: true;
    reason?: true;
    created_at?: true;
};
export type Order_interventionsCountAggregateInputType = {
    intervention_id?: true;
    order_id?: true;
    admin_id?: true;
    action_type?: true;
    reason?: true;
    created_at?: true;
    _all?: true;
};
export type Order_interventionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_interventionsWhereInput;
    orderBy?: Prisma.order_interventionsOrderByWithRelationInput | Prisma.order_interventionsOrderByWithRelationInput[];
    cursor?: Prisma.order_interventionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_interventionsCountAggregateInputType;
    _avg?: Order_interventionsAvgAggregateInputType;
    _sum?: Order_interventionsSumAggregateInputType;
    _min?: Order_interventionsMinAggregateInputType;
    _max?: Order_interventionsMaxAggregateInputType;
};
export type GetOrder_interventionsAggregateType<T extends Order_interventionsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_interventions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_interventions[P]> : Prisma.GetScalarType<T[P], AggregateOrder_interventions[P]>;
};
export type order_interventionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_interventionsWhereInput;
    orderBy?: Prisma.order_interventionsOrderByWithAggregationInput | Prisma.order_interventionsOrderByWithAggregationInput[];
    by: Prisma.Order_interventionsScalarFieldEnum[] | Prisma.Order_interventionsScalarFieldEnum;
    having?: Prisma.order_interventionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_interventionsCountAggregateInputType | true;
    _avg?: Order_interventionsAvgAggregateInputType;
    _sum?: Order_interventionsSumAggregateInputType;
    _min?: Order_interventionsMinAggregateInputType;
    _max?: Order_interventionsMaxAggregateInputType;
};
export type Order_interventionsGroupByOutputType = {
    intervention_id: number;
    order_id: number;
    admin_id: number;
    action_type: string;
    reason: string | null;
    created_at: Date | null;
    _count: Order_interventionsCountAggregateOutputType | null;
    _avg: Order_interventionsAvgAggregateOutputType | null;
    _sum: Order_interventionsSumAggregateOutputType | null;
    _min: Order_interventionsMinAggregateOutputType | null;
    _max: Order_interventionsMaxAggregateOutputType | null;
};
export type GetOrder_interventionsGroupByPayload<T extends order_interventionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_interventionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_interventionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_interventionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_interventionsGroupByOutputType[P]>;
}>>;
export type order_interventionsWhereInput = {
    AND?: Prisma.order_interventionsWhereInput | Prisma.order_interventionsWhereInput[];
    OR?: Prisma.order_interventionsWhereInput[];
    NOT?: Prisma.order_interventionsWhereInput | Prisma.order_interventionsWhereInput[];
    intervention_id?: Prisma.IntFilter<"order_interventions"> | number;
    order_id?: Prisma.IntFilter<"order_interventions"> | number;
    admin_id?: Prisma.IntFilter<"order_interventions"> | number;
    action_type?: Prisma.StringFilter<"order_interventions"> | string;
    reason?: Prisma.StringNullableFilter<"order_interventions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"order_interventions"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsScalarRelationFilter, Prisma.adminsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type order_interventionsOrderByWithRelationInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    admins?: Prisma.adminsOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type order_interventionsWhereUniqueInput = Prisma.AtLeast<{
    intervention_id?: number;
    AND?: Prisma.order_interventionsWhereInput | Prisma.order_interventionsWhereInput[];
    OR?: Prisma.order_interventionsWhereInput[];
    NOT?: Prisma.order_interventionsWhereInput | Prisma.order_interventionsWhereInput[];
    order_id?: Prisma.IntFilter<"order_interventions"> | number;
    admin_id?: Prisma.IntFilter<"order_interventions"> | number;
    action_type?: Prisma.StringFilter<"order_interventions"> | string;
    reason?: Prisma.StringNullableFilter<"order_interventions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"order_interventions"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsScalarRelationFilter, Prisma.adminsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "intervention_id">;
export type order_interventionsOrderByWithAggregationInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.order_interventionsCountOrderByAggregateInput;
    _avg?: Prisma.order_interventionsAvgOrderByAggregateInput;
    _max?: Prisma.order_interventionsMaxOrderByAggregateInput;
    _min?: Prisma.order_interventionsMinOrderByAggregateInput;
    _sum?: Prisma.order_interventionsSumOrderByAggregateInput;
};
export type order_interventionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_interventionsScalarWhereWithAggregatesInput | Prisma.order_interventionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_interventionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_interventionsScalarWhereWithAggregatesInput | Prisma.order_interventionsScalarWhereWithAggregatesInput[];
    intervention_id?: Prisma.IntWithAggregatesFilter<"order_interventions"> | number;
    order_id?: Prisma.IntWithAggregatesFilter<"order_interventions"> | number;
    admin_id?: Prisma.IntWithAggregatesFilter<"order_interventions"> | number;
    action_type?: Prisma.StringWithAggregatesFilter<"order_interventions"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"order_interventions"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"order_interventions"> | Date | string | null;
};
export type order_interventionsCreateInput = {
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
    admins: Prisma.adminsCreateNestedOneWithoutOrder_interventionsInput;
    orders: Prisma.ordersCreateNestedOneWithoutOrder_interventionsInput;
};
export type order_interventionsUncheckedCreateInput = {
    intervention_id?: number;
    order_id: number;
    admin_id: number;
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
};
export type order_interventionsUpdateInput = {
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneRequiredWithoutOrder_interventionsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutOrder_interventionsNestedInput;
};
export type order_interventionsUncheckedUpdateInput = {
    intervention_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type order_interventionsCreateManyInput = {
    intervention_id?: number;
    order_id: number;
    admin_id: number;
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
};
export type order_interventionsUpdateManyMutationInput = {
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type order_interventionsUncheckedUpdateManyInput = {
    intervention_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Order_interventionsListRelationFilter = {
    every?: Prisma.order_interventionsWhereInput;
    some?: Prisma.order_interventionsWhereInput;
    none?: Prisma.order_interventionsWhereInput;
};
export type order_interventionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type order_interventionsCountOrderByAggregateInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_interventionsAvgOrderByAggregateInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type order_interventionsMaxOrderByAggregateInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_interventionsMinOrderByAggregateInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action_type?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type order_interventionsSumOrderByAggregateInput = {
    intervention_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type order_interventionsCreateNestedManyWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutAdminsInput, Prisma.order_interventionsUncheckedCreateWithoutAdminsInput> | Prisma.order_interventionsCreateWithoutAdminsInput[] | Prisma.order_interventionsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutAdminsInput | Prisma.order_interventionsCreateOrConnectWithoutAdminsInput[];
    createMany?: Prisma.order_interventionsCreateManyAdminsInputEnvelope;
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
};
export type order_interventionsUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutAdminsInput, Prisma.order_interventionsUncheckedCreateWithoutAdminsInput> | Prisma.order_interventionsCreateWithoutAdminsInput[] | Prisma.order_interventionsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutAdminsInput | Prisma.order_interventionsCreateOrConnectWithoutAdminsInput[];
    createMany?: Prisma.order_interventionsCreateManyAdminsInputEnvelope;
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
};
export type order_interventionsUpdateManyWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutAdminsInput, Prisma.order_interventionsUncheckedCreateWithoutAdminsInput> | Prisma.order_interventionsCreateWithoutAdminsInput[] | Prisma.order_interventionsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutAdminsInput | Prisma.order_interventionsCreateOrConnectWithoutAdminsInput[];
    upsert?: Prisma.order_interventionsUpsertWithWhereUniqueWithoutAdminsInput | Prisma.order_interventionsUpsertWithWhereUniqueWithoutAdminsInput[];
    createMany?: Prisma.order_interventionsCreateManyAdminsInputEnvelope;
    set?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    disconnect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    delete?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    update?: Prisma.order_interventionsUpdateWithWhereUniqueWithoutAdminsInput | Prisma.order_interventionsUpdateWithWhereUniqueWithoutAdminsInput[];
    updateMany?: Prisma.order_interventionsUpdateManyWithWhereWithoutAdminsInput | Prisma.order_interventionsUpdateManyWithWhereWithoutAdminsInput[];
    deleteMany?: Prisma.order_interventionsScalarWhereInput | Prisma.order_interventionsScalarWhereInput[];
};
export type order_interventionsUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutAdminsInput, Prisma.order_interventionsUncheckedCreateWithoutAdminsInput> | Prisma.order_interventionsCreateWithoutAdminsInput[] | Prisma.order_interventionsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutAdminsInput | Prisma.order_interventionsCreateOrConnectWithoutAdminsInput[];
    upsert?: Prisma.order_interventionsUpsertWithWhereUniqueWithoutAdminsInput | Prisma.order_interventionsUpsertWithWhereUniqueWithoutAdminsInput[];
    createMany?: Prisma.order_interventionsCreateManyAdminsInputEnvelope;
    set?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    disconnect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    delete?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    update?: Prisma.order_interventionsUpdateWithWhereUniqueWithoutAdminsInput | Prisma.order_interventionsUpdateWithWhereUniqueWithoutAdminsInput[];
    updateMany?: Prisma.order_interventionsUpdateManyWithWhereWithoutAdminsInput | Prisma.order_interventionsUpdateManyWithWhereWithoutAdminsInput[];
    deleteMany?: Prisma.order_interventionsScalarWhereInput | Prisma.order_interventionsScalarWhereInput[];
};
export type order_interventionsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutOrdersInput, Prisma.order_interventionsUncheckedCreateWithoutOrdersInput> | Prisma.order_interventionsCreateWithoutOrdersInput[] | Prisma.order_interventionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutOrdersInput | Prisma.order_interventionsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_interventionsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
};
export type order_interventionsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutOrdersInput, Prisma.order_interventionsUncheckedCreateWithoutOrdersInput> | Prisma.order_interventionsCreateWithoutOrdersInput[] | Prisma.order_interventionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutOrdersInput | Prisma.order_interventionsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_interventionsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
};
export type order_interventionsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutOrdersInput, Prisma.order_interventionsUncheckedCreateWithoutOrdersInput> | Prisma.order_interventionsCreateWithoutOrdersInput[] | Prisma.order_interventionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutOrdersInput | Prisma.order_interventionsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_interventionsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_interventionsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_interventionsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    disconnect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    delete?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    update?: Prisma.order_interventionsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_interventionsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_interventionsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_interventionsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_interventionsScalarWhereInput | Prisma.order_interventionsScalarWhereInput[];
};
export type order_interventionsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_interventionsCreateWithoutOrdersInput, Prisma.order_interventionsUncheckedCreateWithoutOrdersInput> | Prisma.order_interventionsCreateWithoutOrdersInput[] | Prisma.order_interventionsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_interventionsCreateOrConnectWithoutOrdersInput | Prisma.order_interventionsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_interventionsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_interventionsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_interventionsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    disconnect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    delete?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    connect?: Prisma.order_interventionsWhereUniqueInput | Prisma.order_interventionsWhereUniqueInput[];
    update?: Prisma.order_interventionsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_interventionsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_interventionsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_interventionsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_interventionsScalarWhereInput | Prisma.order_interventionsScalarWhereInput[];
};
export type order_interventionsCreateWithoutAdminsInput = {
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutOrder_interventionsInput;
};
export type order_interventionsUncheckedCreateWithoutAdminsInput = {
    intervention_id?: number;
    order_id: number;
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
};
export type order_interventionsCreateOrConnectWithoutAdminsInput = {
    where: Prisma.order_interventionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_interventionsCreateWithoutAdminsInput, Prisma.order_interventionsUncheckedCreateWithoutAdminsInput>;
};
export type order_interventionsCreateManyAdminsInputEnvelope = {
    data: Prisma.order_interventionsCreateManyAdminsInput | Prisma.order_interventionsCreateManyAdminsInput[];
    skipDuplicates?: boolean;
};
export type order_interventionsUpsertWithWhereUniqueWithoutAdminsInput = {
    where: Prisma.order_interventionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_interventionsUpdateWithoutAdminsInput, Prisma.order_interventionsUncheckedUpdateWithoutAdminsInput>;
    create: Prisma.XOR<Prisma.order_interventionsCreateWithoutAdminsInput, Prisma.order_interventionsUncheckedCreateWithoutAdminsInput>;
};
export type order_interventionsUpdateWithWhereUniqueWithoutAdminsInput = {
    where: Prisma.order_interventionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_interventionsUpdateWithoutAdminsInput, Prisma.order_interventionsUncheckedUpdateWithoutAdminsInput>;
};
export type order_interventionsUpdateManyWithWhereWithoutAdminsInput = {
    where: Prisma.order_interventionsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_interventionsUpdateManyMutationInput, Prisma.order_interventionsUncheckedUpdateManyWithoutAdminsInput>;
};
export type order_interventionsScalarWhereInput = {
    AND?: Prisma.order_interventionsScalarWhereInput | Prisma.order_interventionsScalarWhereInput[];
    OR?: Prisma.order_interventionsScalarWhereInput[];
    NOT?: Prisma.order_interventionsScalarWhereInput | Prisma.order_interventionsScalarWhereInput[];
    intervention_id?: Prisma.IntFilter<"order_interventions"> | number;
    order_id?: Prisma.IntFilter<"order_interventions"> | number;
    admin_id?: Prisma.IntFilter<"order_interventions"> | number;
    action_type?: Prisma.StringFilter<"order_interventions"> | string;
    reason?: Prisma.StringNullableFilter<"order_interventions"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"order_interventions"> | Date | string | null;
};
export type order_interventionsCreateWithoutOrdersInput = {
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
    admins: Prisma.adminsCreateNestedOneWithoutOrder_interventionsInput;
};
export type order_interventionsUncheckedCreateWithoutOrdersInput = {
    intervention_id?: number;
    admin_id: number;
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
};
export type order_interventionsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.order_interventionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_interventionsCreateWithoutOrdersInput, Prisma.order_interventionsUncheckedCreateWithoutOrdersInput>;
};
export type order_interventionsCreateManyOrdersInputEnvelope = {
    data: Prisma.order_interventionsCreateManyOrdersInput | Prisma.order_interventionsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type order_interventionsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_interventionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_interventionsUpdateWithoutOrdersInput, Prisma.order_interventionsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.order_interventionsCreateWithoutOrdersInput, Prisma.order_interventionsUncheckedCreateWithoutOrdersInput>;
};
export type order_interventionsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_interventionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_interventionsUpdateWithoutOrdersInput, Prisma.order_interventionsUncheckedUpdateWithoutOrdersInput>;
};
export type order_interventionsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.order_interventionsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_interventionsUpdateManyMutationInput, Prisma.order_interventionsUncheckedUpdateManyWithoutOrdersInput>;
};
export type order_interventionsCreateManyAdminsInput = {
    intervention_id?: number;
    order_id: number;
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
};
export type order_interventionsUpdateWithoutAdminsInput = {
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutOrder_interventionsNestedInput;
};
export type order_interventionsUncheckedUpdateWithoutAdminsInput = {
    intervention_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type order_interventionsUncheckedUpdateManyWithoutAdminsInput = {
    intervention_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type order_interventionsCreateManyOrdersInput = {
    intervention_id?: number;
    admin_id: number;
    action_type: string;
    reason?: string | null;
    created_at?: Date | string | null;
};
export type order_interventionsUpdateWithoutOrdersInput = {
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneRequiredWithoutOrder_interventionsNestedInput;
};
export type order_interventionsUncheckedUpdateWithoutOrdersInput = {
    intervention_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type order_interventionsUncheckedUpdateManyWithoutOrdersInput = {
    intervention_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action_type?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type order_interventionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    intervention_id?: boolean;
    order_id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    reason?: boolean;
    created_at?: boolean;
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_interventions"]>;
export type order_interventionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    intervention_id?: boolean;
    order_id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    reason?: boolean;
    created_at?: boolean;
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_interventions"]>;
export type order_interventionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    intervention_id?: boolean;
    order_id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    reason?: boolean;
    created_at?: boolean;
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_interventions"]>;
export type order_interventionsSelectScalar = {
    intervention_id?: boolean;
    order_id?: boolean;
    admin_id?: boolean;
    action_type?: boolean;
    reason?: boolean;
    created_at?: boolean;
};
export type order_interventionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"intervention_id" | "order_id" | "admin_id" | "action_type" | "reason" | "created_at", ExtArgs["result"]["order_interventions"]>;
export type order_interventionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type order_interventionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type order_interventionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $order_interventionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_interventions";
    objects: {
        admins: Prisma.$adminsPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        intervention_id: number;
        order_id: number;
        admin_id: number;
        action_type: string;
        reason: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["order_interventions"]>;
    composites: {};
};
export type order_interventionsGetPayload<S extends boolean | null | undefined | order_interventionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload, S>;
export type order_interventionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_interventionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_interventionsCountAggregateInputType | true;
};
export interface order_interventionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_interventions'];
        meta: {
            name: 'order_interventions';
        };
    };
    findUnique<T extends order_interventionsFindUniqueArgs>(args: Prisma.SelectSubset<T, order_interventionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_interventionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_interventionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_interventionsFindFirstArgs>(args?: Prisma.SelectSubset<T, order_interventionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_interventionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_interventionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_interventionsFindManyArgs>(args?: Prisma.SelectSubset<T, order_interventionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_interventionsCreateArgs>(args: Prisma.SelectSubset<T, order_interventionsCreateArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_interventionsCreateManyArgs>(args?: Prisma.SelectSubset<T, order_interventionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends order_interventionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, order_interventionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends order_interventionsDeleteArgs>(args: Prisma.SelectSubset<T, order_interventionsDeleteArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_interventionsUpdateArgs>(args: Prisma.SelectSubset<T, order_interventionsUpdateArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_interventionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_interventionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_interventionsUpdateManyArgs>(args: Prisma.SelectSubset<T, order_interventionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends order_interventionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, order_interventionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends order_interventionsUpsertArgs>(args: Prisma.SelectSubset<T, order_interventionsUpsertArgs<ExtArgs>>): Prisma.Prisma__order_interventionsClient<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_interventionsCountArgs>(args?: Prisma.Subset<T, order_interventionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_interventionsCountAggregateOutputType> : number>;
    aggregate<T extends Order_interventionsAggregateArgs>(args: Prisma.Subset<T, Order_interventionsAggregateArgs>): Prisma.PrismaPromise<GetOrder_interventionsAggregateType<T>>;
    groupBy<T extends order_interventionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_interventionsGroupByArgs['orderBy'];
    } : {
        orderBy?: order_interventionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_interventionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_interventionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_interventionsFieldRefs;
}
export interface Prisma__order_interventionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admins<T extends Prisma.adminsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.adminsDefaultArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_interventionsFieldRefs {
    readonly intervention_id: Prisma.FieldRef<"order_interventions", 'Int'>;
    readonly order_id: Prisma.FieldRef<"order_interventions", 'Int'>;
    readonly admin_id: Prisma.FieldRef<"order_interventions", 'Int'>;
    readonly action_type: Prisma.FieldRef<"order_interventions", 'String'>;
    readonly reason: Prisma.FieldRef<"order_interventions", 'String'>;
    readonly created_at: Prisma.FieldRef<"order_interventions", 'DateTime'>;
}
export type order_interventionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where: Prisma.order_interventionsWhereUniqueInput;
};
export type order_interventionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where: Prisma.order_interventionsWhereUniqueInput;
};
export type order_interventionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where?: Prisma.order_interventionsWhereInput;
    orderBy?: Prisma.order_interventionsOrderByWithRelationInput | Prisma.order_interventionsOrderByWithRelationInput[];
    cursor?: Prisma.order_interventionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_interventionsScalarFieldEnum | Prisma.Order_interventionsScalarFieldEnum[];
};
export type order_interventionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where?: Prisma.order_interventionsWhereInput;
    orderBy?: Prisma.order_interventionsOrderByWithRelationInput | Prisma.order_interventionsOrderByWithRelationInput[];
    cursor?: Prisma.order_interventionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_interventionsScalarFieldEnum | Prisma.Order_interventionsScalarFieldEnum[];
};
export type order_interventionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where?: Prisma.order_interventionsWhereInput;
    orderBy?: Prisma.order_interventionsOrderByWithRelationInput | Prisma.order_interventionsOrderByWithRelationInput[];
    cursor?: Prisma.order_interventionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_interventionsScalarFieldEnum | Prisma.Order_interventionsScalarFieldEnum[];
};
export type order_interventionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_interventionsCreateInput, Prisma.order_interventionsUncheckedCreateInput>;
};
export type order_interventionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_interventionsCreateManyInput | Prisma.order_interventionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_interventionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    data: Prisma.order_interventionsCreateManyInput | Prisma.order_interventionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.order_interventionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type order_interventionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_interventionsUpdateInput, Prisma.order_interventionsUncheckedUpdateInput>;
    where: Prisma.order_interventionsWhereUniqueInput;
};
export type order_interventionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_interventionsUpdateManyMutationInput, Prisma.order_interventionsUncheckedUpdateManyInput>;
    where?: Prisma.order_interventionsWhereInput;
    limit?: number;
};
export type order_interventionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_interventionsUpdateManyMutationInput, Prisma.order_interventionsUncheckedUpdateManyInput>;
    where?: Prisma.order_interventionsWhereInput;
    limit?: number;
    include?: Prisma.order_interventionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type order_interventionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where: Prisma.order_interventionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_interventionsCreateInput, Prisma.order_interventionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_interventionsUpdateInput, Prisma.order_interventionsUncheckedUpdateInput>;
};
export type order_interventionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
    where: Prisma.order_interventionsWhereUniqueInput;
};
export type order_interventionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_interventionsWhereInput;
    limit?: number;
};
export type order_interventionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_interventionsSelect<ExtArgs> | null;
    omit?: Prisma.order_interventionsOmit<ExtArgs> | null;
    include?: Prisma.order_interventionsInclude<ExtArgs> | null;
};
