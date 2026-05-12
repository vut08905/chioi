import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type family_packagesModel = runtime.Types.Result.DefaultSelection<Prisma.$family_packagesPayload>;
export type AggregateFamily_packages = {
    _count: Family_packagesCountAggregateOutputType | null;
    _avg: Family_packagesAvgAggregateOutputType | null;
    _sum: Family_packagesSumAggregateOutputType | null;
    _min: Family_packagesMinAggregateOutputType | null;
    _max: Family_packagesMaxAggregateOutputType | null;
};
export type Family_packagesAvgAggregateOutputType = {
    package_id: number | null;
    price: runtime.Decimal | null;
    duration_days: number | null;
};
export type Family_packagesSumAggregateOutputType = {
    package_id: number | null;
    price: runtime.Decimal | null;
    duration_days: number | null;
};
export type Family_packagesMinAggregateOutputType = {
    package_id: number | null;
    name: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    duration_days: number | null;
    is_active: boolean | null;
};
export type Family_packagesMaxAggregateOutputType = {
    package_id: number | null;
    name: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    duration_days: number | null;
    is_active: boolean | null;
};
export type Family_packagesCountAggregateOutputType = {
    package_id: number;
    name: number;
    description: number;
    price: number;
    duration_days: number;
    is_active: number;
    _all: number;
};
export type Family_packagesAvgAggregateInputType = {
    package_id?: true;
    price?: true;
    duration_days?: true;
};
export type Family_packagesSumAggregateInputType = {
    package_id?: true;
    price?: true;
    duration_days?: true;
};
export type Family_packagesMinAggregateInputType = {
    package_id?: true;
    name?: true;
    description?: true;
    price?: true;
    duration_days?: true;
    is_active?: true;
};
export type Family_packagesMaxAggregateInputType = {
    package_id?: true;
    name?: true;
    description?: true;
    price?: true;
    duration_days?: true;
    is_active?: true;
};
export type Family_packagesCountAggregateInputType = {
    package_id?: true;
    name?: true;
    description?: true;
    price?: true;
    duration_days?: true;
    is_active?: true;
    _all?: true;
};
export type Family_packagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.family_packagesWhereInput;
    orderBy?: Prisma.family_packagesOrderByWithRelationInput | Prisma.family_packagesOrderByWithRelationInput[];
    cursor?: Prisma.family_packagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Family_packagesCountAggregateInputType;
    _avg?: Family_packagesAvgAggregateInputType;
    _sum?: Family_packagesSumAggregateInputType;
    _min?: Family_packagesMinAggregateInputType;
    _max?: Family_packagesMaxAggregateInputType;
};
export type GetFamily_packagesAggregateType<T extends Family_packagesAggregateArgs> = {
    [P in keyof T & keyof AggregateFamily_packages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFamily_packages[P]> : Prisma.GetScalarType<T[P], AggregateFamily_packages[P]>;
};
export type family_packagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.family_packagesWhereInput;
    orderBy?: Prisma.family_packagesOrderByWithAggregationInput | Prisma.family_packagesOrderByWithAggregationInput[];
    by: Prisma.Family_packagesScalarFieldEnum[] | Prisma.Family_packagesScalarFieldEnum;
    having?: Prisma.family_packagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Family_packagesCountAggregateInputType | true;
    _avg?: Family_packagesAvgAggregateInputType;
    _sum?: Family_packagesSumAggregateInputType;
    _min?: Family_packagesMinAggregateInputType;
    _max?: Family_packagesMaxAggregateInputType;
};
export type Family_packagesGroupByOutputType = {
    package_id: number;
    name: string;
    description: string | null;
    price: runtime.Decimal;
    duration_days: number | null;
    is_active: boolean | null;
    _count: Family_packagesCountAggregateOutputType | null;
    _avg: Family_packagesAvgAggregateOutputType | null;
    _sum: Family_packagesSumAggregateOutputType | null;
    _min: Family_packagesMinAggregateOutputType | null;
    _max: Family_packagesMaxAggregateOutputType | null;
};
export type GetFamily_packagesGroupByPayload<T extends family_packagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Family_packagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Family_packagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Family_packagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Family_packagesGroupByOutputType[P]>;
}>>;
export type family_packagesWhereInput = {
    AND?: Prisma.family_packagesWhereInput | Prisma.family_packagesWhereInput[];
    OR?: Prisma.family_packagesWhereInput[];
    NOT?: Prisma.family_packagesWhereInput | Prisma.family_packagesWhereInput[];
    package_id?: Prisma.IntFilter<"family_packages"> | number;
    name?: Prisma.StringFilter<"family_packages"> | string;
    description?: Prisma.StringNullableFilter<"family_packages"> | string | null;
    price?: Prisma.DecimalFilter<"family_packages"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.IntNullableFilter<"family_packages"> | number | null;
    is_active?: Prisma.BoolNullableFilter<"family_packages"> | boolean | null;
    customer_packages?: Prisma.Customer_packagesListRelationFilter;
};
export type family_packagesOrderByWithRelationInput = {
    package_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    customer_packages?: Prisma.customer_packagesOrderByRelationAggregateInput;
};
export type family_packagesWhereUniqueInput = Prisma.AtLeast<{
    package_id?: number;
    AND?: Prisma.family_packagesWhereInput | Prisma.family_packagesWhereInput[];
    OR?: Prisma.family_packagesWhereInput[];
    NOT?: Prisma.family_packagesWhereInput | Prisma.family_packagesWhereInput[];
    name?: Prisma.StringFilter<"family_packages"> | string;
    description?: Prisma.StringNullableFilter<"family_packages"> | string | null;
    price?: Prisma.DecimalFilter<"family_packages"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.IntNullableFilter<"family_packages"> | number | null;
    is_active?: Prisma.BoolNullableFilter<"family_packages"> | boolean | null;
    customer_packages?: Prisma.Customer_packagesListRelationFilter;
}, "package_id">;
export type family_packagesOrderByWithAggregationInput = {
    package_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.family_packagesCountOrderByAggregateInput;
    _avg?: Prisma.family_packagesAvgOrderByAggregateInput;
    _max?: Prisma.family_packagesMaxOrderByAggregateInput;
    _min?: Prisma.family_packagesMinOrderByAggregateInput;
    _sum?: Prisma.family_packagesSumOrderByAggregateInput;
};
export type family_packagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.family_packagesScalarWhereWithAggregatesInput | Prisma.family_packagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.family_packagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.family_packagesScalarWhereWithAggregatesInput | Prisma.family_packagesScalarWhereWithAggregatesInput[];
    package_id?: Prisma.IntWithAggregatesFilter<"family_packages"> | number;
    name?: Prisma.StringWithAggregatesFilter<"family_packages"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"family_packages"> | string | null;
    price?: Prisma.DecimalWithAggregatesFilter<"family_packages"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.IntNullableWithAggregatesFilter<"family_packages"> | number | null;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"family_packages"> | boolean | null;
};
export type family_packagesCreateInput = {
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: number | null;
    is_active?: boolean | null;
    customer_packages?: Prisma.customer_packagesCreateNestedManyWithoutFamily_packagesInput;
};
export type family_packagesUncheckedCreateInput = {
    package_id?: number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: number | null;
    is_active?: boolean | null;
    customer_packages?: Prisma.customer_packagesUncheckedCreateNestedManyWithoutFamily_packagesInput;
};
export type family_packagesUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customer_packages?: Prisma.customer_packagesUpdateManyWithoutFamily_packagesNestedInput;
};
export type family_packagesUncheckedUpdateInput = {
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    customer_packages?: Prisma.customer_packagesUncheckedUpdateManyWithoutFamily_packagesNestedInput;
};
export type family_packagesCreateManyInput = {
    package_id?: number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: number | null;
    is_active?: boolean | null;
};
export type family_packagesUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type family_packagesUncheckedUpdateManyInput = {
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type Family_packagesScalarRelationFilter = {
    is?: Prisma.family_packagesWhereInput;
    isNot?: Prisma.family_packagesWhereInput;
};
export type family_packagesCountOrderByAggregateInput = {
    package_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type family_packagesAvgOrderByAggregateInput = {
    package_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrder;
};
export type family_packagesMaxOrderByAggregateInput = {
    package_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type family_packagesMinOrderByAggregateInput = {
    package_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type family_packagesSumOrderByAggregateInput = {
    package_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    duration_days?: Prisma.SortOrder;
};
export type family_packagesCreateNestedOneWithoutCustomer_packagesInput = {
    create?: Prisma.XOR<Prisma.family_packagesCreateWithoutCustomer_packagesInput, Prisma.family_packagesUncheckedCreateWithoutCustomer_packagesInput>;
    connectOrCreate?: Prisma.family_packagesCreateOrConnectWithoutCustomer_packagesInput;
    connect?: Prisma.family_packagesWhereUniqueInput;
};
export type family_packagesUpdateOneRequiredWithoutCustomer_packagesNestedInput = {
    create?: Prisma.XOR<Prisma.family_packagesCreateWithoutCustomer_packagesInput, Prisma.family_packagesUncheckedCreateWithoutCustomer_packagesInput>;
    connectOrCreate?: Prisma.family_packagesCreateOrConnectWithoutCustomer_packagesInput;
    upsert?: Prisma.family_packagesUpsertWithoutCustomer_packagesInput;
    connect?: Prisma.family_packagesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.family_packagesUpdateToOneWithWhereWithoutCustomer_packagesInput, Prisma.family_packagesUpdateWithoutCustomer_packagesInput>, Prisma.family_packagesUncheckedUpdateWithoutCustomer_packagesInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type family_packagesCreateWithoutCustomer_packagesInput = {
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: number | null;
    is_active?: boolean | null;
};
export type family_packagesUncheckedCreateWithoutCustomer_packagesInput = {
    package_id?: number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: number | null;
    is_active?: boolean | null;
};
export type family_packagesCreateOrConnectWithoutCustomer_packagesInput = {
    where: Prisma.family_packagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.family_packagesCreateWithoutCustomer_packagesInput, Prisma.family_packagesUncheckedCreateWithoutCustomer_packagesInput>;
};
export type family_packagesUpsertWithoutCustomer_packagesInput = {
    update: Prisma.XOR<Prisma.family_packagesUpdateWithoutCustomer_packagesInput, Prisma.family_packagesUncheckedUpdateWithoutCustomer_packagesInput>;
    create: Prisma.XOR<Prisma.family_packagesCreateWithoutCustomer_packagesInput, Prisma.family_packagesUncheckedCreateWithoutCustomer_packagesInput>;
    where?: Prisma.family_packagesWhereInput;
};
export type family_packagesUpdateToOneWithWhereWithoutCustomer_packagesInput = {
    where?: Prisma.family_packagesWhereInput;
    data: Prisma.XOR<Prisma.family_packagesUpdateWithoutCustomer_packagesInput, Prisma.family_packagesUncheckedUpdateWithoutCustomer_packagesInput>;
};
export type family_packagesUpdateWithoutCustomer_packagesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type family_packagesUncheckedUpdateWithoutCustomer_packagesInput = {
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duration_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type Family_packagesCountOutputType = {
    customer_packages: number;
};
export type Family_packagesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer_packages?: boolean | Family_packagesCountOutputTypeCountCustomer_packagesArgs;
};
export type Family_packagesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Family_packagesCountOutputTypeSelect<ExtArgs> | null;
};
export type Family_packagesCountOutputTypeCountCustomer_packagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_packagesWhereInput;
};
export type family_packagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    package_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    duration_days?: boolean;
    is_active?: boolean;
    customer_packages?: boolean | Prisma.family_packages$customer_packagesArgs<ExtArgs>;
    _count?: boolean | Prisma.Family_packagesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["family_packages"]>;
export type family_packagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    package_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    duration_days?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["family_packages"]>;
export type family_packagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    package_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    duration_days?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["family_packages"]>;
export type family_packagesSelectScalar = {
    package_id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    duration_days?: boolean;
    is_active?: boolean;
};
export type family_packagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"package_id" | "name" | "description" | "price" | "duration_days" | "is_active", ExtArgs["result"]["family_packages"]>;
export type family_packagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer_packages?: boolean | Prisma.family_packages$customer_packagesArgs<ExtArgs>;
    _count?: boolean | Prisma.Family_packagesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type family_packagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type family_packagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $family_packagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "family_packages";
    objects: {
        customer_packages: Prisma.$customer_packagesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        package_id: number;
        name: string;
        description: string | null;
        price: runtime.Decimal;
        duration_days: number | null;
        is_active: boolean | null;
    }, ExtArgs["result"]["family_packages"]>;
    composites: {};
};
export type family_packagesGetPayload<S extends boolean | null | undefined | family_packagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$family_packagesPayload, S>;
export type family_packagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<family_packagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Family_packagesCountAggregateInputType | true;
};
export interface family_packagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['family_packages'];
        meta: {
            name: 'family_packages';
        };
    };
    findUnique<T extends family_packagesFindUniqueArgs>(args: Prisma.SelectSubset<T, family_packagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends family_packagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, family_packagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends family_packagesFindFirstArgs>(args?: Prisma.SelectSubset<T, family_packagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends family_packagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, family_packagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends family_packagesFindManyArgs>(args?: Prisma.SelectSubset<T, family_packagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends family_packagesCreateArgs>(args: Prisma.SelectSubset<T, family_packagesCreateArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends family_packagesCreateManyArgs>(args?: Prisma.SelectSubset<T, family_packagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends family_packagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, family_packagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends family_packagesDeleteArgs>(args: Prisma.SelectSubset<T, family_packagesDeleteArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends family_packagesUpdateArgs>(args: Prisma.SelectSubset<T, family_packagesUpdateArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends family_packagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, family_packagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends family_packagesUpdateManyArgs>(args: Prisma.SelectSubset<T, family_packagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends family_packagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, family_packagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends family_packagesUpsertArgs>(args: Prisma.SelectSubset<T, family_packagesUpsertArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends family_packagesCountArgs>(args?: Prisma.Subset<T, family_packagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Family_packagesCountAggregateOutputType> : number>;
    aggregate<T extends Family_packagesAggregateArgs>(args: Prisma.Subset<T, Family_packagesAggregateArgs>): Prisma.PrismaPromise<GetFamily_packagesAggregateType<T>>;
    groupBy<T extends family_packagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: family_packagesGroupByArgs['orderBy'];
    } : {
        orderBy?: family_packagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, family_packagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamily_packagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: family_packagesFieldRefs;
}
export interface Prisma__family_packagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer_packages<T extends Prisma.family_packages$customer_packagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.family_packages$customer_packagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface family_packagesFieldRefs {
    readonly package_id: Prisma.FieldRef<"family_packages", 'Int'>;
    readonly name: Prisma.FieldRef<"family_packages", 'String'>;
    readonly description: Prisma.FieldRef<"family_packages", 'String'>;
    readonly price: Prisma.FieldRef<"family_packages", 'Decimal'>;
    readonly duration_days: Prisma.FieldRef<"family_packages", 'Int'>;
    readonly is_active: Prisma.FieldRef<"family_packages", 'Boolean'>;
}
export type family_packagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where: Prisma.family_packagesWhereUniqueInput;
};
export type family_packagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where: Prisma.family_packagesWhereUniqueInput;
};
export type family_packagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where?: Prisma.family_packagesWhereInput;
    orderBy?: Prisma.family_packagesOrderByWithRelationInput | Prisma.family_packagesOrderByWithRelationInput[];
    cursor?: Prisma.family_packagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Family_packagesScalarFieldEnum | Prisma.Family_packagesScalarFieldEnum[];
};
export type family_packagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where?: Prisma.family_packagesWhereInput;
    orderBy?: Prisma.family_packagesOrderByWithRelationInput | Prisma.family_packagesOrderByWithRelationInput[];
    cursor?: Prisma.family_packagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Family_packagesScalarFieldEnum | Prisma.Family_packagesScalarFieldEnum[];
};
export type family_packagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where?: Prisma.family_packagesWhereInput;
    orderBy?: Prisma.family_packagesOrderByWithRelationInput | Prisma.family_packagesOrderByWithRelationInput[];
    cursor?: Prisma.family_packagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Family_packagesScalarFieldEnum | Prisma.Family_packagesScalarFieldEnum[];
};
export type family_packagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.family_packagesCreateInput, Prisma.family_packagesUncheckedCreateInput>;
};
export type family_packagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.family_packagesCreateManyInput | Prisma.family_packagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type family_packagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    data: Prisma.family_packagesCreateManyInput | Prisma.family_packagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type family_packagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.family_packagesUpdateInput, Prisma.family_packagesUncheckedUpdateInput>;
    where: Prisma.family_packagesWhereUniqueInput;
};
export type family_packagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.family_packagesUpdateManyMutationInput, Prisma.family_packagesUncheckedUpdateManyInput>;
    where?: Prisma.family_packagesWhereInput;
    limit?: number;
};
export type family_packagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.family_packagesUpdateManyMutationInput, Prisma.family_packagesUncheckedUpdateManyInput>;
    where?: Prisma.family_packagesWhereInput;
    limit?: number;
};
export type family_packagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where: Prisma.family_packagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.family_packagesCreateInput, Prisma.family_packagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.family_packagesUpdateInput, Prisma.family_packagesUncheckedUpdateInput>;
};
export type family_packagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
    where: Prisma.family_packagesWhereUniqueInput;
};
export type family_packagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.family_packagesWhereInput;
    limit?: number;
};
export type family_packages$customer_packagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    where?: Prisma.customer_packagesWhereInput;
    orderBy?: Prisma.customer_packagesOrderByWithRelationInput | Prisma.customer_packagesOrderByWithRelationInput[];
    cursor?: Prisma.customer_packagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_packagesScalarFieldEnum | Prisma.Customer_packagesScalarFieldEnum[];
};
export type family_packagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.family_packagesSelect<ExtArgs> | null;
    omit?: Prisma.family_packagesOmit<ExtArgs> | null;
    include?: Prisma.family_packagesInclude<ExtArgs> | null;
};
