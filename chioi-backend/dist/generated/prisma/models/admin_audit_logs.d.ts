import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type admin_audit_logsModel = runtime.Types.Result.DefaultSelection<Prisma.$admin_audit_logsPayload>;
export type AggregateAdmin_audit_logs = {
    _count: Admin_audit_logsCountAggregateOutputType | null;
    _avg: Admin_audit_logsAvgAggregateOutputType | null;
    _sum: Admin_audit_logsSumAggregateOutputType | null;
    _min: Admin_audit_logsMinAggregateOutputType | null;
    _max: Admin_audit_logsMaxAggregateOutputType | null;
};
export type Admin_audit_logsAvgAggregateOutputType = {
    log_id: number | null;
    admin_id: number | null;
    target_id: number | null;
};
export type Admin_audit_logsSumAggregateOutputType = {
    log_id: number | null;
    admin_id: number | null;
    target_id: number | null;
};
export type Admin_audit_logsMinAggregateOutputType = {
    log_id: number | null;
    admin_id: number | null;
    action: string | null;
    target_table: string | null;
    target_id: number | null;
    ip_address: string | null;
    created_at: Date | null;
};
export type Admin_audit_logsMaxAggregateOutputType = {
    log_id: number | null;
    admin_id: number | null;
    action: string | null;
    target_table: string | null;
    target_id: number | null;
    ip_address: string | null;
    created_at: Date | null;
};
export type Admin_audit_logsCountAggregateOutputType = {
    log_id: number;
    admin_id: number;
    action: number;
    target_table: number;
    target_id: number;
    old_data: number;
    new_data: number;
    ip_address: number;
    created_at: number;
    _all: number;
};
export type Admin_audit_logsAvgAggregateInputType = {
    log_id?: true;
    admin_id?: true;
    target_id?: true;
};
export type Admin_audit_logsSumAggregateInputType = {
    log_id?: true;
    admin_id?: true;
    target_id?: true;
};
export type Admin_audit_logsMinAggregateInputType = {
    log_id?: true;
    admin_id?: true;
    action?: true;
    target_table?: true;
    target_id?: true;
    ip_address?: true;
    created_at?: true;
};
export type Admin_audit_logsMaxAggregateInputType = {
    log_id?: true;
    admin_id?: true;
    action?: true;
    target_table?: true;
    target_id?: true;
    ip_address?: true;
    created_at?: true;
};
export type Admin_audit_logsCountAggregateInputType = {
    log_id?: true;
    admin_id?: true;
    action?: true;
    target_table?: true;
    target_id?: true;
    old_data?: true;
    new_data?: true;
    ip_address?: true;
    created_at?: true;
    _all?: true;
};
export type Admin_audit_logsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_audit_logsWhereInput;
    orderBy?: Prisma.admin_audit_logsOrderByWithRelationInput | Prisma.admin_audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.admin_audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Admin_audit_logsCountAggregateInputType;
    _avg?: Admin_audit_logsAvgAggregateInputType;
    _sum?: Admin_audit_logsSumAggregateInputType;
    _min?: Admin_audit_logsMinAggregateInputType;
    _max?: Admin_audit_logsMaxAggregateInputType;
};
export type GetAdmin_audit_logsAggregateType<T extends Admin_audit_logsAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin_audit_logs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmin_audit_logs[P]> : Prisma.GetScalarType<T[P], AggregateAdmin_audit_logs[P]>;
};
export type admin_audit_logsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_audit_logsWhereInput;
    orderBy?: Prisma.admin_audit_logsOrderByWithAggregationInput | Prisma.admin_audit_logsOrderByWithAggregationInput[];
    by: Prisma.Admin_audit_logsScalarFieldEnum[] | Prisma.Admin_audit_logsScalarFieldEnum;
    having?: Prisma.admin_audit_logsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Admin_audit_logsCountAggregateInputType | true;
    _avg?: Admin_audit_logsAvgAggregateInputType;
    _sum?: Admin_audit_logsSumAggregateInputType;
    _min?: Admin_audit_logsMinAggregateInputType;
    _max?: Admin_audit_logsMaxAggregateInputType;
};
export type Admin_audit_logsGroupByOutputType = {
    log_id: number;
    admin_id: number;
    action: string;
    target_table: string | null;
    target_id: number | null;
    old_data: runtime.JsonValue | null;
    new_data: runtime.JsonValue | null;
    ip_address: string | null;
    created_at: Date | null;
    _count: Admin_audit_logsCountAggregateOutputType | null;
    _avg: Admin_audit_logsAvgAggregateOutputType | null;
    _sum: Admin_audit_logsSumAggregateOutputType | null;
    _min: Admin_audit_logsMinAggregateOutputType | null;
    _max: Admin_audit_logsMaxAggregateOutputType | null;
};
export type GetAdmin_audit_logsGroupByPayload<T extends admin_audit_logsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Admin_audit_logsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Admin_audit_logsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Admin_audit_logsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Admin_audit_logsGroupByOutputType[P]>;
}>>;
export type admin_audit_logsWhereInput = {
    AND?: Prisma.admin_audit_logsWhereInput | Prisma.admin_audit_logsWhereInput[];
    OR?: Prisma.admin_audit_logsWhereInput[];
    NOT?: Prisma.admin_audit_logsWhereInput | Prisma.admin_audit_logsWhereInput[];
    log_id?: Prisma.IntFilter<"admin_audit_logs"> | number;
    admin_id?: Prisma.IntFilter<"admin_audit_logs"> | number;
    action?: Prisma.StringFilter<"admin_audit_logs"> | string;
    target_table?: Prisma.StringNullableFilter<"admin_audit_logs"> | string | null;
    target_id?: Prisma.IntNullableFilter<"admin_audit_logs"> | number | null;
    old_data?: Prisma.JsonNullableFilter<"admin_audit_logs">;
    new_data?: Prisma.JsonNullableFilter<"admin_audit_logs">;
    ip_address?: Prisma.StringNullableFilter<"admin_audit_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"admin_audit_logs"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsScalarRelationFilter, Prisma.adminsWhereInput>;
};
export type admin_audit_logsOrderByWithRelationInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_table?: Prisma.SortOrderInput | Prisma.SortOrder;
    target_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    old_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    admins?: Prisma.adminsOrderByWithRelationInput;
};
export type admin_audit_logsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number;
    AND?: Prisma.admin_audit_logsWhereInput | Prisma.admin_audit_logsWhereInput[];
    OR?: Prisma.admin_audit_logsWhereInput[];
    NOT?: Prisma.admin_audit_logsWhereInput | Prisma.admin_audit_logsWhereInput[];
    admin_id?: Prisma.IntFilter<"admin_audit_logs"> | number;
    action?: Prisma.StringFilter<"admin_audit_logs"> | string;
    target_table?: Prisma.StringNullableFilter<"admin_audit_logs"> | string | null;
    target_id?: Prisma.IntNullableFilter<"admin_audit_logs"> | number | null;
    old_data?: Prisma.JsonNullableFilter<"admin_audit_logs">;
    new_data?: Prisma.JsonNullableFilter<"admin_audit_logs">;
    ip_address?: Prisma.StringNullableFilter<"admin_audit_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"admin_audit_logs"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsScalarRelationFilter, Prisma.adminsWhereInput>;
}, "log_id">;
export type admin_audit_logsOrderByWithAggregationInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_table?: Prisma.SortOrderInput | Prisma.SortOrder;
    target_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    old_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.admin_audit_logsCountOrderByAggregateInput;
    _avg?: Prisma.admin_audit_logsAvgOrderByAggregateInput;
    _max?: Prisma.admin_audit_logsMaxOrderByAggregateInput;
    _min?: Prisma.admin_audit_logsMinOrderByAggregateInput;
    _sum?: Prisma.admin_audit_logsSumOrderByAggregateInput;
};
export type admin_audit_logsScalarWhereWithAggregatesInput = {
    AND?: Prisma.admin_audit_logsScalarWhereWithAggregatesInput | Prisma.admin_audit_logsScalarWhereWithAggregatesInput[];
    OR?: Prisma.admin_audit_logsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.admin_audit_logsScalarWhereWithAggregatesInput | Prisma.admin_audit_logsScalarWhereWithAggregatesInput[];
    log_id?: Prisma.IntWithAggregatesFilter<"admin_audit_logs"> | number;
    admin_id?: Prisma.IntWithAggregatesFilter<"admin_audit_logs"> | number;
    action?: Prisma.StringWithAggregatesFilter<"admin_audit_logs"> | string;
    target_table?: Prisma.StringNullableWithAggregatesFilter<"admin_audit_logs"> | string | null;
    target_id?: Prisma.IntNullableWithAggregatesFilter<"admin_audit_logs"> | number | null;
    old_data?: Prisma.JsonNullableWithAggregatesFilter<"admin_audit_logs">;
    new_data?: Prisma.JsonNullableWithAggregatesFilter<"admin_audit_logs">;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"admin_audit_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"admin_audit_logs"> | Date | string | null;
};
export type admin_audit_logsCreateInput = {
    action: string;
    target_table?: string | null;
    target_id?: number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: string | null;
    created_at?: Date | string | null;
    admins: Prisma.adminsCreateNestedOneWithoutAdmin_audit_logsInput;
};
export type admin_audit_logsUncheckedCreateInput = {
    log_id?: number;
    admin_id: number;
    action: string;
    target_table?: string | null;
    target_id?: number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: string | null;
    created_at?: Date | string | null;
};
export type admin_audit_logsUpdateInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneRequiredWithoutAdmin_audit_logsNestedInput;
};
export type admin_audit_logsUncheckedUpdateInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type admin_audit_logsCreateManyInput = {
    log_id?: number;
    admin_id: number;
    action: string;
    target_table?: string | null;
    target_id?: number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: string | null;
    created_at?: Date | string | null;
};
export type admin_audit_logsUpdateManyMutationInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type admin_audit_logsUncheckedUpdateManyInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    admin_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type admin_audit_logsCountOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_table?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    old_data?: Prisma.SortOrder;
    new_data?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type admin_audit_logsAvgOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
};
export type admin_audit_logsMaxOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_table?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type admin_audit_logsMinOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_table?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type admin_audit_logsSumOrderByAggregateInput = {
    log_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
};
export type Admin_audit_logsListRelationFilter = {
    every?: Prisma.admin_audit_logsWhereInput;
    some?: Prisma.admin_audit_logsWhereInput;
    none?: Prisma.admin_audit_logsWhereInput;
};
export type admin_audit_logsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type admin_audit_logsCreateNestedManyWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.admin_audit_logsCreateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput> | Prisma.admin_audit_logsCreateWithoutAdminsInput[] | Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput | Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput[];
    createMany?: Prisma.admin_audit_logsCreateManyAdminsInputEnvelope;
    connect?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
};
export type admin_audit_logsUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.admin_audit_logsCreateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput> | Prisma.admin_audit_logsCreateWithoutAdminsInput[] | Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput | Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput[];
    createMany?: Prisma.admin_audit_logsCreateManyAdminsInputEnvelope;
    connect?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
};
export type admin_audit_logsUpdateManyWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.admin_audit_logsCreateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput> | Prisma.admin_audit_logsCreateWithoutAdminsInput[] | Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput | Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput[];
    upsert?: Prisma.admin_audit_logsUpsertWithWhereUniqueWithoutAdminsInput | Prisma.admin_audit_logsUpsertWithWhereUniqueWithoutAdminsInput[];
    createMany?: Prisma.admin_audit_logsCreateManyAdminsInputEnvelope;
    set?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    disconnect?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    delete?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    connect?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    update?: Prisma.admin_audit_logsUpdateWithWhereUniqueWithoutAdminsInput | Prisma.admin_audit_logsUpdateWithWhereUniqueWithoutAdminsInput[];
    updateMany?: Prisma.admin_audit_logsUpdateManyWithWhereWithoutAdminsInput | Prisma.admin_audit_logsUpdateManyWithWhereWithoutAdminsInput[];
    deleteMany?: Prisma.admin_audit_logsScalarWhereInput | Prisma.admin_audit_logsScalarWhereInput[];
};
export type admin_audit_logsUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.admin_audit_logsCreateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput> | Prisma.admin_audit_logsCreateWithoutAdminsInput[] | Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput[];
    connectOrCreate?: Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput | Prisma.admin_audit_logsCreateOrConnectWithoutAdminsInput[];
    upsert?: Prisma.admin_audit_logsUpsertWithWhereUniqueWithoutAdminsInput | Prisma.admin_audit_logsUpsertWithWhereUniqueWithoutAdminsInput[];
    createMany?: Prisma.admin_audit_logsCreateManyAdminsInputEnvelope;
    set?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    disconnect?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    delete?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    connect?: Prisma.admin_audit_logsWhereUniqueInput | Prisma.admin_audit_logsWhereUniqueInput[];
    update?: Prisma.admin_audit_logsUpdateWithWhereUniqueWithoutAdminsInput | Prisma.admin_audit_logsUpdateWithWhereUniqueWithoutAdminsInput[];
    updateMany?: Prisma.admin_audit_logsUpdateManyWithWhereWithoutAdminsInput | Prisma.admin_audit_logsUpdateManyWithWhereWithoutAdminsInput[];
    deleteMany?: Prisma.admin_audit_logsScalarWhereInput | Prisma.admin_audit_logsScalarWhereInput[];
};
export type admin_audit_logsCreateWithoutAdminsInput = {
    action: string;
    target_table?: string | null;
    target_id?: number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: string | null;
    created_at?: Date | string | null;
};
export type admin_audit_logsUncheckedCreateWithoutAdminsInput = {
    log_id?: number;
    action: string;
    target_table?: string | null;
    target_id?: number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: string | null;
    created_at?: Date | string | null;
};
export type admin_audit_logsCreateOrConnectWithoutAdminsInput = {
    where: Prisma.admin_audit_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.admin_audit_logsCreateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput>;
};
export type admin_audit_logsCreateManyAdminsInputEnvelope = {
    data: Prisma.admin_audit_logsCreateManyAdminsInput | Prisma.admin_audit_logsCreateManyAdminsInput[];
    skipDuplicates?: boolean;
};
export type admin_audit_logsUpsertWithWhereUniqueWithoutAdminsInput = {
    where: Prisma.admin_audit_logsWhereUniqueInput;
    update: Prisma.XOR<Prisma.admin_audit_logsUpdateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedUpdateWithoutAdminsInput>;
    create: Prisma.XOR<Prisma.admin_audit_logsCreateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedCreateWithoutAdminsInput>;
};
export type admin_audit_logsUpdateWithWhereUniqueWithoutAdminsInput = {
    where: Prisma.admin_audit_logsWhereUniqueInput;
    data: Prisma.XOR<Prisma.admin_audit_logsUpdateWithoutAdminsInput, Prisma.admin_audit_logsUncheckedUpdateWithoutAdminsInput>;
};
export type admin_audit_logsUpdateManyWithWhereWithoutAdminsInput = {
    where: Prisma.admin_audit_logsScalarWhereInput;
    data: Prisma.XOR<Prisma.admin_audit_logsUpdateManyMutationInput, Prisma.admin_audit_logsUncheckedUpdateManyWithoutAdminsInput>;
};
export type admin_audit_logsScalarWhereInput = {
    AND?: Prisma.admin_audit_logsScalarWhereInput | Prisma.admin_audit_logsScalarWhereInput[];
    OR?: Prisma.admin_audit_logsScalarWhereInput[];
    NOT?: Prisma.admin_audit_logsScalarWhereInput | Prisma.admin_audit_logsScalarWhereInput[];
    log_id?: Prisma.IntFilter<"admin_audit_logs"> | number;
    admin_id?: Prisma.IntFilter<"admin_audit_logs"> | number;
    action?: Prisma.StringFilter<"admin_audit_logs"> | string;
    target_table?: Prisma.StringNullableFilter<"admin_audit_logs"> | string | null;
    target_id?: Prisma.IntNullableFilter<"admin_audit_logs"> | number | null;
    old_data?: Prisma.JsonNullableFilter<"admin_audit_logs">;
    new_data?: Prisma.JsonNullableFilter<"admin_audit_logs">;
    ip_address?: Prisma.StringNullableFilter<"admin_audit_logs"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"admin_audit_logs"> | Date | string | null;
};
export type admin_audit_logsCreateManyAdminsInput = {
    log_id?: number;
    action: string;
    target_table?: string | null;
    target_id?: number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: string | null;
    created_at?: Date | string | null;
};
export type admin_audit_logsUpdateWithoutAdminsInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type admin_audit_logsUncheckedUpdateWithoutAdminsInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type admin_audit_logsUncheckedUpdateManyWithoutAdminsInput = {
    log_id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_table?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    target_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type admin_audit_logsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    log_id?: boolean;
    admin_id?: boolean;
    action?: boolean;
    target_table?: boolean;
    target_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    ip_address?: boolean;
    created_at?: boolean;
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin_audit_logs"]>;
export type admin_audit_logsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    log_id?: boolean;
    admin_id?: boolean;
    action?: boolean;
    target_table?: boolean;
    target_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    ip_address?: boolean;
    created_at?: boolean;
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin_audit_logs"]>;
export type admin_audit_logsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    log_id?: boolean;
    admin_id?: boolean;
    action?: boolean;
    target_table?: boolean;
    target_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    ip_address?: boolean;
    created_at?: boolean;
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin_audit_logs"]>;
export type admin_audit_logsSelectScalar = {
    log_id?: boolean;
    admin_id?: boolean;
    action?: boolean;
    target_table?: boolean;
    target_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    ip_address?: boolean;
    created_at?: boolean;
};
export type admin_audit_logsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"log_id" | "admin_id" | "action" | "target_table" | "target_id" | "old_data" | "new_data" | "ip_address" | "created_at", ExtArgs["result"]["admin_audit_logs"]>;
export type admin_audit_logsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
};
export type admin_audit_logsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
};
export type admin_audit_logsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.adminsDefaultArgs<ExtArgs>;
};
export type $admin_audit_logsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "admin_audit_logs";
    objects: {
        admins: Prisma.$adminsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        log_id: number;
        admin_id: number;
        action: string;
        target_table: string | null;
        target_id: number | null;
        old_data: runtime.JsonValue | null;
        new_data: runtime.JsonValue | null;
        ip_address: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["admin_audit_logs"]>;
    composites: {};
};
export type admin_audit_logsGetPayload<S extends boolean | null | undefined | admin_audit_logsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload, S>;
export type admin_audit_logsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<admin_audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Admin_audit_logsCountAggregateInputType | true;
};
export interface admin_audit_logsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['admin_audit_logs'];
        meta: {
            name: 'admin_audit_logs';
        };
    };
    findUnique<T extends admin_audit_logsFindUniqueArgs>(args: Prisma.SelectSubset<T, admin_audit_logsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends admin_audit_logsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, admin_audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends admin_audit_logsFindFirstArgs>(args?: Prisma.SelectSubset<T, admin_audit_logsFindFirstArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends admin_audit_logsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, admin_audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends admin_audit_logsFindManyArgs>(args?: Prisma.SelectSubset<T, admin_audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends admin_audit_logsCreateArgs>(args: Prisma.SelectSubset<T, admin_audit_logsCreateArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends admin_audit_logsCreateManyArgs>(args?: Prisma.SelectSubset<T, admin_audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends admin_audit_logsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, admin_audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends admin_audit_logsDeleteArgs>(args: Prisma.SelectSubset<T, admin_audit_logsDeleteArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends admin_audit_logsUpdateArgs>(args: Prisma.SelectSubset<T, admin_audit_logsUpdateArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends admin_audit_logsDeleteManyArgs>(args?: Prisma.SelectSubset<T, admin_audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends admin_audit_logsUpdateManyArgs>(args: Prisma.SelectSubset<T, admin_audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends admin_audit_logsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, admin_audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends admin_audit_logsUpsertArgs>(args: Prisma.SelectSubset<T, admin_audit_logsUpsertArgs<ExtArgs>>): Prisma.Prisma__admin_audit_logsClient<runtime.Types.Result.GetResult<Prisma.$admin_audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends admin_audit_logsCountArgs>(args?: Prisma.Subset<T, admin_audit_logsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Admin_audit_logsCountAggregateOutputType> : number>;
    aggregate<T extends Admin_audit_logsAggregateArgs>(args: Prisma.Subset<T, Admin_audit_logsAggregateArgs>): Prisma.PrismaPromise<GetAdmin_audit_logsAggregateType<T>>;
    groupBy<T extends admin_audit_logsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: admin_audit_logsGroupByArgs['orderBy'];
    } : {
        orderBy?: admin_audit_logsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, admin_audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_audit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: admin_audit_logsFieldRefs;
}
export interface Prisma__admin_audit_logsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admins<T extends Prisma.adminsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.adminsDefaultArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface admin_audit_logsFieldRefs {
    readonly log_id: Prisma.FieldRef<"admin_audit_logs", 'Int'>;
    readonly admin_id: Prisma.FieldRef<"admin_audit_logs", 'Int'>;
    readonly action: Prisma.FieldRef<"admin_audit_logs", 'String'>;
    readonly target_table: Prisma.FieldRef<"admin_audit_logs", 'String'>;
    readonly target_id: Prisma.FieldRef<"admin_audit_logs", 'Int'>;
    readonly old_data: Prisma.FieldRef<"admin_audit_logs", 'Json'>;
    readonly new_data: Prisma.FieldRef<"admin_audit_logs", 'Json'>;
    readonly ip_address: Prisma.FieldRef<"admin_audit_logs", 'String'>;
    readonly created_at: Prisma.FieldRef<"admin_audit_logs", 'DateTime'>;
}
export type admin_audit_logsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    where: Prisma.admin_audit_logsWhereUniqueInput;
};
export type admin_audit_logsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    where: Prisma.admin_audit_logsWhereUniqueInput;
};
export type admin_audit_logsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type admin_audit_logsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type admin_audit_logsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type admin_audit_logsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.admin_audit_logsCreateInput, Prisma.admin_audit_logsUncheckedCreateInput>;
};
export type admin_audit_logsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.admin_audit_logsCreateManyInput | Prisma.admin_audit_logsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type admin_audit_logsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    data: Prisma.admin_audit_logsCreateManyInput | Prisma.admin_audit_logsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.admin_audit_logsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type admin_audit_logsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.admin_audit_logsUpdateInput, Prisma.admin_audit_logsUncheckedUpdateInput>;
    where: Prisma.admin_audit_logsWhereUniqueInput;
};
export type admin_audit_logsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.admin_audit_logsUpdateManyMutationInput, Prisma.admin_audit_logsUncheckedUpdateManyInput>;
    where?: Prisma.admin_audit_logsWhereInput;
    limit?: number;
};
export type admin_audit_logsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.admin_audit_logsUpdateManyMutationInput, Prisma.admin_audit_logsUncheckedUpdateManyInput>;
    where?: Prisma.admin_audit_logsWhereInput;
    limit?: number;
    include?: Prisma.admin_audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type admin_audit_logsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    where: Prisma.admin_audit_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.admin_audit_logsCreateInput, Prisma.admin_audit_logsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.admin_audit_logsUpdateInput, Prisma.admin_audit_logsUncheckedUpdateInput>;
};
export type admin_audit_logsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
    where: Prisma.admin_audit_logsWhereUniqueInput;
};
export type admin_audit_logsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.admin_audit_logsWhereInput;
    limit?: number;
};
export type admin_audit_logsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.admin_audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.admin_audit_logsOmit<ExtArgs> | null;
    include?: Prisma.admin_audit_logsInclude<ExtArgs> | null;
};
