import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type servicesModel = runtime.Types.Result.DefaultSelection<Prisma.$servicesPayload>;
export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null;
    _avg: ServicesAvgAggregateOutputType | null;
    _sum: ServicesSumAggregateOutputType | null;
    _min: ServicesMinAggregateOutputType | null;
    _max: ServicesMaxAggregateOutputType | null;
};
export type ServicesAvgAggregateOutputType = {
    service_id: number | null;
    base_price: runtime.Decimal | null;
};
export type ServicesSumAggregateOutputType = {
    service_id: number | null;
    base_price: runtime.Decimal | null;
};
export type ServicesMinAggregateOutputType = {
    service_id: number | null;
    name: string | null;
    description: string | null;
    base_price: runtime.Decimal | null;
    icon_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type ServicesMaxAggregateOutputType = {
    service_id: number | null;
    name: string | null;
    description: string | null;
    base_price: runtime.Decimal | null;
    icon_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type ServicesCountAggregateOutputType = {
    service_id: number;
    name: number;
    description: number;
    base_price: number;
    icon_url: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type ServicesAvgAggregateInputType = {
    service_id?: true;
    base_price?: true;
};
export type ServicesSumAggregateInputType = {
    service_id?: true;
    base_price?: true;
};
export type ServicesMinAggregateInputType = {
    service_id?: true;
    name?: true;
    description?: true;
    base_price?: true;
    icon_url?: true;
    is_active?: true;
    created_at?: true;
};
export type ServicesMaxAggregateInputType = {
    service_id?: true;
    name?: true;
    description?: true;
    base_price?: true;
    icon_url?: true;
    is_active?: true;
    created_at?: true;
};
export type ServicesCountAggregateInputType = {
    service_id?: true;
    name?: true;
    description?: true;
    base_price?: true;
    icon_url?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type ServicesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    cursor?: Prisma.servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServicesCountAggregateInputType;
    _avg?: ServicesAvgAggregateInputType;
    _sum?: ServicesSumAggregateInputType;
    _min?: ServicesMinAggregateInputType;
    _max?: ServicesMaxAggregateInputType;
};
export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
    [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServices[P]> : Prisma.GetScalarType<T[P], AggregateServices[P]>;
};
export type servicesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithAggregationInput | Prisma.servicesOrderByWithAggregationInput[];
    by: Prisma.ServicesScalarFieldEnum[] | Prisma.ServicesScalarFieldEnum;
    having?: Prisma.servicesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServicesCountAggregateInputType | true;
    _avg?: ServicesAvgAggregateInputType;
    _sum?: ServicesSumAggregateInputType;
    _min?: ServicesMinAggregateInputType;
    _max?: ServicesMaxAggregateInputType;
};
export type ServicesGroupByOutputType = {
    service_id: number;
    name: string;
    description: string | null;
    base_price: runtime.Decimal;
    icon_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    _count: ServicesCountAggregateOutputType | null;
    _avg: ServicesAvgAggregateOutputType | null;
    _sum: ServicesSumAggregateOutputType | null;
    _min: ServicesMinAggregateOutputType | null;
    _max: ServicesMaxAggregateOutputType | null;
};
export type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServicesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServicesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServicesGroupByOutputType[P]>;
}>>;
export type servicesWhereInput = {
    AND?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    OR?: Prisma.servicesWhereInput[];
    NOT?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    service_id?: Prisma.IntFilter<"services"> | number;
    name?: Prisma.StringFilter<"services"> | string;
    description?: Prisma.StringNullableFilter<"services"> | string | null;
    base_price?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.StringNullableFilter<"services"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"services"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"services"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
    tasker_services?: Prisma.Tasker_servicesListRelationFilter;
};
export type servicesOrderByWithRelationInput = {
    service_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByRelationAggregateInput;
    tasker_services?: Prisma.tasker_servicesOrderByRelationAggregateInput;
};
export type servicesWhereUniqueInput = Prisma.AtLeast<{
    service_id?: number;
    AND?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    OR?: Prisma.servicesWhereInput[];
    NOT?: Prisma.servicesWhereInput | Prisma.servicesWhereInput[];
    name?: Prisma.StringFilter<"services"> | string;
    description?: Prisma.StringNullableFilter<"services"> | string | null;
    base_price?: Prisma.DecimalFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.StringNullableFilter<"services"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"services"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"services"> | Date | string | null;
    orders?: Prisma.OrdersListRelationFilter;
    tasker_services?: Prisma.Tasker_servicesListRelationFilter;
}, "service_id">;
export type servicesOrderByWithAggregationInput = {
    service_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.servicesCountOrderByAggregateInput;
    _avg?: Prisma.servicesAvgOrderByAggregateInput;
    _max?: Prisma.servicesMaxOrderByAggregateInput;
    _min?: Prisma.servicesMinOrderByAggregateInput;
    _sum?: Prisma.servicesSumOrderByAggregateInput;
};
export type servicesScalarWhereWithAggregatesInput = {
    AND?: Prisma.servicesScalarWhereWithAggregatesInput | Prisma.servicesScalarWhereWithAggregatesInput[];
    OR?: Prisma.servicesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.servicesScalarWhereWithAggregatesInput | Prisma.servicesScalarWhereWithAggregatesInput[];
    service_id?: Prisma.IntWithAggregatesFilter<"services"> | number;
    name?: Prisma.StringWithAggregatesFilter<"services"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"services"> | string | null;
    base_price?: Prisma.DecimalWithAggregatesFilter<"services"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.StringNullableWithAggregatesFilter<"services"> | string | null;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"services"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"services"> | Date | string | null;
};
export type servicesCreateInput = {
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutServicesInput;
    tasker_services?: Prisma.tasker_servicesCreateNestedManyWithoutServicesInput;
};
export type servicesUncheckedCreateInput = {
    service_id?: number;
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutServicesInput;
    tasker_services?: Prisma.tasker_servicesUncheckedCreateNestedManyWithoutServicesInput;
};
export type servicesUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutServicesNestedInput;
    tasker_services?: Prisma.tasker_servicesUpdateManyWithoutServicesNestedInput;
};
export type servicesUncheckedUpdateInput = {
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutServicesNestedInput;
    tasker_services?: Prisma.tasker_servicesUncheckedUpdateManyWithoutServicesNestedInput;
};
export type servicesCreateManyInput = {
    service_id?: number;
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
};
export type servicesUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type servicesUncheckedUpdateManyInput = {
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ServicesScalarRelationFilter = {
    is?: Prisma.servicesWhereInput;
    isNot?: Prisma.servicesWhereInput;
};
export type servicesCountOrderByAggregateInput = {
    service_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type servicesAvgOrderByAggregateInput = {
    service_id?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
};
export type servicesMaxOrderByAggregateInput = {
    service_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type servicesMinOrderByAggregateInput = {
    service_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
    icon_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type servicesSumOrderByAggregateInput = {
    service_id?: Prisma.SortOrder;
    base_price?: Prisma.SortOrder;
};
export type servicesCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutOrdersInput, Prisma.servicesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.servicesWhereUniqueInput;
};
export type servicesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutOrdersInput, Prisma.servicesUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.servicesUpsertWithoutOrdersInput;
    connect?: Prisma.servicesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.servicesUpdateToOneWithWhereWithoutOrdersInput, Prisma.servicesUpdateWithoutOrdersInput>, Prisma.servicesUncheckedUpdateWithoutOrdersInput>;
};
export type servicesCreateNestedOneWithoutTasker_servicesInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutTasker_servicesInput, Prisma.servicesUncheckedCreateWithoutTasker_servicesInput>;
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutTasker_servicesInput;
    connect?: Prisma.servicesWhereUniqueInput;
};
export type servicesUpdateOneRequiredWithoutTasker_servicesNestedInput = {
    create?: Prisma.XOR<Prisma.servicesCreateWithoutTasker_servicesInput, Prisma.servicesUncheckedCreateWithoutTasker_servicesInput>;
    connectOrCreate?: Prisma.servicesCreateOrConnectWithoutTasker_servicesInput;
    upsert?: Prisma.servicesUpsertWithoutTasker_servicesInput;
    connect?: Prisma.servicesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.servicesUpdateToOneWithWhereWithoutTasker_servicesInput, Prisma.servicesUpdateWithoutTasker_servicesInput>, Prisma.servicesUncheckedUpdateWithoutTasker_servicesInput>;
};
export type servicesCreateWithoutOrdersInput = {
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    tasker_services?: Prisma.tasker_servicesCreateNestedManyWithoutServicesInput;
};
export type servicesUncheckedCreateWithoutOrdersInput = {
    service_id?: number;
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    tasker_services?: Prisma.tasker_servicesUncheckedCreateNestedManyWithoutServicesInput;
};
export type servicesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.servicesCreateWithoutOrdersInput, Prisma.servicesUncheckedCreateWithoutOrdersInput>;
};
export type servicesUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.servicesUpdateWithoutOrdersInput, Prisma.servicesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.servicesCreateWithoutOrdersInput, Prisma.servicesUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.servicesWhereInput;
};
export type servicesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.servicesWhereInput;
    data: Prisma.XOR<Prisma.servicesUpdateWithoutOrdersInput, Prisma.servicesUncheckedUpdateWithoutOrdersInput>;
};
export type servicesUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tasker_services?: Prisma.tasker_servicesUpdateManyWithoutServicesNestedInput;
};
export type servicesUncheckedUpdateWithoutOrdersInput = {
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tasker_services?: Prisma.tasker_servicesUncheckedUpdateManyWithoutServicesNestedInput;
};
export type servicesCreateWithoutTasker_servicesInput = {
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersCreateNestedManyWithoutServicesInput;
};
export type servicesUncheckedCreateWithoutTasker_servicesInput = {
    service_id?: number;
    name: string;
    description?: string | null;
    base_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    orders?: Prisma.ordersUncheckedCreateNestedManyWithoutServicesInput;
};
export type servicesCreateOrConnectWithoutTasker_servicesInput = {
    where: Prisma.servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.servicesCreateWithoutTasker_servicesInput, Prisma.servicesUncheckedCreateWithoutTasker_servicesInput>;
};
export type servicesUpsertWithoutTasker_servicesInput = {
    update: Prisma.XOR<Prisma.servicesUpdateWithoutTasker_servicesInput, Prisma.servicesUncheckedUpdateWithoutTasker_servicesInput>;
    create: Prisma.XOR<Prisma.servicesCreateWithoutTasker_servicesInput, Prisma.servicesUncheckedCreateWithoutTasker_servicesInput>;
    where?: Prisma.servicesWhereInput;
};
export type servicesUpdateToOneWithWhereWithoutTasker_servicesInput = {
    where?: Prisma.servicesWhereInput;
    data: Prisma.XOR<Prisma.servicesUpdateWithoutTasker_servicesInput, Prisma.servicesUncheckedUpdateWithoutTasker_servicesInput>;
};
export type servicesUpdateWithoutTasker_servicesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateManyWithoutServicesNestedInput;
};
export type servicesUncheckedUpdateWithoutTasker_servicesInput = {
    service_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    base_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    icon_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUncheckedUpdateManyWithoutServicesNestedInput;
};
export type ServicesCountOutputType = {
    orders: number;
    tasker_services: number;
};
export type ServicesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | ServicesCountOutputTypeCountOrdersArgs;
    tasker_services?: boolean | ServicesCountOutputTypeCountTasker_servicesArgs;
};
export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicesCountOutputTypeSelect<ExtArgs> | null;
};
export type ServicesCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type ServicesCountOutputTypeCountTasker_servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tasker_servicesWhereInput;
};
export type servicesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    service_id?: boolean;
    name?: boolean;
    description?: boolean;
    base_price?: boolean;
    icon_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.services$ordersArgs<ExtArgs>;
    tasker_services?: boolean | Prisma.services$tasker_servicesArgs<ExtArgs>;
    _count?: boolean | Prisma.ServicesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["services"]>;
export type servicesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    service_id?: boolean;
    name?: boolean;
    description?: boolean;
    base_price?: boolean;
    icon_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["services"]>;
export type servicesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    service_id?: boolean;
    name?: boolean;
    description?: boolean;
    base_price?: boolean;
    icon_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["services"]>;
export type servicesSelectScalar = {
    service_id?: boolean;
    name?: boolean;
    description?: boolean;
    base_price?: boolean;
    icon_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type servicesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"service_id" | "name" | "description" | "base_price" | "icon_url" | "is_active" | "created_at", ExtArgs["result"]["services"]>;
export type servicesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.services$ordersArgs<ExtArgs>;
    tasker_services?: boolean | Prisma.services$tasker_servicesArgs<ExtArgs>;
    _count?: boolean | Prisma.ServicesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type servicesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type servicesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $servicesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "services";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>[];
        tasker_services: Prisma.$tasker_servicesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        service_id: number;
        name: string;
        description: string | null;
        base_price: runtime.Decimal;
        icon_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
    }, ExtArgs["result"]["services"]>;
    composites: {};
};
export type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$servicesPayload, S>;
export type servicesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServicesCountAggregateInputType | true;
};
export interface servicesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['services'];
        meta: {
            name: 'services';
        };
    };
    findUnique<T extends servicesFindUniqueArgs>(args: Prisma.SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends servicesFindFirstArgs>(args?: Prisma.SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends servicesFindManyArgs>(args?: Prisma.SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends servicesCreateArgs>(args: Prisma.SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends servicesCreateManyArgs>(args?: Prisma.SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends servicesDeleteArgs>(args: Prisma.SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends servicesUpdateArgs>(args: Prisma.SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends servicesDeleteManyArgs>(args?: Prisma.SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends servicesUpdateManyArgs>(args: Prisma.SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends servicesUpsertArgs>(args: Prisma.SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma.Prisma__servicesClient<runtime.Types.Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends servicesCountArgs>(args?: Prisma.Subset<T, servicesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServicesCountAggregateOutputType> : number>;
    aggregate<T extends ServicesAggregateArgs>(args: Prisma.Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>;
    groupBy<T extends servicesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: servicesGroupByArgs['orderBy'];
    } : {
        orderBy?: servicesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: servicesFieldRefs;
}
export interface Prisma__servicesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.services$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.services$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tasker_services<T extends Prisma.services$tasker_servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.services$tasker_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tasker_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface servicesFieldRefs {
    readonly service_id: Prisma.FieldRef<"services", 'Int'>;
    readonly name: Prisma.FieldRef<"services", 'String'>;
    readonly description: Prisma.FieldRef<"services", 'String'>;
    readonly base_price: Prisma.FieldRef<"services", 'Decimal'>;
    readonly icon_url: Prisma.FieldRef<"services", 'String'>;
    readonly is_active: Prisma.FieldRef<"services", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"services", 'DateTime'>;
}
export type servicesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where: Prisma.servicesWhereUniqueInput;
};
export type servicesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where: Prisma.servicesWhereUniqueInput;
};
export type servicesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    cursor?: Prisma.servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
export type servicesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    cursor?: Prisma.servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
export type servicesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where?: Prisma.servicesWhereInput;
    orderBy?: Prisma.servicesOrderByWithRelationInput | Prisma.servicesOrderByWithRelationInput[];
    cursor?: Prisma.servicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicesScalarFieldEnum | Prisma.ServicesScalarFieldEnum[];
};
export type servicesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.servicesCreateInput, Prisma.servicesUncheckedCreateInput>;
};
export type servicesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.servicesCreateManyInput | Prisma.servicesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type servicesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    data: Prisma.servicesCreateManyInput | Prisma.servicesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type servicesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.servicesUpdateInput, Prisma.servicesUncheckedUpdateInput>;
    where: Prisma.servicesWhereUniqueInput;
};
export type servicesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.servicesUpdateManyMutationInput, Prisma.servicesUncheckedUpdateManyInput>;
    where?: Prisma.servicesWhereInput;
    limit?: number;
};
export type servicesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.servicesUpdateManyMutationInput, Prisma.servicesUncheckedUpdateManyInput>;
    where?: Prisma.servicesWhereInput;
    limit?: number;
};
export type servicesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where: Prisma.servicesWhereUniqueInput;
    create: Prisma.XOR<Prisma.servicesCreateInput, Prisma.servicesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.servicesUpdateInput, Prisma.servicesUncheckedUpdateInput>;
};
export type servicesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
    where: Prisma.servicesWhereUniqueInput;
};
export type servicesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.servicesWhereInput;
    limit?: number;
};
export type services$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type services$tasker_servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type servicesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.servicesSelect<ExtArgs> | null;
    omit?: Prisma.servicesOmit<ExtArgs> | null;
    include?: Prisma.servicesInclude<ExtArgs> | null;
};
