import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type taskersModel = runtime.Types.Result.DefaultSelection<Prisma.$taskersPayload>;
export type AggregateTaskers = {
    _count: TaskersCountAggregateOutputType | null;
    _avg: TaskersAvgAggregateOutputType | null;
    _sum: TaskersSumAggregateOutputType | null;
    _min: TaskersMinAggregateOutputType | null;
    _max: TaskersMaxAggregateOutputType | null;
};
export type TaskersAvgAggregateOutputType = {
    tasker_id: number | null;
    average_rating: runtime.Decimal | null;
    total_jobs: number | null;
};
export type TaskersSumAggregateOutputType = {
    tasker_id: number | null;
    average_rating: runtime.Decimal | null;
    total_jobs: number | null;
};
export type TaskersMinAggregateOutputType = {
    tasker_id: number | null;
    bio: string | null;
    kyc_status: string | null;
    average_rating: runtime.Decimal | null;
    total_jobs: number | null;
    is_online: boolean | null;
    last_heartbeat: Date | null;
};
export type TaskersMaxAggregateOutputType = {
    tasker_id: number | null;
    bio: string | null;
    kyc_status: string | null;
    average_rating: runtime.Decimal | null;
    total_jobs: number | null;
    is_online: boolean | null;
    last_heartbeat: Date | null;
};
export type TaskersCountAggregateOutputType = {
    tasker_id: number;
    bio: number;
    kyc_status: number;
    average_rating: number;
    total_jobs: number;
    is_online: number;
    last_heartbeat: number;
    _all: number;
};
export type TaskersAvgAggregateInputType = {
    tasker_id?: true;
    average_rating?: true;
    total_jobs?: true;
};
export type TaskersSumAggregateInputType = {
    tasker_id?: true;
    average_rating?: true;
    total_jobs?: true;
};
export type TaskersMinAggregateInputType = {
    tasker_id?: true;
    bio?: true;
    kyc_status?: true;
    average_rating?: true;
    total_jobs?: true;
    is_online?: true;
    last_heartbeat?: true;
};
export type TaskersMaxAggregateInputType = {
    tasker_id?: true;
    bio?: true;
    kyc_status?: true;
    average_rating?: true;
    total_jobs?: true;
    is_online?: true;
    last_heartbeat?: true;
};
export type TaskersCountAggregateInputType = {
    tasker_id?: true;
    bio?: true;
    kyc_status?: true;
    average_rating?: true;
    total_jobs?: true;
    is_online?: true;
    last_heartbeat?: true;
    _all?: true;
};
export type TaskersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.taskersWhereInput;
    orderBy?: Prisma.taskersOrderByWithRelationInput | Prisma.taskersOrderByWithRelationInput[];
    cursor?: Prisma.taskersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskersCountAggregateInputType;
    _avg?: TaskersAvgAggregateInputType;
    _sum?: TaskersSumAggregateInputType;
    _min?: TaskersMinAggregateInputType;
    _max?: TaskersMaxAggregateInputType;
};
export type GetTaskersAggregateType<T extends TaskersAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskers[P]> : Prisma.GetScalarType<T[P], AggregateTaskers[P]>;
};
export type taskersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.taskersWhereInput;
    orderBy?: Prisma.taskersOrderByWithAggregationInput | Prisma.taskersOrderByWithAggregationInput[];
    by: Prisma.TaskersScalarFieldEnum[] | Prisma.TaskersScalarFieldEnum;
    having?: Prisma.taskersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskersCountAggregateInputType | true;
    _avg?: TaskersAvgAggregateInputType;
    _sum?: TaskersSumAggregateInputType;
    _min?: TaskersMinAggregateInputType;
    _max?: TaskersMaxAggregateInputType;
};
export type TaskersGroupByOutputType = {
    tasker_id: number;
    bio: string | null;
    kyc_status: string | null;
    average_rating: runtime.Decimal | null;
    total_jobs: number | null;
    is_online: boolean | null;
    last_heartbeat: Date | null;
    _count: TaskersCountAggregateOutputType | null;
    _avg: TaskersAvgAggregateOutputType | null;
    _sum: TaskersSumAggregateOutputType | null;
    _min: TaskersMinAggregateOutputType | null;
    _max: TaskersMaxAggregateOutputType | null;
};
export type GetTaskersGroupByPayload<T extends taskersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskersGroupByOutputType[P]>;
}>>;
export type taskersWhereInput = {
    AND?: Prisma.taskersWhereInput | Prisma.taskersWhereInput[];
    OR?: Prisma.taskersWhereInput[];
    NOT?: Prisma.taskersWhereInput | Prisma.taskersWhereInput[];
    tasker_id?: Prisma.IntFilter<"taskers"> | number;
    bio?: Prisma.StringNullableFilter<"taskers"> | string | null;
    kyc_status?: Prisma.StringNullableFilter<"taskers"> | string | null;
    average_rating?: Prisma.DecimalNullableFilter<"taskers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.IntNullableFilter<"taskers"> | number | null;
    is_online?: Prisma.BoolNullableFilter<"taskers"> | boolean | null;
    last_heartbeat?: Prisma.DateTimeNullableFilter<"taskers"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
    tasker_services?: Prisma.Tasker_servicesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type taskersOrderByWithRelationInput = {
    tasker_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    kyc_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    average_rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_jobs?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_online?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_heartbeat?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    reviews?: Prisma.reviewsOrderByRelationAggregateInput;
    tasker_services?: Prisma.tasker_servicesOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type taskersWhereUniqueInput = Prisma.AtLeast<{
    tasker_id?: number;
    AND?: Prisma.taskersWhereInput | Prisma.taskersWhereInput[];
    OR?: Prisma.taskersWhereInput[];
    NOT?: Prisma.taskersWhereInput | Prisma.taskersWhereInput[];
    bio?: Prisma.StringNullableFilter<"taskers"> | string | null;
    kyc_status?: Prisma.StringNullableFilter<"taskers"> | string | null;
    average_rating?: Prisma.DecimalNullableFilter<"taskers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.IntNullableFilter<"taskers"> | number | null;
    is_online?: Prisma.BoolNullableFilter<"taskers"> | boolean | null;
    last_heartbeat?: Prisma.DateTimeNullableFilter<"taskers"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
    reviews?: Prisma.ReviewsListRelationFilter;
    tasker_services?: Prisma.Tasker_servicesListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "tasker_id">;
export type taskersOrderByWithAggregationInput = {
    tasker_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    kyc_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    average_rating?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_jobs?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_online?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_heartbeat?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.taskersCountOrderByAggregateInput;
    _avg?: Prisma.taskersAvgOrderByAggregateInput;
    _max?: Prisma.taskersMaxOrderByAggregateInput;
    _min?: Prisma.taskersMinOrderByAggregateInput;
    _sum?: Prisma.taskersSumOrderByAggregateInput;
};
export type taskersScalarWhereWithAggregatesInput = {
    AND?: Prisma.taskersScalarWhereWithAggregatesInput | Prisma.taskersScalarWhereWithAggregatesInput[];
    OR?: Prisma.taskersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.taskersScalarWhereWithAggregatesInput | Prisma.taskersScalarWhereWithAggregatesInput[];
    tasker_id?: Prisma.IntWithAggregatesFilter<"taskers"> | number;
    bio?: Prisma.StringNullableWithAggregatesFilter<"taskers"> | string | null;
    kyc_status?: Prisma.StringNullableWithAggregatesFilter<"taskers"> | string | null;
    average_rating?: Prisma.DecimalNullableWithAggregatesFilter<"taskers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.IntNullableWithAggregatesFilter<"taskers"> | number | null;
    is_online?: Prisma.BoolNullableWithAggregatesFilter<"taskers"> | boolean | null;
    last_heartbeat?: Prisma.DateTimeNullableWithAggregatesFilter<"taskers"> | Date | string | null;
};
export type taskersCreateInput = {
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutTaskersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesCreateNestedManyWithoutTaskersInput;
    users: Prisma.usersCreateNestedOneWithoutTaskersInput;
};
export type taskersUncheckedCreateInput = {
    tasker_id: number;
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutTaskersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesUncheckedCreateNestedManyWithoutTaskersInput;
};
export type taskersUpdateInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutTaskersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUpdateManyWithoutTaskersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutTaskersNestedInput;
};
export type taskersUncheckedUpdateInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutTaskersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUncheckedUpdateManyWithoutTaskersNestedInput;
};
export type taskersCreateManyInput = {
    tasker_id: number;
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
};
export type taskersUpdateManyMutationInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type taskersUncheckedUpdateManyInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskersNullableScalarRelationFilter = {
    is?: Prisma.taskersWhereInput | null;
    isNot?: Prisma.taskersWhereInput | null;
};
export type TaskersScalarRelationFilter = {
    is?: Prisma.taskersWhereInput;
    isNot?: Prisma.taskersWhereInput;
};
export type taskersCountOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    kyc_status?: Prisma.SortOrder;
    average_rating?: Prisma.SortOrder;
    total_jobs?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    last_heartbeat?: Prisma.SortOrder;
};
export type taskersAvgOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    average_rating?: Prisma.SortOrder;
    total_jobs?: Prisma.SortOrder;
};
export type taskersMaxOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    kyc_status?: Prisma.SortOrder;
    average_rating?: Prisma.SortOrder;
    total_jobs?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    last_heartbeat?: Prisma.SortOrder;
};
export type taskersMinOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    kyc_status?: Prisma.SortOrder;
    average_rating?: Prisma.SortOrder;
    total_jobs?: Prisma.SortOrder;
    is_online?: Prisma.SortOrder;
    last_heartbeat?: Prisma.SortOrder;
};
export type taskersSumOrderByAggregateInput = {
    tasker_id?: Prisma.SortOrder;
    average_rating?: Prisma.SortOrder;
    total_jobs?: Prisma.SortOrder;
};
export type taskersCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutOrdersInput, Prisma.taskersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.taskersWhereUniqueInput;
};
export type taskersUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutOrdersInput, Prisma.taskersUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.taskersUpsertWithoutOrdersInput;
    disconnect?: Prisma.taskersWhereInput | boolean;
    delete?: Prisma.taskersWhereInput | boolean;
    connect?: Prisma.taskersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.taskersUpdateToOneWithWhereWithoutOrdersInput, Prisma.taskersUpdateWithoutOrdersInput>, Prisma.taskersUncheckedUpdateWithoutOrdersInput>;
};
export type taskersCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutReviewsInput, Prisma.taskersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.taskersWhereUniqueInput;
};
export type taskersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutReviewsInput, Prisma.taskersUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.taskersUpsertWithoutReviewsInput;
    connect?: Prisma.taskersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.taskersUpdateToOneWithWhereWithoutReviewsInput, Prisma.taskersUpdateWithoutReviewsInput>, Prisma.taskersUncheckedUpdateWithoutReviewsInput>;
};
export type taskersCreateNestedOneWithoutTasker_servicesInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutTasker_servicesInput, Prisma.taskersUncheckedCreateWithoutTasker_servicesInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutTasker_servicesInput;
    connect?: Prisma.taskersWhereUniqueInput;
};
export type taskersUpdateOneRequiredWithoutTasker_servicesNestedInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutTasker_servicesInput, Prisma.taskersUncheckedCreateWithoutTasker_servicesInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutTasker_servicesInput;
    upsert?: Prisma.taskersUpsertWithoutTasker_servicesInput;
    connect?: Prisma.taskersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.taskersUpdateToOneWithWhereWithoutTasker_servicesInput, Prisma.taskersUpdateWithoutTasker_servicesInput>, Prisma.taskersUncheckedUpdateWithoutTasker_servicesInput>;
};
export type taskersCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutUsersInput, Prisma.taskersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.taskersWhereUniqueInput;
};
export type taskersUncheckedCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutUsersInput, Prisma.taskersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutUsersInput;
    connect?: Prisma.taskersWhereUniqueInput;
};
export type taskersUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutUsersInput, Prisma.taskersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.taskersUpsertWithoutUsersInput;
    disconnect?: Prisma.taskersWhereInput | boolean;
    delete?: Prisma.taskersWhereInput | boolean;
    connect?: Prisma.taskersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.taskersUpdateToOneWithWhereWithoutUsersInput, Prisma.taskersUpdateWithoutUsersInput>, Prisma.taskersUncheckedUpdateWithoutUsersInput>;
};
export type taskersUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.taskersCreateWithoutUsersInput, Prisma.taskersUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.taskersCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.taskersUpsertWithoutUsersInput;
    disconnect?: Prisma.taskersWhereInput | boolean;
    delete?: Prisma.taskersWhereInput | boolean;
    connect?: Prisma.taskersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.taskersUpdateToOneWithWhereWithoutUsersInput, Prisma.taskersUpdateWithoutUsersInput>, Prisma.taskersUncheckedUpdateWithoutUsersInput>;
};
export type taskersCreateWithoutOrdersInput = {
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    reviews?: Prisma.reviewsCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesCreateNestedManyWithoutTaskersInput;
    users: Prisma.usersCreateNestedOneWithoutTaskersInput;
};
export type taskersUncheckedCreateWithoutOrdersInput = {
    tasker_id: number;
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesUncheckedCreateNestedManyWithoutTaskersInput;
};
export type taskersCreateOrConnectWithoutOrdersInput = {
    where: Prisma.taskersWhereUniqueInput;
    create: Prisma.XOR<Prisma.taskersCreateWithoutOrdersInput, Prisma.taskersUncheckedCreateWithoutOrdersInput>;
};
export type taskersUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.taskersUpdateWithoutOrdersInput, Prisma.taskersUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.taskersCreateWithoutOrdersInput, Prisma.taskersUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.taskersWhereInput;
};
export type taskersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.taskersWhereInput;
    data: Prisma.XOR<Prisma.taskersUpdateWithoutOrdersInput, Prisma.taskersUncheckedUpdateWithoutOrdersInput>;
};
export type taskersUpdateWithoutOrdersInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviews?: Prisma.reviewsUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUpdateManyWithoutTaskersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutTaskersNestedInput;
};
export type taskersUncheckedUpdateWithoutOrdersInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUncheckedUpdateManyWithoutTaskersNestedInput;
};
export type taskersCreateWithoutReviewsInput = {
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesCreateNestedManyWithoutTaskersInput;
    users: Prisma.usersCreateNestedOneWithoutTaskersInput;
};
export type taskersUncheckedCreateWithoutReviewsInput = {
    tasker_id: number;
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesUncheckedCreateNestedManyWithoutTaskersInput;
};
export type taskersCreateOrConnectWithoutReviewsInput = {
    where: Prisma.taskersWhereUniqueInput;
    create: Prisma.XOR<Prisma.taskersCreateWithoutReviewsInput, Prisma.taskersUncheckedCreateWithoutReviewsInput>;
};
export type taskersUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.taskersUpdateWithoutReviewsInput, Prisma.taskersUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.taskersCreateWithoutReviewsInput, Prisma.taskersUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.taskersWhereInput;
};
export type taskersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.taskersWhereInput;
    data: Prisma.XOR<Prisma.taskersUpdateWithoutReviewsInput, Prisma.taskersUncheckedUpdateWithoutReviewsInput>;
};
export type taskersUpdateWithoutReviewsInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUpdateManyWithoutTaskersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutTaskersNestedInput;
};
export type taskersUncheckedUpdateWithoutReviewsInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUncheckedUpdateManyWithoutTaskersNestedInput;
};
export type taskersCreateWithoutTasker_servicesInput = {
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutTaskersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutTaskersInput;
    users: Prisma.usersCreateNestedOneWithoutTaskersInput;
};
export type taskersUncheckedCreateWithoutTasker_servicesInput = {
    tasker_id: number;
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutTaskersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutTaskersInput;
};
export type taskersCreateOrConnectWithoutTasker_servicesInput = {
    where: Prisma.taskersWhereUniqueInput;
    create: Prisma.XOR<Prisma.taskersCreateWithoutTasker_servicesInput, Prisma.taskersUncheckedCreateWithoutTasker_servicesInput>;
};
export type taskersUpsertWithoutTasker_servicesInput = {
    update: Prisma.XOR<Prisma.taskersUpdateWithoutTasker_servicesInput, Prisma.taskersUncheckedUpdateWithoutTasker_servicesInput>;
    create: Prisma.XOR<Prisma.taskersCreateWithoutTasker_servicesInput, Prisma.taskersUncheckedCreateWithoutTasker_servicesInput>;
    where?: Prisma.taskersWhereInput;
};
export type taskersUpdateToOneWithWhereWithoutTasker_servicesInput = {
    where?: Prisma.taskersWhereInput;
    data: Prisma.XOR<Prisma.taskersUpdateWithoutTasker_servicesInput, Prisma.taskersUncheckedUpdateWithoutTasker_servicesInput>;
};
export type taskersUpdateWithoutTasker_servicesInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutTaskersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutTaskersNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutTaskersNestedInput;
};
export type taskersUncheckedUpdateWithoutTasker_servicesInput = {
    tasker_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutTaskersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutTaskersNestedInput;
};
export type taskersCreateWithoutUsersInput = {
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutTaskersInput;
    reviews?: Prisma.reviewsCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesCreateNestedManyWithoutTaskersInput;
};
export type taskersUncheckedCreateWithoutUsersInput = {
    bio?: string | null;
    kyc_status?: string | null;
    average_rating?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: number | null;
    is_online?: boolean | null;
    last_heartbeat?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutTaskersInput;
    reviews?: Prisma.reviewsUncheckedCreateNestedManyWithoutTaskersInput;
    tasker_services?: Prisma.tasker_servicesUncheckedCreateNestedManyWithoutTaskersInput;
};
export type taskersCreateOrConnectWithoutUsersInput = {
    where: Prisma.taskersWhereUniqueInput;
    create: Prisma.XOR<Prisma.taskersCreateWithoutUsersInput, Prisma.taskersUncheckedCreateWithoutUsersInput>;
};
export type taskersUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.taskersUpdateWithoutUsersInput, Prisma.taskersUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.taskersCreateWithoutUsersInput, Prisma.taskersUncheckedCreateWithoutUsersInput>;
    where?: Prisma.taskersWhereInput;
};
export type taskersUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.taskersWhereInput;
    data: Prisma.XOR<Prisma.taskersUpdateWithoutUsersInput, Prisma.taskersUncheckedUpdateWithoutUsersInput>;
};
export type taskersUpdateWithoutUsersInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutTaskersNestedInput;
    reviews?: Prisma.reviewsUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUpdateManyWithoutTaskersNestedInput;
};
export type taskersUncheckedUpdateWithoutUsersInput = {
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    kyc_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    average_rating?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    total_jobs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_online?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    last_heartbeat?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutTaskersNestedInput;
    reviews?: Prisma.reviewsUncheckedUpdateManyWithoutTaskersNestedInput;
    tasker_services?: Prisma.tasker_servicesUncheckedUpdateManyWithoutTaskersNestedInput;
};
export type TaskersCountOutputType = {
    orders: number;
    reviews: number;
    tasker_services: number;
};
export type TaskersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | TaskersCountOutputTypeCountOrdersArgs;
    reviews?: boolean | TaskersCountOutputTypeCountReviewsArgs;
    tasker_services?: boolean | TaskersCountOutputTypeCountTasker_servicesArgs;
};
export type TaskersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskersCountOutputTypeSelect<ExtArgs> | null;
};
export type TaskersCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type TaskersCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reviewsWhereInput;
};
export type TaskersCountOutputTypeCountTasker_servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasker_servicesWhereInput;
};
export type taskersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tasker_id?: boolean;
    bio?: boolean;
    kyc_status?: boolean;
    average_rating?: boolean;
    total_jobs?: boolean;
    is_online?: boolean;
    last_heartbeat?: boolean;
    orders?: boolean | Prisma.taskers$ordersArgs<ExtArgs>;
    reviews?: boolean | Prisma.taskers$reviewsArgs<ExtArgs>;
    tasker_services?: boolean | Prisma.taskers$tasker_servicesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskers"]>;
export type taskersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tasker_id?: boolean;
    bio?: boolean;
    kyc_status?: boolean;
    average_rating?: boolean;
    total_jobs?: boolean;
    is_online?: boolean;
    last_heartbeat?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskers"]>;
export type taskersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    tasker_id?: boolean;
    bio?: boolean;
    kyc_status?: boolean;
    average_rating?: boolean;
    total_jobs?: boolean;
    is_online?: boolean;
    last_heartbeat?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskers"]>;
export type taskersSelectScalar = {
    tasker_id?: boolean;
    bio?: boolean;
    kyc_status?: boolean;
    average_rating?: boolean;
    total_jobs?: boolean;
    is_online?: boolean;
    last_heartbeat?: boolean;
};
export type taskersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"tasker_id" | "bio" | "kyc_status" | "average_rating" | "total_jobs" | "is_online" | "last_heartbeat", ExtArgs["result"]["taskers"]>;
export type taskersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.taskers$ordersArgs<ExtArgs>;
    reviews?: boolean | Prisma.taskers$reviewsArgs<ExtArgs>;
    tasker_services?: boolean | Prisma.taskers$tasker_servicesArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type taskersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type taskersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $taskersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "taskers";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>[];
        reviews: Prisma.$reviewsPayload<ExtArgs>[];
        tasker_services: Prisma.$tasker_servicesPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        tasker_id: number;
        bio: string | null;
        kyc_status: string | null;
        average_rating: runtime.Decimal | null;
        total_jobs: number | null;
        is_online: boolean | null;
        last_heartbeat: Date | null;
    }, ExtArgs["result"]["taskers"]>;
    composites: {};
};
export type taskersGetPayload<S extends boolean | null | undefined | taskersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$taskersPayload, S>;
export type taskersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<taskersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskersCountAggregateInputType | true;
};
export interface taskersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['taskers'];
        meta: {
            name: 'taskers';
        };
    };
    findUnique<T extends taskersFindUniqueArgs>(args: Prisma.SelectSubset<T, taskersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends taskersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, taskersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends taskersFindFirstArgs>(args?: Prisma.SelectSubset<T, taskersFindFirstArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends taskersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, taskersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends taskersFindManyArgs>(args?: Prisma.SelectSubset<T, taskersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends taskersCreateArgs>(args: Prisma.SelectSubset<T, taskersCreateArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends taskersCreateManyArgs>(args?: Prisma.SelectSubset<T, taskersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends taskersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, taskersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends taskersDeleteArgs>(args: Prisma.SelectSubset<T, taskersDeleteArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends taskersUpdateArgs>(args: Prisma.SelectSubset<T, taskersUpdateArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends taskersDeleteManyArgs>(args?: Prisma.SelectSubset<T, taskersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends taskersUpdateManyArgs>(args: Prisma.SelectSubset<T, taskersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends taskersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, taskersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends taskersUpsertArgs>(args: Prisma.SelectSubset<T, taskersUpsertArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends taskersCountArgs>(args?: Prisma.Subset<T, taskersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskersCountAggregateOutputType> : number>;
    aggregate<T extends TaskersAggregateArgs>(args: Prisma.Subset<T, TaskersAggregateArgs>): Prisma.PrismaPromise<GetTaskersAggregateType<T>>;
    groupBy<T extends taskersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: taskersGroupByArgs['orderBy'];
    } : {
        orderBy?: taskersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, taskersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: taskersFieldRefs;
}
export interface Prisma__taskersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.taskers$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.taskers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.taskers$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.taskers$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tasker_services<T extends Prisma.taskers$tasker_servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.taskers$tasker_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface taskersFieldRefs {
    readonly tasker_id: Prisma.FieldRef<"taskers", 'Int'>;
    readonly bio: Prisma.FieldRef<"taskers", 'String'>;
    readonly kyc_status: Prisma.FieldRef<"taskers", 'String'>;
    readonly average_rating: Prisma.FieldRef<"taskers", 'Decimal'>;
    readonly total_jobs: Prisma.FieldRef<"taskers", 'Int'>;
    readonly is_online: Prisma.FieldRef<"taskers", 'Boolean'>;
    readonly last_heartbeat: Prisma.FieldRef<"taskers", 'DateTime'>;
}
export type taskersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where: Prisma.taskersWhereUniqueInput;
};
export type taskersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where: Prisma.taskersWhereUniqueInput;
};
export type taskersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where?: Prisma.taskersWhereInput;
    orderBy?: Prisma.taskersOrderByWithRelationInput | Prisma.taskersOrderByWithRelationInput[];
    cursor?: Prisma.taskersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskersScalarFieldEnum | Prisma.TaskersScalarFieldEnum[];
};
export type taskersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where?: Prisma.taskersWhereInput;
    orderBy?: Prisma.taskersOrderByWithRelationInput | Prisma.taskersOrderByWithRelationInput[];
    cursor?: Prisma.taskersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskersScalarFieldEnum | Prisma.TaskersScalarFieldEnum[];
};
export type taskersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where?: Prisma.taskersWhereInput;
    orderBy?: Prisma.taskersOrderByWithRelationInput | Prisma.taskersOrderByWithRelationInput[];
    cursor?: Prisma.taskersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskersScalarFieldEnum | Prisma.TaskersScalarFieldEnum[];
};
export type taskersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.taskersCreateInput, Prisma.taskersUncheckedCreateInput>;
};
export type taskersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.taskersCreateManyInput | Prisma.taskersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type taskersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    data: Prisma.taskersCreateManyInput | Prisma.taskersCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.taskersIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type taskersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.taskersUpdateInput, Prisma.taskersUncheckedUpdateInput>;
    where: Prisma.taskersWhereUniqueInput;
};
export type taskersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.taskersUpdateManyMutationInput, Prisma.taskersUncheckedUpdateManyInput>;
    where?: Prisma.taskersWhereInput;
    limit?: number;
};
export type taskersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.taskersUpdateManyMutationInput, Prisma.taskersUncheckedUpdateManyInput>;
    where?: Prisma.taskersWhereInput;
    limit?: number;
    include?: Prisma.taskersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type taskersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where: Prisma.taskersWhereUniqueInput;
    create: Prisma.XOR<Prisma.taskersCreateInput, Prisma.taskersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.taskersUpdateInput, Prisma.taskersUncheckedUpdateInput>;
};
export type taskersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where: Prisma.taskersWhereUniqueInput;
};
export type taskersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.taskersWhereInput;
    limit?: number;
};
export type taskers$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type taskers$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reviewsSelect<ExtArgs> | null;
    omit?: Prisma.reviewsOmit<ExtArgs> | null;
    include?: Prisma.reviewsInclude<ExtArgs> | null;
    where?: Prisma.reviewsWhereInput;
    orderBy?: Prisma.reviewsOrderByWithRelationInput | Prisma.reviewsOrderByWithRelationInput[];
    cursor?: Prisma.reviewsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewsScalarFieldEnum | Prisma.ReviewsScalarFieldEnum[];
};
export type taskers$tasker_servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type taskersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
};
