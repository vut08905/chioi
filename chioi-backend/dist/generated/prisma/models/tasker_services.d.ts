import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tasker_servicesModel = runtime.Types.Result.DefaultSelection<Prisma.$tasker_servicesPayload>;
export type AggregateTasker_services = {
    _count: Tasker_servicesCountAggregateOutputType | null;
    _avg: Tasker_servicesAvgAggregateOutputType | null;
    _sum: Tasker_servicesSumAggregateOutputType | null;
    _min: Tasker_servicesMinAggregateOutputType | null;
    _max: Tasker_servicesMaxAggregateOutputType | null;
};
export type Tasker_servicesAvgAggregateOutputType = {
    tasker_id: number | null;
    service_id: number | null;
};
export type Tasker_servicesSumAggregateOutputType = {
    tasker_id: number | null;
    service_id: number | null;
};
export type Tasker_servicesMinAggregateOutputType = {
    tasker_id: number | null;
    service_id: number | null;
    status: string | null;
};
export type Tasker_servicesMaxAggregateOutputType = {
    tasker_id: number | null;
    service_id: number | null;
    status: string | null;
};
export type Tasker_servicesCountAggregateOutputType = {
    tasker_id: number;
    service_id: number;
    status: number;
    _all: number;
};
export type Tasker_servicesAvgAggregateInputType = {
    tasker_id?: true;
    service_id?: true;
};
export type Tasker_servicesSumAggregateInputType = {
    tasker_id?: true;
    service_id?: true;
};
export type Tasker_servicesMinAggregateInputType = {
    tasker_id?: true;
    service_id?: true;
    status?: true;
};
export type Tasker_servicesMaxAggregateInputType = {
    tasker_id?: true;
    service_id?: true;
    status?: true;
};
export type Tasker_servicesCountAggregateInputType = {
    tasker_id?: true;
    service_id?: true;
    status?: true;
    _all?: true;
};
export type Tasker_servicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasker_servicesWhereInput;
    orderBy?: Prisma.tasker_servicesOrderByWithRelationInput | Prisma.tasker_servicesOrderByWithRelationInput[];
    cursor?: Prisma.tasker_servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Tasker_servicesCountAggregateInputType;
    _avg?: Tasker_servicesAvgAggregateInputType;
    _sum?: Tasker_servicesSumAggregateInputType;
    _min?: Tasker_servicesMinAggregateInputType;
    _max?: Tasker_servicesMaxAggregateInputType;
};
export type GetTasker_servicesAggregateType<T extends Tasker_servicesAggregateArgs> = {
    [P in keyof T & keyof AggregateTasker_services]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTasker_services[P]> : Prisma.GetScalarType<T[P], AggregateTasker_services[P]>;
};
export type tasker_servicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasker_servicesWhereInput;
    orderBy?: Prisma.tasker_servicesOrderByWithAggregationInput | Prisma.tasker_servicesOrderByWithAggregationInput[];
    by: Prisma.Tasker_servicesScalarFieldEnum[] | Prisma.Tasker_servicesScalarFieldEnum;
    having?: Prisma.tasker_servicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tasker_servicesCountAggregateInputType | true;
    _avg?: Tasker_servicesAvgAggregateInputType;
    _sum?: Tasker_servicesSumAggregateInputType;
    _min?: Tasker_servicesMinAggregateInputType;
    _max?: Tasker_servicesMaxAggregateInputType;
};
export type Tasker_servicesGroupByOutputType = {
    tasker_id: number;
    service_id: number;
    status: string | null;
    _count: Tasker_servicesCountAggregateOutputType | null;
    _avg: Tasker_servicesAvgAggregateOutputType | null;
    _sum: Tasker_servicesSumAggregateOutputType | null;
    _min: Tasker_servicesMinAggregateOutputType | null;
    _max: Tasker_servicesMaxAggregateOutputType | null;
};
export type GetTasker_servicesGroupByPayload<T extends tasker_servicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tasker_servicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tasker_servicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tasker_servicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tasker_servicesGroupByOutputType[P]>;
}>>;
export type tasker_servicesWhereInput = {
    AND?: Prisma.tasker_servicesWhereInput | Prisma.tasker_servicesWhereInput[];
    OR?: Prisma.tasker_servicesWhereInput[];
    NOT?: Prisma.tasker_servicesWhereInput | Prisma.tasker_servicesWhereInput[];
    tasker_id?: Prisma.IntFilter<"tasker_services"> | number;
    service_id?: Prisma.IntFilter<"tasker_services"> | number;
    status?: Prisma.StringNullableFilter<"tasker_services"> | string | null;
    services?: Prisma.XOR<Prisma.ServicesScalarRelationFilter, Prisma.servicesWhereInput>;
    taskers?: Prisma.XOR<Prisma.TaskersScalarRelationFilter, Prisma.taskersWhereInput>;
};
export type tasker_servicesOrderByWithRelationInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    services?: Prisma.servicesOrderByWithRelationInput;
    taskers?: Prisma.taskersOrderByWithRelationInput;
};
export type tasker_servicesWhereUniqueInput = Prisma.AtLeast<{
    tasker_id_service_id?: Prisma.tasker_servicesTasker_idService_idCompoundUniqueInput;
    AND?: Prisma.tasker_servicesWhereInput | Prisma.tasker_servicesWhereInput[];
    OR?: Prisma.tasker_servicesWhereInput[];
    NOT?: Prisma.tasker_servicesWhereInput | Prisma.tasker_servicesWhereInput[];
    tasker_id?: Prisma.IntFilter<"tasker_services"> | number;
    service_id?: Prisma.IntFilter<"tasker_services"> | number;
    status?: Prisma.StringNullableFilter<"tasker_services"> | string | null;
    services?: Prisma.XOR<Prisma.ServicesScalarRelationFilter, Prisma.servicesWhereInput>;
    taskers?: Prisma.XOR<Prisma.TaskersScalarRelationFilter, Prisma.taskersWhereInput>;
}, "tasker_id_service_id">;
export type tasker_servicesOrderByWithAggregationInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tasker_servicesCountOrderByAggregateInput;
    _avg?: Prisma.tasker_servicesAvgOrderByAggregateInput;
    _max?: Prisma.tasker_servicesMaxOrderByAggregateInput;
    _min?: Prisma.tasker_servicesMinOrderByAggregateInput;
    _sum?: Prisma.tasker_servicesSumOrderByAggregateInput;
};
export type tasker_servicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.tasker_servicesScalarWhereWithAggregatesInput | Prisma.tasker_servicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.tasker_servicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tasker_servicesScalarWhereWithAggregatesInput | Prisma.tasker_servicesScalarWhereWithAggregatesInput[];
    tasker_id?: Prisma.IntWithAggregatesFilter<"tasker_services"> | number;
    service_id?: Prisma.IntWithAggregatesFilter<"tasker_services"> | number;
    status?: Prisma.StringNullableWithAggregatesFilter<"tasker_services"> | string | null;
};
export type tasker_servicesCreateInput = {
    status?: string | null;
    services: Prisma.servicesCreateNestedOneWithoutTasker_servicesInput;
    taskers: Prisma.taskersCreateNestedOneWithoutTasker_servicesInput;
};
export type tasker_servicesUncheckedCreateInput = {
    tasker_id: number;
    service_id: number;
    status?: string | null;
};
export type tasker_servicesUpdateInput = {
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    services?: Prisma.servicesUpdateOneRequiredWithoutTasker_servicesNestedInput;
    taskers?: Prisma.taskersUpdateOneRequiredWithoutTasker_servicesNestedInput;
};
export type tasker_servicesUncheckedUpdateInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tasker_servicesCreateManyInput = {
    tasker_id: number;
    service_id: number;
    status?: string | null;
};
export type tasker_servicesUpdateManyMutationInput = {
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tasker_servicesUncheckedUpdateManyInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Tasker_servicesListRelationFilter = {
    every?: Prisma.tasker_servicesWhereInput;
    some?: Prisma.tasker_servicesWhereInput;
    none?: Prisma.tasker_servicesWhereInput;
};
export type tasker_servicesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tasker_servicesTasker_idService_idCompoundUniqueInput = {
    tasker_id: number;
    service_id: number;
};
export type tasker_servicesCountOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tasker_servicesAvgOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
};
export type tasker_servicesMaxOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tasker_servicesMinOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type tasker_servicesSumOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    service_id?: Prisma.SortOrder;
};
export type tasker_servicesCreateNestedManyWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutServicesInput, Prisma.tasker_servicesUncheckedCreateWithoutServicesInput> | Prisma.tasker_servicesCreateWithoutServicesInput[] | Prisma.tasker_servicesUncheckedCreateWithoutServicesInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutServicesInput | Prisma.tasker_servicesCreateOrConnectWithoutServicesInput[];
    createMany?: Prisma.tasker_servicesCreateManyServicesInputEnvelope;
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
};
export type tasker_servicesUncheckedCreateNestedManyWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutServicesInput, Prisma.tasker_servicesUncheckedCreateWithoutServicesInput> | Prisma.tasker_servicesCreateWithoutServicesInput[] | Prisma.tasker_servicesUncheckedCreateWithoutServicesInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutServicesInput | Prisma.tasker_servicesCreateOrConnectWithoutServicesInput[];
    createMany?: Prisma.tasker_servicesCreateManyServicesInputEnvelope;
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
};
export type tasker_servicesUpdateManyWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutServicesInput, Prisma.tasker_servicesUncheckedCreateWithoutServicesInput> | Prisma.tasker_servicesCreateWithoutServicesInput[] | Prisma.tasker_servicesUncheckedCreateWithoutServicesInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutServicesInput | Prisma.tasker_servicesCreateOrConnectWithoutServicesInput[];
    upsert?: Prisma.tasker_servicesUpsertWithWhereUniqueWithoutServicesInput | Prisma.tasker_servicesUpsertWithWhereUniqueWithoutServicesInput[];
    createMany?: Prisma.tasker_servicesCreateManyServicesInputEnvelope;
    set?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    disconnect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    delete?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    update?: Prisma.tasker_servicesUpdateWithWhereUniqueWithoutServicesInput | Prisma.tasker_servicesUpdateWithWhereUniqueWithoutServicesInput[];
    updateMany?: Prisma.tasker_servicesUpdateManyWithWhereWithoutServicesInput | Prisma.tasker_servicesUpdateManyWithWhereWithoutServicesInput[];
    deleteMany?: Prisma.tasker_servicesScalarWhereInput | Prisma.tasker_servicesScalarWhereInput[];
};
export type tasker_servicesUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutServicesInput, Prisma.tasker_servicesUncheckedCreateWithoutServicesInput> | Prisma.tasker_servicesCreateWithoutServicesInput[] | Prisma.tasker_servicesUncheckedCreateWithoutServicesInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutServicesInput | Prisma.tasker_servicesCreateOrConnectWithoutServicesInput[];
    upsert?: Prisma.tasker_servicesUpsertWithWhereUniqueWithoutServicesInput | Prisma.tasker_servicesUpsertWithWhereUniqueWithoutServicesInput[];
    createMany?: Prisma.tasker_servicesCreateManyServicesInputEnvelope;
    set?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    disconnect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    delete?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    update?: Prisma.tasker_servicesUpdateWithWhereUniqueWithoutServicesInput | Prisma.tasker_servicesUpdateWithWhereUniqueWithoutServicesInput[];
    updateMany?: Prisma.tasker_servicesUpdateManyWithWhereWithoutServicesInput | Prisma.tasker_servicesUpdateManyWithWhereWithoutServicesInput[];
    deleteMany?: Prisma.tasker_servicesScalarWhereInput | Prisma.tasker_servicesScalarWhereInput[];
};
export type tasker_servicesCreateNestedManyWithoutTaskersInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutTaskersInput, Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput> | Prisma.tasker_servicesCreateWithoutTaskersInput[] | Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput | Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput[];
    createMany?: Prisma.tasker_servicesCreateManyTaskersInputEnvelope;
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
};
export type tasker_servicesUncheckedCreateNestedManyWithoutTaskersInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutTaskersInput, Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput> | Prisma.tasker_servicesCreateWithoutTaskersInput[] | Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput | Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput[];
    createMany?: Prisma.tasker_servicesCreateManyTaskersInputEnvelope;
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
};
export type tasker_servicesUpdateManyWithoutTaskersNestedInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutTaskersInput, Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput> | Prisma.tasker_servicesCreateWithoutTaskersInput[] | Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput | Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput[];
    upsert?: Prisma.tasker_servicesUpsertWithWhereUniqueWithoutTaskersInput | Prisma.tasker_servicesUpsertWithWhereUniqueWithoutTaskersInput[];
    createMany?: Prisma.tasker_servicesCreateManyTaskersInputEnvelope;
    set?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    disconnect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    delete?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    update?: Prisma.tasker_servicesUpdateWithWhereUniqueWithoutTaskersInput | Prisma.tasker_servicesUpdateWithWhereUniqueWithoutTaskersInput[];
    updateMany?: Prisma.tasker_servicesUpdateManyWithWhereWithoutTaskersInput | Prisma.tasker_servicesUpdateManyWithWhereWithoutTaskersInput[];
    deleteMany?: Prisma.tasker_servicesScalarWhereInput | Prisma.tasker_servicesScalarWhereInput[];
};
export type tasker_servicesUncheckedUpdateManyWithoutTaskersNestedInput = {
    create?: Prisma.XOR<Prisma.tasker_servicesCreateWithoutTaskersInput, Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput> | Prisma.tasker_servicesCreateWithoutTaskersInput[] | Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput[];
    connectOrCreate?: Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput | Prisma.tasker_servicesCreateOrConnectWithoutTaskersInput[];
    upsert?: Prisma.tasker_servicesUpsertWithWhereUniqueWithoutTaskersInput | Prisma.tasker_servicesUpsertWithWhereUniqueWithoutTaskersInput[];
    createMany?: Prisma.tasker_servicesCreateManyTaskersInputEnvelope;
    set?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    disconnect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    delete?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    connect?: Prisma.tasker_servicesWhereUniqueInput | Prisma.tasker_servicesWhereUniqueInput[];
    update?: Prisma.tasker_servicesUpdateWithWhereUniqueWithoutTaskersInput | Prisma.tasker_servicesUpdateWithWhereUniqueWithoutTaskersInput[];
    updateMany?: Prisma.tasker_servicesUpdateManyWithWhereWithoutTaskersInput | Prisma.tasker_servicesUpdateManyWithWhereWithoutTaskersInput[];
    deleteMany?: Prisma.tasker_servicesScalarWhereInput | Prisma.tasker_servicesScalarWhereInput[];
};
export type tasker_servicesCreateWithoutServicesInput = {
    status?: string | null;
    taskers: Prisma.taskersCreateNestedOneWithoutTasker_servicesInput;
};
export type tasker_servicesUncheckedCreateWithoutServicesInput = {
    tasker_id: number;
    status?: string | null;
};
export type tasker_servicesCreateOrConnectWithoutServicesInput = {
    where: Prisma.tasker_servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.tasker_servicesCreateWithoutServicesInput, Prisma.tasker_servicesUncheckedCreateWithoutServicesInput>;
};
export type tasker_servicesCreateManyServicesInputEnvelope = {
    data: Prisma.tasker_servicesCreateManyServicesInput | Prisma.tasker_servicesCreateManyServicesInput[];
    skipDuplicates?: boolean;
};
export type tasker_servicesUpsertWithWhereUniqueWithoutServicesInput = {
    where: Prisma.tasker_servicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.tasker_servicesUpdateWithoutServicesInput, Prisma.tasker_servicesUncheckedUpdateWithoutServicesInput>;
    create: Prisma.XOR<Prisma.tasker_servicesCreateWithoutServicesInput, Prisma.tasker_servicesUncheckedCreateWithoutServicesInput>;
};
export type tasker_servicesUpdateWithWhereUniqueWithoutServicesInput = {
    where: Prisma.tasker_servicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.tasker_servicesUpdateWithoutServicesInput, Prisma.tasker_servicesUncheckedUpdateWithoutServicesInput>;
};
export type tasker_servicesUpdateManyWithWhereWithoutServicesInput = {
    where: Prisma.tasker_servicesScalarWhereInput;
    data: Prisma.XOR<Prisma.tasker_servicesUpdateManyMutationInput, Prisma.tasker_servicesUncheckedUpdateManyWithoutServicesInput>;
};
export type tasker_servicesScalarWhereInput = {
    AND?: Prisma.tasker_servicesScalarWhereInput | Prisma.tasker_servicesScalarWhereInput[];
    OR?: Prisma.tasker_servicesScalarWhereInput[];
    NOT?: Prisma.tasker_servicesScalarWhereInput | Prisma.tasker_servicesScalarWhereInput[];
    tasker_id?: Prisma.IntFilter<"tasker_services"> | number;
    service_id?: Prisma.IntFilter<"tasker_services"> | number;
    status?: Prisma.StringNullableFilter<"tasker_services"> | string | null;
};
export type tasker_servicesCreateWithoutTaskersInput = {
    status?: string | null;
    services: Prisma.servicesCreateNestedOneWithoutTasker_servicesInput;
};
export type tasker_servicesUncheckedCreateWithoutTaskersInput = {
    service_id: number;
    status?: string | null;
};
export type tasker_servicesCreateOrConnectWithoutTaskersInput = {
    where: Prisma.tasker_servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.tasker_servicesCreateWithoutTaskersInput, Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput>;
};
export type tasker_servicesCreateManyTaskersInputEnvelope = {
    data: Prisma.tasker_servicesCreateManyTaskersInput | Prisma.tasker_servicesCreateManyTaskersInput[];
    skipDuplicates?: boolean;
};
export type tasker_servicesUpsertWithWhereUniqueWithoutTaskersInput = {
    where: Prisma.tasker_servicesWhereUniqueInput;
    update: Prisma.XOR<Prisma.tasker_servicesUpdateWithoutTaskersInput, Prisma.tasker_servicesUncheckedUpdateWithoutTaskersInput>;
    create: Prisma.XOR<Prisma.tasker_servicesCreateWithoutTaskersInput, Prisma.tasker_servicesUncheckedCreateWithoutTaskersInput>;
};
export type tasker_servicesUpdateWithWhereUniqueWithoutTaskersInput = {
    where: Prisma.tasker_servicesWhereUniqueInput;
    data: Prisma.XOR<Prisma.tasker_servicesUpdateWithoutTaskersInput, Prisma.tasker_servicesUncheckedUpdateWithoutTaskersInput>;
};
export type tasker_servicesUpdateManyWithWhereWithoutTaskersInput = {
    where: Prisma.tasker_servicesScalarWhereInput;
    data: Prisma.XOR<Prisma.tasker_servicesUpdateManyMutationInput, Prisma.tasker_servicesUncheckedUpdateManyWithoutTaskersInput>;
};
export type tasker_servicesCreateManyServicesInput = {
    tasker_id: number;
    status?: string | null;
};
export type tasker_servicesUpdateWithoutServicesInput = {
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    taskers?: Prisma.taskersUpdateOneRequiredWithoutTasker_servicesNestedInput;
};
export type tasker_servicesUncheckedUpdateWithoutServicesInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tasker_servicesUncheckedUpdateManyWithoutServicesInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tasker_servicesCreateManyTaskersInput = {
    service_id: number;
    status?: string | null;
};
export type tasker_servicesUpdateWithoutTaskersInput = {
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    services?: Prisma.servicesUpdateOneRequiredWithoutTasker_servicesNestedInput;
};
export type tasker_servicesUncheckedUpdateWithoutTaskersInput = {
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tasker_servicesUncheckedUpdateManyWithoutTaskersInput = {
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type tasker_servicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tasker_id?: boolean;
    service_id?: boolean;
    status?: boolean;
    services?: boolean | Prisma.servicesDefaultArgs<ExtArgs>;
    taskers?: boolean | Prisma.taskersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tasker_services"]>;
export type tasker_servicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tasker_id?: boolean;
    service_id?: boolean;
    status?: boolean;
    services?: boolean | Prisma.servicesDefaultArgs<ExtArgs>;
    taskers?: boolean | Prisma.taskersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tasker_services"]>;
export type tasker_servicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tasker_id?: boolean;
    service_id?: boolean;
    status?: boolean;
    services?: boolean | Prisma.servicesDefaultArgs<ExtArgs>;
    taskers?: boolean | Prisma.taskersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tasker_services"]>;
export type tasker_servicesSelectScalar = {
    tasker_id?: boolean;
    service_id?: boolean;
    status?: boolean;
};
export type tasker_servicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"tasker_id" | "service_id" | "status", ExtArgs["result"]["tasker_services"]>;
export type tasker_servicesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    services?: boolean | Prisma.servicesDefaultArgs<ExtArgs>;
    taskers?: boolean | Prisma.taskersDefaultArgs<ExtArgs>;
};
export type tasker_servicesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    services?: boolean | Prisma.servicesDefaultArgs<ExtArgs>;
    taskers?: boolean | Prisma.taskersDefaultArgs<ExtArgs>;
};
export type tasker_servicesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    services?: boolean | Prisma.servicesDefaultArgs<ExtArgs>;
    taskers?: boolean | Prisma.taskersDefaultArgs<ExtArgs>;
};
export type $tasker_servicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tasker_services";
    objects: {
        services: Prisma.$servicesPayload<ExtArgs>;
        taskers: Prisma.$taskersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        tasker_id: number;
        service_id: number;
        status: string | null;
    }, ExtArgs["result"]["tasker_services"]>;
    composites: {};
};
export type tasker_servicesGetPayload<S extends boolean | null | undefined | tasker_servicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload, S>;
export type tasker_servicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tasker_servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tasker_servicesCountAggregateInputType | true;
};
export interface tasker_servicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tasker_services'];
        meta: {
            name: 'tasker_services';
        };
    };
    findUnique<T extends tasker_servicesFindUniqueArgs>(args: Prisma.SelectSubset<T, tasker_servicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tasker_servicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tasker_servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tasker_servicesFindFirstArgs>(args?: Prisma.SelectSubset<T, tasker_servicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tasker_servicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tasker_servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tasker_servicesFindManyArgs>(args?: Prisma.SelectSubset<T, tasker_servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tasker_servicesCreateArgs>(args: Prisma.SelectSubset<T, tasker_servicesCreateArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tasker_servicesCreateManyArgs>(args?: Prisma.SelectSubset<T, tasker_servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends tasker_servicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tasker_servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends tasker_servicesDeleteArgs>(args: Prisma.SelectSubset<T, tasker_servicesDeleteArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tasker_servicesUpdateArgs>(args: Prisma.SelectSubset<T, tasker_servicesUpdateArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tasker_servicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, tasker_servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tasker_servicesUpdateManyArgs>(args: Prisma.SelectSubset<T, tasker_servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends tasker_servicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tasker_servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends tasker_servicesUpsertArgs>(args: Prisma.SelectSubset<T, tasker_servicesUpsertArgs<ExtArgs>>): Prisma.Prisma__tasker_servicesClient<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tasker_servicesCountArgs>(args?: Prisma.Subset<T, tasker_servicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tasker_servicesCountAggregateOutputType> : number>;
    aggregate<T extends Tasker_servicesAggregateArgs>(args: Prisma.Subset<T, Tasker_servicesAggregateArgs>): Prisma.PrismaPromise<GetTasker_servicesAggregateType<T>>;
    groupBy<T extends tasker_servicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tasker_servicesGroupByArgs['orderBy'];
    } : {
        orderBy?: tasker_servicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tasker_servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasker_servicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tasker_servicesFieldRefs;
}
export interface Prisma__tasker_servicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    services<T extends Prisma.servicesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.servicesDefaultArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    taskers<T extends Prisma.taskersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.taskersDefaultArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tasker_servicesFieldRefs {
    readonly tasker_id: Prisma.FieldRef<"tasker_services", 'Int'>;
    readonly service_id: Prisma.FieldRef<"tasker_services", 'Int'>;
    readonly status: Prisma.FieldRef<"tasker_services", 'String'>;
}
export type tasker_servicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where: Prisma.tasker_servicesWhereUniqueInput;
};
export type tasker_servicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where: Prisma.tasker_servicesWhereUniqueInput;
};
export type tasker_servicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where?: Prisma.tasker_servicesWhereInput;
    orderBy?: Prisma.tasker_servicesOrderByWithRelationInput | Prisma.tasker_servicesOrderByWithRelationInput[];
    cursor?: Prisma.tasker_servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tasker_servicesScalarFieldEnum | Prisma.Tasker_servicesScalarFieldEnum[];
};
export type tasker_servicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where?: Prisma.tasker_servicesWhereInput;
    orderBy?: Prisma.tasker_servicesOrderByWithRelationInput | Prisma.tasker_servicesOrderByWithRelationInput[];
    cursor?: Prisma.tasker_servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tasker_servicesScalarFieldEnum | Prisma.Tasker_servicesScalarFieldEnum[];
};
export type tasker_servicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where?: Prisma.tasker_servicesWhereInput;
    orderBy?: Prisma.tasker_servicesOrderByWithRelationInput | Prisma.tasker_servicesOrderByWithRelationInput[];
    cursor?: Prisma.tasker_servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tasker_servicesScalarFieldEnum | Prisma.Tasker_servicesScalarFieldEnum[];
};
export type tasker_servicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tasker_servicesCreateInput, Prisma.tasker_servicesUncheckedCreateInput>;
};
export type tasker_servicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tasker_servicesCreateManyInput | Prisma.tasker_servicesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tasker_servicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    data: Prisma.tasker_servicesCreateManyInput | Prisma.tasker_servicesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.tasker_servicesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type tasker_servicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tasker_servicesUpdateInput, Prisma.tasker_servicesUncheckedUpdateInput>;
    where: Prisma.tasker_servicesWhereUniqueInput;
};
export type tasker_servicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tasker_servicesUpdateManyMutationInput, Prisma.tasker_servicesUncheckedUpdateManyInput>;
    where?: Prisma.tasker_servicesWhereInput;
    limit?: number;
};
export type tasker_servicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tasker_servicesUpdateManyMutationInput, Prisma.tasker_servicesUncheckedUpdateManyInput>;
    where?: Prisma.tasker_servicesWhereInput;
    limit?: number;
    include?: Prisma.tasker_servicesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type tasker_servicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where: Prisma.tasker_servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.tasker_servicesCreateInput, Prisma.tasker_servicesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tasker_servicesUpdateInput, Prisma.tasker_servicesUncheckedUpdateInput>;
};
export type tasker_servicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
    where: Prisma.tasker_servicesWhereUniqueInput;
};
export type tasker_servicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasker_servicesWhereInput;
    limit?: number;
};
export type tasker_servicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tasker_servicesSelect<ExtArgs> | null;
    omit?: Prisma.tasker_servicesOmit<ExtArgs> | null;
    include?: Prisma.tasker_servicesInclude<ExtArgs> | null;
};
