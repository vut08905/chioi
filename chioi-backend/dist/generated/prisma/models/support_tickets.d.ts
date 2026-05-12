import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type support_ticketsModel = runtime.Types.Result.DefaultSelection<Prisma.$support_ticketsPayload>;
export type AggregateSupport_tickets = {
    _count: Support_ticketsCountAggregateOutputType | null;
    _avg: Support_ticketsAvgAggregateOutputType | null;
    _sum: Support_ticketsSumAggregateOutputType | null;
    _min: Support_ticketsMinAggregateOutputType | null;
    _max: Support_ticketsMaxAggregateOutputType | null;
};
export type Support_ticketsAvgAggregateOutputType = {
    ticket_id: number | null;
    user_id: number | null;
    admin_id: number | null;
    order_id: number | null;
};
export type Support_ticketsSumAggregateOutputType = {
    ticket_id: number | null;
    user_id: number | null;
    admin_id: number | null;
    order_id: number | null;
};
export type Support_ticketsMinAggregateOutputType = {
    ticket_id: number | null;
    ticket_code: string | null;
    user_id: number | null;
    admin_id: number | null;
    order_id: number | null;
    subject: string | null;
    description: string | null;
    status: string | null;
    priority: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Support_ticketsMaxAggregateOutputType = {
    ticket_id: number | null;
    ticket_code: string | null;
    user_id: number | null;
    admin_id: number | null;
    order_id: number | null;
    subject: string | null;
    description: string | null;
    status: string | null;
    priority: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Support_ticketsCountAggregateOutputType = {
    ticket_id: number;
    ticket_code: number;
    user_id: number;
    admin_id: number;
    order_id: number;
    subject: number;
    description: number;
    status: number;
    priority: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Support_ticketsAvgAggregateInputType = {
    ticket_id?: true;
    user_id?: true;
    admin_id?: true;
    order_id?: true;
};
export type Support_ticketsSumAggregateInputType = {
    ticket_id?: true;
    user_id?: true;
    admin_id?: true;
    order_id?: true;
};
export type Support_ticketsMinAggregateInputType = {
    ticket_id?: true;
    ticket_code?: true;
    user_id?: true;
    admin_id?: true;
    order_id?: true;
    subject?: true;
    description?: true;
    status?: true;
    priority?: true;
    created_at?: true;
    updated_at?: true;
};
export type Support_ticketsMaxAggregateInputType = {
    ticket_id?: true;
    ticket_code?: true;
    user_id?: true;
    admin_id?: true;
    order_id?: true;
    subject?: true;
    description?: true;
    status?: true;
    priority?: true;
    created_at?: true;
    updated_at?: true;
};
export type Support_ticketsCountAggregateInputType = {
    ticket_id?: true;
    ticket_code?: true;
    user_id?: true;
    admin_id?: true;
    order_id?: true;
    subject?: true;
    description?: true;
    status?: true;
    priority?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Support_ticketsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Support_ticketsCountAggregateInputType;
    _avg?: Support_ticketsAvgAggregateInputType;
    _sum?: Support_ticketsSumAggregateInputType;
    _min?: Support_ticketsMinAggregateInputType;
    _max?: Support_ticketsMaxAggregateInputType;
};
export type GetSupport_ticketsAggregateType<T extends Support_ticketsAggregateArgs> = {
    [P in keyof T & keyof AggregateSupport_tickets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupport_tickets[P]> : Prisma.GetScalarType<T[P], AggregateSupport_tickets[P]>;
};
export type support_ticketsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithAggregationInput | Prisma.support_ticketsOrderByWithAggregationInput[];
    by: Prisma.Support_ticketsScalarFieldEnum[] | Prisma.Support_ticketsScalarFieldEnum;
    having?: Prisma.support_ticketsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Support_ticketsCountAggregateInputType | true;
    _avg?: Support_ticketsAvgAggregateInputType;
    _sum?: Support_ticketsSumAggregateInputType;
    _min?: Support_ticketsMinAggregateInputType;
    _max?: Support_ticketsMaxAggregateInputType;
};
export type Support_ticketsGroupByOutputType = {
    ticket_id: number;
    ticket_code: string;
    user_id: number;
    admin_id: number | null;
    order_id: number | null;
    subject: string;
    description: string;
    status: string | null;
    priority: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Support_ticketsCountAggregateOutputType | null;
    _avg: Support_ticketsAvgAggregateOutputType | null;
    _sum: Support_ticketsSumAggregateOutputType | null;
    _min: Support_ticketsMinAggregateOutputType | null;
    _max: Support_ticketsMaxAggregateOutputType | null;
};
export type GetSupport_ticketsGroupByPayload<T extends support_ticketsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Support_ticketsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Support_ticketsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Support_ticketsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Support_ticketsGroupByOutputType[P]>;
}>>;
export type support_ticketsWhereInput = {
    AND?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    OR?: Prisma.support_ticketsWhereInput[];
    NOT?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    ticket_id?: Prisma.IntFilter<"support_tickets"> | number;
    ticket_code?: Prisma.StringFilter<"support_tickets"> | string;
    user_id?: Prisma.IntFilter<"support_tickets"> | number;
    admin_id?: Prisma.IntNullableFilter<"support_tickets"> | number | null;
    order_id?: Prisma.IntNullableFilter<"support_tickets"> | number | null;
    subject?: Prisma.StringFilter<"support_tickets"> | string;
    description?: Prisma.StringFilter<"support_tickets"> | string;
    status?: Prisma.StringNullableFilter<"support_tickets"> | string | null;
    priority?: Prisma.StringNullableFilter<"support_tickets"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"support_tickets"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"support_tickets"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsNullableScalarRelationFilter, Prisma.adminsWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type support_ticketsOrderByWithRelationInput = {
    ticket_id?: Prisma.SortOrder;
    ticket_code?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    admins?: Prisma.adminsOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type support_ticketsWhereUniqueInput = Prisma.AtLeast<{
    ticket_id?: number;
    ticket_code?: string;
    AND?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    OR?: Prisma.support_ticketsWhereInput[];
    NOT?: Prisma.support_ticketsWhereInput | Prisma.support_ticketsWhereInput[];
    user_id?: Prisma.IntFilter<"support_tickets"> | number;
    admin_id?: Prisma.IntNullableFilter<"support_tickets"> | number | null;
    order_id?: Prisma.IntNullableFilter<"support_tickets"> | number | null;
    subject?: Prisma.StringFilter<"support_tickets"> | string;
    description?: Prisma.StringFilter<"support_tickets"> | string;
    status?: Prisma.StringNullableFilter<"support_tickets"> | string | null;
    priority?: Prisma.StringNullableFilter<"support_tickets"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"support_tickets"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"support_tickets"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsNullableScalarRelationFilter, Prisma.adminsWhereInput> | null;
    orders?: Prisma.XOR<Prisma.OrdersNullableScalarRelationFilter, Prisma.ordersWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "ticket_id" | "ticket_code">;
export type support_ticketsOrderByWithAggregationInput = {
    ticket_id?: Prisma.SortOrder;
    ticket_code?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.support_ticketsCountOrderByAggregateInput;
    _avg?: Prisma.support_ticketsAvgOrderByAggregateInput;
    _max?: Prisma.support_ticketsMaxOrderByAggregateInput;
    _min?: Prisma.support_ticketsMinOrderByAggregateInput;
    _sum?: Prisma.support_ticketsSumOrderByAggregateInput;
};
export type support_ticketsScalarWhereWithAggregatesInput = {
    AND?: Prisma.support_ticketsScalarWhereWithAggregatesInput | Prisma.support_ticketsScalarWhereWithAggregatesInput[];
    OR?: Prisma.support_ticketsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.support_ticketsScalarWhereWithAggregatesInput | Prisma.support_ticketsScalarWhereWithAggregatesInput[];
    ticket_id?: Prisma.IntWithAggregatesFilter<"support_tickets"> | number;
    ticket_code?: Prisma.StringWithAggregatesFilter<"support_tickets"> | string;
    user_id?: Prisma.IntWithAggregatesFilter<"support_tickets"> | number;
    admin_id?: Prisma.IntNullableWithAggregatesFilter<"support_tickets"> | number | null;
    order_id?: Prisma.IntNullableWithAggregatesFilter<"support_tickets"> | number | null;
    subject?: Prisma.StringWithAggregatesFilter<"support_tickets"> | string;
    description?: Prisma.StringWithAggregatesFilter<"support_tickets"> | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"support_tickets"> | string | null;
    priority?: Prisma.StringNullableWithAggregatesFilter<"support_tickets"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"support_tickets"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"support_tickets"> | Date | string | null;
};
export type support_ticketsCreateInput = {
    ticket_code: string;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutSupport_ticketsInput;
    orders?: Prisma.ordersCreateNestedOneWithoutSupport_ticketsInput;
    users: Prisma.usersCreateNestedOneWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateInput = {
    ticket_id?: number;
    ticket_code: string;
    user_id: number;
    admin_id?: number | null;
    order_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsUpdateInput = {
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutSupport_ticketsNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutSupport_ticketsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsCreateManyInput = {
    ticket_id?: number;
    ticket_code: string;
    user_id: number;
    admin_id?: number | null;
    order_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsUpdateManyMutationInput = {
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsUncheckedUpdateManyInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Support_ticketsListRelationFilter = {
    every?: Prisma.support_ticketsWhereInput;
    some?: Prisma.support_ticketsWhereInput;
    none?: Prisma.support_ticketsWhereInput;
};
export type support_ticketsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type support_ticketsCountOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    ticket_code?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type support_ticketsAvgOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type support_ticketsMaxOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    ticket_code?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type support_ticketsMinOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    ticket_code?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type support_ticketsSumOrderByAggregateInput = {
    ticket_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
};
export type support_ticketsCreateNestedManyWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutAdminsInput, Prisma.support_ticketsUncheckedCreateWithoutAdminsInput> | Prisma.support_ticketsCreateWithoutAdminsInput[] | Prisma.support_ticketsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutAdminsInput | Prisma.support_ticketsCreateOrConnectWithoutAdminsInput[];
    createMany?: Prisma.support_ticketsCreateManyAdminsInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutAdminsInput, Prisma.support_ticketsUncheckedCreateWithoutAdminsInput> | Prisma.support_ticketsCreateWithoutAdminsInput[] | Prisma.support_ticketsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutAdminsInput | Prisma.support_ticketsCreateOrConnectWithoutAdminsInput[];
    createMany?: Prisma.support_ticketsCreateManyAdminsInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUpdateManyWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutAdminsInput, Prisma.support_ticketsUncheckedCreateWithoutAdminsInput> | Prisma.support_ticketsCreateWithoutAdminsInput[] | Prisma.support_ticketsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutAdminsInput | Prisma.support_ticketsCreateOrConnectWithoutAdminsInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutAdminsInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutAdminsInput[];
    createMany?: Prisma.support_ticketsCreateManyAdminsInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutAdminsInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutAdminsInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutAdminsInput | Prisma.support_ticketsUpdateManyWithWhereWithoutAdminsInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutAdminsInput, Prisma.support_ticketsUncheckedCreateWithoutAdminsInput> | Prisma.support_ticketsCreateWithoutAdminsInput[] | Prisma.support_ticketsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutAdminsInput | Prisma.support_ticketsCreateOrConnectWithoutAdminsInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutAdminsInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutAdminsInput[];
    createMany?: Prisma.support_ticketsCreateManyAdminsInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutAdminsInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutAdminsInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutAdminsInput | Prisma.support_ticketsUpdateManyWithWhereWithoutAdminsInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput> | Prisma.support_ticketsCreateWithoutOrdersInput[] | Prisma.support_ticketsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutOrdersInput | Prisma.support_ticketsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.support_ticketsCreateManyOrdersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutUsersInput, Prisma.support_ticketsUncheckedCreateWithoutUsersInput> | Prisma.support_ticketsCreateWithoutUsersInput[] | Prisma.support_ticketsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutUsersInput | Prisma.support_ticketsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.support_ticketsCreateManyUsersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutUsersInput, Prisma.support_ticketsUncheckedCreateWithoutUsersInput> | Prisma.support_ticketsCreateWithoutUsersInput[] | Prisma.support_ticketsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutUsersInput | Prisma.support_ticketsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.support_ticketsCreateManyUsersInputEnvelope;
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
};
export type support_ticketsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutUsersInput, Prisma.support_ticketsUncheckedCreateWithoutUsersInput> | Prisma.support_ticketsCreateWithoutUsersInput[] | Prisma.support_ticketsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutUsersInput | Prisma.support_ticketsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutUsersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.support_ticketsCreateManyUsersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutUsersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutUsersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.support_ticketsCreateWithoutUsersInput, Prisma.support_ticketsUncheckedCreateWithoutUsersInput> | Prisma.support_ticketsCreateWithoutUsersInput[] | Prisma.support_ticketsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.support_ticketsCreateOrConnectWithoutUsersInput | Prisma.support_ticketsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.support_ticketsUpsertWithWhereUniqueWithoutUsersInput | Prisma.support_ticketsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.support_ticketsCreateManyUsersInputEnvelope;
    set?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    disconnect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    delete?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    connect?: Prisma.support_ticketsWhereUniqueInput | Prisma.support_ticketsWhereUniqueInput[];
    update?: Prisma.support_ticketsUpdateWithWhereUniqueWithoutUsersInput | Prisma.support_ticketsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.support_ticketsUpdateManyWithWhereWithoutUsersInput | Prisma.support_ticketsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
};
export type support_ticketsCreateWithoutAdminsInput = {
    ticket_code: string;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedOneWithoutSupport_ticketsInput;
    users: Prisma.usersCreateNestedOneWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateWithoutAdminsInput = {
    ticket_id?: number;
    ticket_code: string;
    user_id: number;
    order_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsCreateOrConnectWithoutAdminsInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutAdminsInput, Prisma.support_ticketsUncheckedCreateWithoutAdminsInput>;
};
export type support_ticketsCreateManyAdminsInputEnvelope = {
    data: Prisma.support_ticketsCreateManyAdminsInput | Prisma.support_ticketsCreateManyAdminsInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsUpsertWithWhereUniqueWithoutAdminsInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    update: Prisma.XOR<Prisma.support_ticketsUpdateWithoutAdminsInput, Prisma.support_ticketsUncheckedUpdateWithoutAdminsInput>;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutAdminsInput, Prisma.support_ticketsUncheckedCreateWithoutAdminsInput>;
};
export type support_ticketsUpdateWithWhereUniqueWithoutAdminsInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateWithoutAdminsInput, Prisma.support_ticketsUncheckedUpdateWithoutAdminsInput>;
};
export type support_ticketsUpdateManyWithWhereWithoutAdminsInput = {
    where: Prisma.support_ticketsScalarWhereInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyWithoutAdminsInput>;
};
export type support_ticketsScalarWhereInput = {
    AND?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
    OR?: Prisma.support_ticketsScalarWhereInput[];
    NOT?: Prisma.support_ticketsScalarWhereInput | Prisma.support_ticketsScalarWhereInput[];
    ticket_id?: Prisma.IntFilter<"support_tickets"> | number;
    ticket_code?: Prisma.StringFilter<"support_tickets"> | string;
    user_id?: Prisma.IntFilter<"support_tickets"> | number;
    admin_id?: Prisma.IntNullableFilter<"support_tickets"> | number | null;
    order_id?: Prisma.IntNullableFilter<"support_tickets"> | number | null;
    subject?: Prisma.StringFilter<"support_tickets"> | string;
    description?: Prisma.StringFilter<"support_tickets"> | string;
    status?: Prisma.StringNullableFilter<"support_tickets"> | string | null;
    priority?: Prisma.StringNullableFilter<"support_tickets"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"support_tickets"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"support_tickets"> | Date | string | null;
};
export type support_ticketsCreateWithoutOrdersInput = {
    ticket_code: string;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutSupport_ticketsInput;
    users: Prisma.usersCreateNestedOneWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateWithoutOrdersInput = {
    ticket_id?: number;
    ticket_code: string;
    user_id: number;
    admin_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput>;
};
export type support_ticketsCreateManyOrdersInputEnvelope = {
    data: Prisma.support_ticketsCreateManyOrdersInput | Prisma.support_ticketsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    update: Prisma.XOR<Prisma.support_ticketsUpdateWithoutOrdersInput, Prisma.support_ticketsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutOrdersInput, Prisma.support_ticketsUncheckedCreateWithoutOrdersInput>;
};
export type support_ticketsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateWithoutOrdersInput, Prisma.support_ticketsUncheckedUpdateWithoutOrdersInput>;
};
export type support_ticketsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.support_ticketsScalarWhereInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyWithoutOrdersInput>;
};
export type support_ticketsCreateWithoutUsersInput = {
    ticket_code: string;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutSupport_ticketsInput;
    orders?: Prisma.ordersCreateNestedOneWithoutSupport_ticketsInput;
};
export type support_ticketsUncheckedCreateWithoutUsersInput = {
    ticket_id?: number;
    ticket_code: string;
    admin_id?: number | null;
    order_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsCreateOrConnectWithoutUsersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutUsersInput, Prisma.support_ticketsUncheckedCreateWithoutUsersInput>;
};
export type support_ticketsCreateManyUsersInputEnvelope = {
    data: Prisma.support_ticketsCreateManyUsersInput | Prisma.support_ticketsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    update: Prisma.XOR<Prisma.support_ticketsUpdateWithoutUsersInput, Prisma.support_ticketsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.support_ticketsCreateWithoutUsersInput, Prisma.support_ticketsUncheckedCreateWithoutUsersInput>;
};
export type support_ticketsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.support_ticketsWhereUniqueInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateWithoutUsersInput, Prisma.support_ticketsUncheckedUpdateWithoutUsersInput>;
};
export type support_ticketsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.support_ticketsScalarWhereInput;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyWithoutUsersInput>;
};
export type support_ticketsCreateManyAdminsInput = {
    ticket_id?: number;
    ticket_code: string;
    user_id: number;
    order_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsUpdateWithoutAdminsInput = {
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneWithoutSupport_ticketsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateWithoutAdminsInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsUncheckedUpdateManyWithoutAdminsInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsCreateManyOrdersInput = {
    ticket_id?: number;
    ticket_code: string;
    user_id: number;
    admin_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsUpdateWithoutOrdersInput = {
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutSupport_ticketsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateWithoutOrdersInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsUncheckedUpdateManyWithoutOrdersInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsCreateManyUsersInput = {
    ticket_id?: number;
    ticket_code: string;
    admin_id?: number | null;
    order_id?: number | null;
    subject: string;
    description: string;
    status?: string | null;
    priority?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type support_ticketsUpdateWithoutUsersInput = {
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutSupport_ticketsNestedInput;
    orders?: Prisma.ordersUpdateOneWithoutSupport_ticketsNestedInput;
};
export type support_ticketsUncheckedUpdateWithoutUsersInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsUncheckedUpdateManyWithoutUsersInput = {
    ticket_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ticket_code?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    priority?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type support_ticketsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ticket_id?: boolean;
    ticket_code?: boolean;
    user_id?: boolean;
    admin_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    admins?: boolean | Prisma.support_tickets$adminsArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["support_tickets"]>;
export type support_ticketsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ticket_id?: boolean;
    ticket_code?: boolean;
    user_id?: boolean;
    admin_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    admins?: boolean | Prisma.support_tickets$adminsArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["support_tickets"]>;
export type support_ticketsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ticket_id?: boolean;
    ticket_code?: boolean;
    user_id?: boolean;
    admin_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    admins?: boolean | Prisma.support_tickets$adminsArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["support_tickets"]>;
export type support_ticketsSelectScalar = {
    ticket_id?: boolean;
    ticket_code?: boolean;
    user_id?: boolean;
    admin_id?: boolean;
    order_id?: boolean;
    subject?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type support_ticketsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ticket_id" | "ticket_code" | "user_id" | "admin_id" | "order_id" | "subject" | "description" | "status" | "priority" | "created_at" | "updated_at", ExtArgs["result"]["support_tickets"]>;
export type support_ticketsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.support_tickets$adminsArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type support_ticketsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.support_tickets$adminsArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type support_ticketsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.support_tickets$adminsArgs<ExtArgs>;
    orders?: boolean | Prisma.support_tickets$ordersArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $support_ticketsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "support_tickets";
    objects: {
        admins: Prisma.$adminsPayload<ExtArgs> | null;
        orders: Prisma.$ordersPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ticket_id: number;
        ticket_code: string;
        user_id: number;
        admin_id: number | null;
        order_id: number | null;
        subject: string;
        description: string;
        status: string | null;
        priority: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["support_tickets"]>;
    composites: {};
};
export type support_ticketsGetPayload<S extends boolean | null | undefined | support_ticketsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload, S>;
export type support_ticketsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<support_ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Support_ticketsCountAggregateInputType | true;
};
export interface support_ticketsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['support_tickets'];
        meta: {
            name: 'support_tickets';
        };
    };
    findUnique<T extends support_ticketsFindUniqueArgs>(args: Prisma.SelectSubset<T, support_ticketsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends support_ticketsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, support_ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends support_ticketsFindFirstArgs>(args?: Prisma.SelectSubset<T, support_ticketsFindFirstArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends support_ticketsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, support_ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends support_ticketsFindManyArgs>(args?: Prisma.SelectSubset<T, support_ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends support_ticketsCreateArgs>(args: Prisma.SelectSubset<T, support_ticketsCreateArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends support_ticketsCreateManyArgs>(args?: Prisma.SelectSubset<T, support_ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends support_ticketsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, support_ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends support_ticketsDeleteArgs>(args: Prisma.SelectSubset<T, support_ticketsDeleteArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends support_ticketsUpdateArgs>(args: Prisma.SelectSubset<T, support_ticketsUpdateArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends support_ticketsDeleteManyArgs>(args?: Prisma.SelectSubset<T, support_ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends support_ticketsUpdateManyArgs>(args: Prisma.SelectSubset<T, support_ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends support_ticketsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, support_ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends support_ticketsUpsertArgs>(args: Prisma.SelectSubset<T, support_ticketsUpsertArgs<ExtArgs>>): Prisma.Prisma__support_ticketsClient<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends support_ticketsCountArgs>(args?: Prisma.Subset<T, support_ticketsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Support_ticketsCountAggregateOutputType> : number>;
    aggregate<T extends Support_ticketsAggregateArgs>(args: Prisma.Subset<T, Support_ticketsAggregateArgs>): Prisma.PrismaPromise<GetSupport_ticketsAggregateType<T>>;
    groupBy<T extends support_ticketsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: support_ticketsGroupByArgs['orderBy'];
    } : {
        orderBy?: support_ticketsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, support_ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupport_ticketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: support_ticketsFieldRefs;
}
export interface Prisma__support_ticketsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admins<T extends Prisma.support_tickets$adminsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.support_tickets$adminsArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.support_tickets$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.support_tickets$ordersArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface support_ticketsFieldRefs {
    readonly ticket_id: Prisma.FieldRef<"support_tickets", 'Int'>;
    readonly ticket_code: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly user_id: Prisma.FieldRef<"support_tickets", 'Int'>;
    readonly admin_id: Prisma.FieldRef<"support_tickets", 'Int'>;
    readonly order_id: Prisma.FieldRef<"support_tickets", 'Int'>;
    readonly subject: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly description: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly status: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly priority: Prisma.FieldRef<"support_tickets", 'String'>;
    readonly created_at: Prisma.FieldRef<"support_tickets", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"support_tickets", 'DateTime'>;
}
export type support_ticketsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type support_ticketsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type support_ticketsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where?: Prisma.support_ticketsWhereInput;
    orderBy?: Prisma.support_ticketsOrderByWithRelationInput | Prisma.support_ticketsOrderByWithRelationInput[];
    cursor?: Prisma.support_ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Support_ticketsScalarFieldEnum | Prisma.Support_ticketsScalarFieldEnum[];
};
export type support_ticketsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.support_ticketsCreateInput, Prisma.support_ticketsUncheckedCreateInput>;
};
export type support_ticketsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.support_ticketsCreateManyInput | Prisma.support_ticketsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type support_ticketsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    data: Prisma.support_ticketsCreateManyInput | Prisma.support_ticketsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.support_ticketsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type support_ticketsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.support_ticketsUpdateInput, Prisma.support_ticketsUncheckedUpdateInput>;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyInput>;
    where?: Prisma.support_ticketsWhereInput;
    limit?: number;
};
export type support_ticketsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.support_ticketsUpdateManyMutationInput, Prisma.support_ticketsUncheckedUpdateManyInput>;
    where?: Prisma.support_ticketsWhereInput;
    limit?: number;
    include?: Prisma.support_ticketsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type support_ticketsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.support_ticketsCreateInput, Prisma.support_ticketsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.support_ticketsUpdateInput, Prisma.support_ticketsUncheckedUpdateInput>;
};
export type support_ticketsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
    where: Prisma.support_ticketsWhereUniqueInput;
};
export type support_ticketsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
    limit?: number;
};
export type support_tickets$adminsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where?: Prisma.adminsWhereInput;
};
export type support_tickets$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
};
export type support_ticketsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.support_ticketsSelect<ExtArgs> | null;
    omit?: Prisma.support_ticketsOmit<ExtArgs> | null;
    include?: Prisma.support_ticketsInclude<ExtArgs> | null;
};
