import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type adminsModel = runtime.Types.Result.DefaultSelection<Prisma.$adminsPayload>;
export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null;
    _avg: AdminsAvgAggregateOutputType | null;
    _sum: AdminsSumAggregateOutputType | null;
    _min: AdminsMinAggregateOutputType | null;
    _max: AdminsMaxAggregateOutputType | null;
};
export type AdminsAvgAggregateOutputType = {
    admin_id: number | null;
};
export type AdminsSumAggregateOutputType = {
    admin_id: number | null;
};
export type AdminsMinAggregateOutputType = {
    admin_id: number | null;
    department: string | null;
    access_level: string | null;
};
export type AdminsMaxAggregateOutputType = {
    admin_id: number | null;
    department: string | null;
    access_level: string | null;
};
export type AdminsCountAggregateOutputType = {
    admin_id: number;
    department: number;
    access_level: number;
    _all: number;
};
export type AdminsAvgAggregateInputType = {
    admin_id?: true;
};
export type AdminsSumAggregateInputType = {
    admin_id?: true;
};
export type AdminsMinAggregateInputType = {
    admin_id?: true;
    department?: true;
    access_level?: true;
};
export type AdminsMaxAggregateInputType = {
    admin_id?: true;
    department?: true;
    access_level?: true;
};
export type AdminsCountAggregateInputType = {
    admin_id?: true;
    department?: true;
    access_level?: true;
    _all?: true;
};
export type AdminsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adminsWhereInput;
    orderBy?: Prisma.adminsOrderByWithRelationInput | Prisma.adminsOrderByWithRelationInput[];
    cursor?: Prisma.adminsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminsCountAggregateInputType;
    _avg?: AdminsAvgAggregateInputType;
    _sum?: AdminsSumAggregateInputType;
    _min?: AdminsMinAggregateInputType;
    _max?: AdminsMaxAggregateInputType;
};
export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmins[P]> : Prisma.GetScalarType<T[P], AggregateAdmins[P]>;
};
export type adminsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adminsWhereInput;
    orderBy?: Prisma.adminsOrderByWithAggregationInput | Prisma.adminsOrderByWithAggregationInput[];
    by: Prisma.AdminsScalarFieldEnum[] | Prisma.AdminsScalarFieldEnum;
    having?: Prisma.adminsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminsCountAggregateInputType | true;
    _avg?: AdminsAvgAggregateInputType;
    _sum?: AdminsSumAggregateInputType;
    _min?: AdminsMinAggregateInputType;
    _max?: AdminsMaxAggregateInputType;
};
export type AdminsGroupByOutputType = {
    admin_id: number;
    department: string | null;
    access_level: string | null;
    _count: AdminsCountAggregateOutputType | null;
    _avg: AdminsAvgAggregateOutputType | null;
    _sum: AdminsSumAggregateOutputType | null;
    _min: AdminsMinAggregateOutputType | null;
    _max: AdminsMaxAggregateOutputType | null;
};
export type GetAdminsGroupByPayload<T extends adminsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminsGroupByOutputType[P]>;
}>>;
export type adminsWhereInput = {
    AND?: Prisma.adminsWhereInput | Prisma.adminsWhereInput[];
    OR?: Prisma.adminsWhereInput[];
    NOT?: Prisma.adminsWhereInput | Prisma.adminsWhereInput[];
    admin_id?: Prisma.IntFilter<"admins"> | number;
    department?: Prisma.StringNullableFilter<"admins"> | string | null;
    access_level?: Prisma.StringNullableFilter<"admins"> | string | null;
    admin_audit_logs?: Prisma.Admin_audit_logsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    order_interventions?: Prisma.Order_interventionsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
};
export type adminsOrderByWithRelationInput = {
    admin_id?: Prisma.SortOrder;
    department?: Prisma.SortOrderInput | Prisma.SortOrder;
    access_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    admin_audit_logs?: Prisma.admin_audit_logsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    order_interventions?: Prisma.order_interventionsOrderByRelationAggregateInput;
    support_tickets?: Prisma.support_ticketsOrderByRelationAggregateInput;
};
export type adminsWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number;
    AND?: Prisma.adminsWhereInput | Prisma.adminsWhereInput[];
    OR?: Prisma.adminsWhereInput[];
    NOT?: Prisma.adminsWhereInput | Prisma.adminsWhereInput[];
    department?: Prisma.StringNullableFilter<"admins"> | string | null;
    access_level?: Prisma.StringNullableFilter<"admins"> | string | null;
    admin_audit_logs?: Prisma.Admin_audit_logsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    order_interventions?: Prisma.Order_interventionsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
}, "admin_id">;
export type adminsOrderByWithAggregationInput = {
    admin_id?: Prisma.SortOrder;
    department?: Prisma.SortOrderInput | Prisma.SortOrder;
    access_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.adminsCountOrderByAggregateInput;
    _avg?: Prisma.adminsAvgOrderByAggregateInput;
    _max?: Prisma.adminsMaxOrderByAggregateInput;
    _min?: Prisma.adminsMinOrderByAggregateInput;
    _sum?: Prisma.adminsSumOrderByAggregateInput;
};
export type adminsScalarWhereWithAggregatesInput = {
    AND?: Prisma.adminsScalarWhereWithAggregatesInput | Prisma.adminsScalarWhereWithAggregatesInput[];
    OR?: Prisma.adminsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.adminsScalarWhereWithAggregatesInput | Prisma.adminsScalarWhereWithAggregatesInput[];
    admin_id?: Prisma.IntWithAggregatesFilter<"admins"> | number;
    department?: Prisma.StringNullableWithAggregatesFilter<"admins"> | string | null;
    access_level?: Prisma.StringNullableWithAggregatesFilter<"admins"> | string | null;
};
export type adminsCreateInput = {
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsCreateNestedManyWithoutAdminsInput;
    users: Prisma.usersCreateNestedOneWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutAdminsInput;
};
export type adminsUncheckedCreateInput = {
    admin_id: number;
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedCreateNestedManyWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsUncheckedCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutAdminsInput;
};
export type adminsUpdateInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUpdateManyWithoutAdminsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutAdminsNestedInput;
};
export type adminsUncheckedUpdateInput = {
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedUpdateManyWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUncheckedUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutAdminsNestedInput;
};
export type adminsCreateManyInput = {
    admin_id: number;
    department?: string | null;
    access_level?: string | null;
};
export type adminsUpdateManyMutationInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type adminsUncheckedUpdateManyInput = {
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AdminsScalarRelationFilter = {
    is?: Prisma.adminsWhereInput;
    isNot?: Prisma.adminsWhereInput;
};
export type adminsCountOrderByAggregateInput = {
    admin_id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    access_level?: Prisma.SortOrder;
};
export type adminsAvgOrderByAggregateInput = {
    admin_id?: Prisma.SortOrder;
};
export type adminsMaxOrderByAggregateInput = {
    admin_id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    access_level?: Prisma.SortOrder;
};
export type adminsMinOrderByAggregateInput = {
    admin_id?: Prisma.SortOrder;
    department?: Prisma.SortOrder;
    access_level?: Prisma.SortOrder;
};
export type adminsSumOrderByAggregateInput = {
    admin_id?: Prisma.SortOrder;
};
export type AdminsNullableScalarRelationFilter = {
    is?: Prisma.adminsWhereInput | null;
    isNot?: Prisma.adminsWhereInput | null;
};
export type adminsCreateNestedOneWithoutAdmin_audit_logsInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutAdmin_audit_logsInput, Prisma.adminsUncheckedCreateWithoutAdmin_audit_logsInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutAdmin_audit_logsInput;
    connect?: Prisma.adminsWhereUniqueInput;
};
export type adminsUpdateOneRequiredWithoutAdmin_audit_logsNestedInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutAdmin_audit_logsInput, Prisma.adminsUncheckedCreateWithoutAdmin_audit_logsInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutAdmin_audit_logsInput;
    upsert?: Prisma.adminsUpsertWithoutAdmin_audit_logsInput;
    connect?: Prisma.adminsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminsUpdateToOneWithWhereWithoutAdmin_audit_logsInput, Prisma.adminsUpdateWithoutAdmin_audit_logsInput>, Prisma.adminsUncheckedUpdateWithoutAdmin_audit_logsInput>;
};
export type adminsCreateNestedOneWithoutOrder_interventionsInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutOrder_interventionsInput, Prisma.adminsUncheckedCreateWithoutOrder_interventionsInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutOrder_interventionsInput;
    connect?: Prisma.adminsWhereUniqueInput;
};
export type adminsUpdateOneRequiredWithoutOrder_interventionsNestedInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutOrder_interventionsInput, Prisma.adminsUncheckedCreateWithoutOrder_interventionsInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutOrder_interventionsInput;
    upsert?: Prisma.adminsUpsertWithoutOrder_interventionsInput;
    connect?: Prisma.adminsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminsUpdateToOneWithWhereWithoutOrder_interventionsInput, Prisma.adminsUpdateWithoutOrder_interventionsInput>, Prisma.adminsUncheckedUpdateWithoutOrder_interventionsInput>;
};
export type adminsCreateNestedOneWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutSupport_ticketsInput, Prisma.adminsUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutSupport_ticketsInput;
    connect?: Prisma.adminsWhereUniqueInput;
};
export type adminsUpdateOneWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutSupport_ticketsInput, Prisma.adminsUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutSupport_ticketsInput;
    upsert?: Prisma.adminsUpsertWithoutSupport_ticketsInput;
    disconnect?: Prisma.adminsWhereInput | boolean;
    delete?: Prisma.adminsWhereInput | boolean;
    connect?: Prisma.adminsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminsUpdateToOneWithWhereWithoutSupport_ticketsInput, Prisma.adminsUpdateWithoutSupport_ticketsInput>, Prisma.adminsUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type adminsCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutUsersInput, Prisma.adminsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutUsersInput;
    connect?: Prisma.adminsWhereUniqueInput;
};
export type adminsUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutUsersInput, Prisma.adminsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutUsersInput;
    connect?: Prisma.adminsWhereUniqueInput;
};
export type adminsUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutUsersInput, Prisma.adminsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.adminsUpsertWithoutUsersInput;
    disconnect?: Prisma.adminsWhereInput | boolean;
    delete?: Prisma.adminsWhereInput | boolean;
    connect?: Prisma.adminsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminsUpdateToOneWithWhereWithoutUsersInput, Prisma.adminsUpdateWithoutUsersInput>, Prisma.adminsUncheckedUpdateWithoutUsersInput>;
};
export type adminsUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.adminsCreateWithoutUsersInput, Prisma.adminsUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.adminsCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.adminsUpsertWithoutUsersInput;
    disconnect?: Prisma.adminsWhereInput | boolean;
    delete?: Prisma.adminsWhereInput | boolean;
    connect?: Prisma.adminsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminsUpdateToOneWithWhereWithoutUsersInput, Prisma.adminsUpdateWithoutUsersInput>, Prisma.adminsUncheckedUpdateWithoutUsersInput>;
};
export type adminsCreateWithoutAdmin_audit_logsInput = {
    department?: string | null;
    access_level?: string | null;
    users: Prisma.usersCreateNestedOneWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutAdminsInput;
};
export type adminsUncheckedCreateWithoutAdmin_audit_logsInput = {
    admin_id: number;
    department?: string | null;
    access_level?: string | null;
    order_interventions?: Prisma.order_interventionsUncheckedCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutAdminsInput;
};
export type adminsCreateOrConnectWithoutAdmin_audit_logsInput = {
    where: Prisma.adminsWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminsCreateWithoutAdmin_audit_logsInput, Prisma.adminsUncheckedCreateWithoutAdmin_audit_logsInput>;
};
export type adminsUpsertWithoutAdmin_audit_logsInput = {
    update: Prisma.XOR<Prisma.adminsUpdateWithoutAdmin_audit_logsInput, Prisma.adminsUncheckedUpdateWithoutAdmin_audit_logsInput>;
    create: Prisma.XOR<Prisma.adminsCreateWithoutAdmin_audit_logsInput, Prisma.adminsUncheckedCreateWithoutAdmin_audit_logsInput>;
    where?: Prisma.adminsWhereInput;
};
export type adminsUpdateToOneWithWhereWithoutAdmin_audit_logsInput = {
    where?: Prisma.adminsWhereInput;
    data: Prisma.XOR<Prisma.adminsUpdateWithoutAdmin_audit_logsInput, Prisma.adminsUncheckedUpdateWithoutAdmin_audit_logsInput>;
};
export type adminsUpdateWithoutAdmin_audit_logsInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    users?: Prisma.usersUpdateOneRequiredWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutAdminsNestedInput;
};
export type adminsUncheckedUpdateWithoutAdmin_audit_logsInput = {
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    order_interventions?: Prisma.order_interventionsUncheckedUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutAdminsNestedInput;
};
export type adminsCreateWithoutOrder_interventionsInput = {
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsCreateNestedManyWithoutAdminsInput;
    users: Prisma.usersCreateNestedOneWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutAdminsInput;
};
export type adminsUncheckedCreateWithoutOrder_interventionsInput = {
    admin_id: number;
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutAdminsInput;
};
export type adminsCreateOrConnectWithoutOrder_interventionsInput = {
    where: Prisma.adminsWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminsCreateWithoutOrder_interventionsInput, Prisma.adminsUncheckedCreateWithoutOrder_interventionsInput>;
};
export type adminsUpsertWithoutOrder_interventionsInput = {
    update: Prisma.XOR<Prisma.adminsUpdateWithoutOrder_interventionsInput, Prisma.adminsUncheckedUpdateWithoutOrder_interventionsInput>;
    create: Prisma.XOR<Prisma.adminsCreateWithoutOrder_interventionsInput, Prisma.adminsUncheckedCreateWithoutOrder_interventionsInput>;
    where?: Prisma.adminsWhereInput;
};
export type adminsUpdateToOneWithWhereWithoutOrder_interventionsInput = {
    where?: Prisma.adminsWhereInput;
    data: Prisma.XOR<Prisma.adminsUpdateWithoutOrder_interventionsInput, Prisma.adminsUncheckedUpdateWithoutOrder_interventionsInput>;
};
export type adminsUpdateWithoutOrder_interventionsInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUpdateManyWithoutAdminsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutAdminsNestedInput;
};
export type adminsUncheckedUpdateWithoutOrder_interventionsInput = {
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutAdminsNestedInput;
};
export type adminsCreateWithoutSupport_ticketsInput = {
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsCreateNestedManyWithoutAdminsInput;
    users: Prisma.usersCreateNestedOneWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsCreateNestedManyWithoutAdminsInput;
};
export type adminsUncheckedCreateWithoutSupport_ticketsInput = {
    admin_id: number;
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedCreateNestedManyWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsUncheckedCreateNestedManyWithoutAdminsInput;
};
export type adminsCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.adminsWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminsCreateWithoutSupport_ticketsInput, Prisma.adminsUncheckedCreateWithoutSupport_ticketsInput>;
};
export type adminsUpsertWithoutSupport_ticketsInput = {
    update: Prisma.XOR<Prisma.adminsUpdateWithoutSupport_ticketsInput, Prisma.adminsUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.adminsCreateWithoutSupport_ticketsInput, Prisma.adminsUncheckedCreateWithoutSupport_ticketsInput>;
    where?: Prisma.adminsWhereInput;
};
export type adminsUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: Prisma.adminsWhereInput;
    data: Prisma.XOR<Prisma.adminsUpdateWithoutSupport_ticketsInput, Prisma.adminsUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type adminsUpdateWithoutSupport_ticketsInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUpdateManyWithoutAdminsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUpdateManyWithoutAdminsNestedInput;
};
export type adminsUncheckedUpdateWithoutSupport_ticketsInput = {
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedUpdateManyWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUncheckedUpdateManyWithoutAdminsNestedInput;
};
export type adminsCreateWithoutUsersInput = {
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsCreateNestedManyWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutAdminsInput;
};
export type adminsUncheckedCreateWithoutUsersInput = {
    department?: string | null;
    access_level?: string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedCreateNestedManyWithoutAdminsInput;
    order_interventions?: Prisma.order_interventionsUncheckedCreateNestedManyWithoutAdminsInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutAdminsInput;
};
export type adminsCreateOrConnectWithoutUsersInput = {
    where: Prisma.adminsWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminsCreateWithoutUsersInput, Prisma.adminsUncheckedCreateWithoutUsersInput>;
};
export type adminsUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.adminsUpdateWithoutUsersInput, Prisma.adminsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.adminsCreateWithoutUsersInput, Prisma.adminsUncheckedCreateWithoutUsersInput>;
    where?: Prisma.adminsWhereInput;
};
export type adminsUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.adminsWhereInput;
    data: Prisma.XOR<Prisma.adminsUpdateWithoutUsersInput, Prisma.adminsUncheckedUpdateWithoutUsersInput>;
};
export type adminsUpdateWithoutUsersInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUpdateManyWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutAdminsNestedInput;
};
export type adminsUncheckedUpdateWithoutUsersInput = {
    department?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    access_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin_audit_logs?: Prisma.admin_audit_logsUncheckedUpdateManyWithoutAdminsNestedInput;
    order_interventions?: Prisma.order_interventionsUncheckedUpdateManyWithoutAdminsNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutAdminsNestedInput;
};
export type AdminsCountOutputType = {
    admin_audit_logs: number;
    order_interventions: number;
    support_tickets: number;
};
export type AdminsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin_audit_logs?: boolean | AdminsCountOutputTypeCountAdmin_audit_logsArgs;
    order_interventions?: boolean | AdminsCountOutputTypeCountOrder_interventionsArgs;
    support_tickets?: boolean | AdminsCountOutputTypeCountSupport_ticketsArgs;
};
export type AdminsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminsCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminsCountOutputTypeCountAdmin_audit_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_audit_logsWhereInput;
};
export type AdminsCountOutputTypeCountOrder_interventionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_interventionsWhereInput;
};
export type AdminsCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
};
export type adminsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    admin_id?: boolean;
    department?: boolean;
    access_level?: boolean;
    admin_audit_logs?: boolean | Prisma.admins$admin_audit_logsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    order_interventions?: boolean | Prisma.admins$order_interventionsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.admins$support_ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admins"]>;
export type adminsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    admin_id?: boolean;
    department?: boolean;
    access_level?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admins"]>;
export type adminsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    admin_id?: boolean;
    department?: boolean;
    access_level?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admins"]>;
export type adminsSelectScalar = {
    admin_id?: boolean;
    department?: boolean;
    access_level?: boolean;
};
export type adminsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"admin_id" | "department" | "access_level", ExtArgs["result"]["admins"]>;
export type adminsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin_audit_logs?: boolean | Prisma.admins$admin_audit_logsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    order_interventions?: boolean | Prisma.admins$order_interventionsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.admins$support_ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type adminsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type adminsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $adminsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "admins";
    objects: {
        admin_audit_logs: Prisma.$admin_audit_logsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        order_interventions: Prisma.$order_interventionsPayload<ExtArgs>[];
        support_tickets: Prisma.$support_ticketsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        admin_id: number;
        department: string | null;
        access_level: string | null;
    }, ExtArgs["result"]["admins"]>;
    composites: {};
};
export type adminsGetPayload<S extends boolean | null | undefined | adminsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$adminsPayload, S>;
export type adminsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<adminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminsCountAggregateInputType | true;
};
export interface adminsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['admins'];
        meta: {
            name: 'admins';
        };
    };
    findUnique<T extends adminsFindUniqueArgs>(args: Prisma.SelectSubset<T, adminsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends adminsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, adminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends adminsFindFirstArgs>(args?: Prisma.SelectSubset<T, adminsFindFirstArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends adminsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, adminsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends adminsFindManyArgs>(args?: Prisma.SelectSubset<T, adminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends adminsCreateArgs>(args: Prisma.SelectSubset<T, adminsCreateArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends adminsCreateManyArgs>(args?: Prisma.SelectSubset<T, adminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends adminsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, adminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends adminsDeleteArgs>(args: Prisma.SelectSubset<T, adminsDeleteArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends adminsUpdateArgs>(args: Prisma.SelectSubset<T, adminsUpdateArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends adminsDeleteManyArgs>(args?: Prisma.SelectSubset<T, adminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends adminsUpdateManyArgs>(args: Prisma.SelectSubset<T, adminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends adminsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, adminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends adminsUpsertArgs>(args: Prisma.SelectSubset<T, adminsUpsertArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends adminsCountArgs>(args?: Prisma.Subset<T, adminsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminsCountAggregateOutputType> : number>;
    aggregate<T extends AdminsAggregateArgs>(args: Prisma.Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>;
    groupBy<T extends adminsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: adminsGroupByArgs['orderBy'];
    } : {
        orderBy?: adminsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, adminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: adminsFieldRefs;
}
export interface Prisma__adminsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin_audit_logs<T extends Prisma.admins$admin_audit_logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.admins$admin_audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order_interventions<T extends Prisma.admins$order_interventionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.admins$order_interventionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_interventionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    support_tickets<T extends Prisma.admins$support_ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.admins$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface adminsFieldRefs {
    readonly admin_id: Prisma.FieldRef<"admins", 'Int'>;
    readonly department: Prisma.FieldRef<"admins", 'String'>;
    readonly access_level: Prisma.FieldRef<"admins", 'String'>;
}
export type adminsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where: Prisma.adminsWhereUniqueInput;
};
export type adminsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where: Prisma.adminsWhereUniqueInput;
};
export type adminsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where?: Prisma.adminsWhereInput;
    orderBy?: Prisma.adminsOrderByWithRelationInput | Prisma.adminsOrderByWithRelationInput[];
    cursor?: Prisma.adminsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminsScalarFieldEnum | Prisma.AdminsScalarFieldEnum[];
};
export type adminsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where?: Prisma.adminsWhereInput;
    orderBy?: Prisma.adminsOrderByWithRelationInput | Prisma.adminsOrderByWithRelationInput[];
    cursor?: Prisma.adminsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminsScalarFieldEnum | Prisma.AdminsScalarFieldEnum[];
};
export type adminsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where?: Prisma.adminsWhereInput;
    orderBy?: Prisma.adminsOrderByWithRelationInput | Prisma.adminsOrderByWithRelationInput[];
    cursor?: Prisma.adminsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminsScalarFieldEnum | Prisma.AdminsScalarFieldEnum[];
};
export type adminsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adminsCreateInput, Prisma.adminsUncheckedCreateInput>;
};
export type adminsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.adminsCreateManyInput | Prisma.adminsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type adminsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    data: Prisma.adminsCreateManyInput | Prisma.adminsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.adminsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type adminsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adminsUpdateInput, Prisma.adminsUncheckedUpdateInput>;
    where: Prisma.adminsWhereUniqueInput;
};
export type adminsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.adminsUpdateManyMutationInput, Prisma.adminsUncheckedUpdateManyInput>;
    where?: Prisma.adminsWhereInput;
    limit?: number;
};
export type adminsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adminsUpdateManyMutationInput, Prisma.adminsUncheckedUpdateManyInput>;
    where?: Prisma.adminsWhereInput;
    limit?: number;
    include?: Prisma.adminsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type adminsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where: Prisma.adminsWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminsCreateInput, Prisma.adminsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.adminsUpdateInput, Prisma.adminsUncheckedUpdateInput>;
};
export type adminsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where: Prisma.adminsWhereUniqueInput;
};
export type adminsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adminsWhereInput;
    limit?: number;
};
export type admins$admin_audit_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    where?: Prisma.admin_audit_logsWhereInput;
    orderBy?: Prisma.admin_audit_logsOrderByWithRelationInput | Prisma.admin_audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.admin_audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Admin_audit_logsScalarFieldEnum | Prisma.Admin_audit_logsScalarFieldEnum[];
};
export type admins$order_interventionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type admins$support_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type adminsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
};
