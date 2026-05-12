import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type spatial_ref_sysModel = runtime.Types.Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>;
export type AggregateSpatial_ref_sys = {
    _count: Spatial_ref_sysCountAggregateOutputType | null;
    _avg: Spatial_ref_sysAvgAggregateOutputType | null;
    _sum: Spatial_ref_sysSumAggregateOutputType | null;
    _min: Spatial_ref_sysMinAggregateOutputType | null;
    _max: Spatial_ref_sysMaxAggregateOutputType | null;
};
export type Spatial_ref_sysAvgAggregateOutputType = {
    srid: number | null;
    auth_srid: number | null;
};
export type Spatial_ref_sysSumAggregateOutputType = {
    srid: number | null;
    auth_srid: number | null;
};
export type Spatial_ref_sysMinAggregateOutputType = {
    srid: number | null;
    auth_name: string | null;
    auth_srid: number | null;
    srtext: string | null;
    proj4text: string | null;
};
export type Spatial_ref_sysMaxAggregateOutputType = {
    srid: number | null;
    auth_name: string | null;
    auth_srid: number | null;
    srtext: string | null;
    proj4text: string | null;
};
export type Spatial_ref_sysCountAggregateOutputType = {
    srid: number;
    auth_name: number;
    auth_srid: number;
    srtext: number;
    proj4text: number;
    _all: number;
};
export type Spatial_ref_sysAvgAggregateInputType = {
    srid?: true;
    auth_srid?: true;
};
export type Spatial_ref_sysSumAggregateInputType = {
    srid?: true;
    auth_srid?: true;
};
export type Spatial_ref_sysMinAggregateInputType = {
    srid?: true;
    auth_name?: true;
    auth_srid?: true;
    srtext?: true;
    proj4text?: true;
};
export type Spatial_ref_sysMaxAggregateInputType = {
    srid?: true;
    auth_name?: true;
    auth_srid?: true;
    srtext?: true;
    proj4text?: true;
};
export type Spatial_ref_sysCountAggregateInputType = {
    srid?: true;
    auth_name?: true;
    auth_srid?: true;
    srtext?: true;
    proj4text?: true;
    _all?: true;
};
export type Spatial_ref_sysAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.spatial_ref_sysWhereInput;
    orderBy?: Prisma.spatial_ref_sysOrderByWithRelationInput | Prisma.spatial_ref_sysOrderByWithRelationInput[];
    cursor?: Prisma.spatial_ref_sysWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Spatial_ref_sysCountAggregateInputType;
    _avg?: Spatial_ref_sysAvgAggregateInputType;
    _sum?: Spatial_ref_sysSumAggregateInputType;
    _min?: Spatial_ref_sysMinAggregateInputType;
    _max?: Spatial_ref_sysMaxAggregateInputType;
};
export type GetSpatial_ref_sysAggregateType<T extends Spatial_ref_sysAggregateArgs> = {
    [P in keyof T & keyof AggregateSpatial_ref_sys]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSpatial_ref_sys[P]> : Prisma.GetScalarType<T[P], AggregateSpatial_ref_sys[P]>;
};
export type spatial_ref_sysGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.spatial_ref_sysWhereInput;
    orderBy?: Prisma.spatial_ref_sysOrderByWithAggregationInput | Prisma.spatial_ref_sysOrderByWithAggregationInput[];
    by: Prisma.Spatial_ref_sysScalarFieldEnum[] | Prisma.Spatial_ref_sysScalarFieldEnum;
    having?: Prisma.spatial_ref_sysScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Spatial_ref_sysCountAggregateInputType | true;
    _avg?: Spatial_ref_sysAvgAggregateInputType;
    _sum?: Spatial_ref_sysSumAggregateInputType;
    _min?: Spatial_ref_sysMinAggregateInputType;
    _max?: Spatial_ref_sysMaxAggregateInputType;
};
export type Spatial_ref_sysGroupByOutputType = {
    srid: number;
    auth_name: string | null;
    auth_srid: number | null;
    srtext: string | null;
    proj4text: string | null;
    _count: Spatial_ref_sysCountAggregateOutputType | null;
    _avg: Spatial_ref_sysAvgAggregateOutputType | null;
    _sum: Spatial_ref_sysSumAggregateOutputType | null;
    _min: Spatial_ref_sysMinAggregateOutputType | null;
    _max: Spatial_ref_sysMaxAggregateOutputType | null;
};
export type GetSpatial_ref_sysGroupByPayload<T extends spatial_ref_sysGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Spatial_ref_sysGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Spatial_ref_sysGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>;
}>>;
export type spatial_ref_sysWhereInput = {
    AND?: Prisma.spatial_ref_sysWhereInput | Prisma.spatial_ref_sysWhereInput[];
    OR?: Prisma.spatial_ref_sysWhereInput[];
    NOT?: Prisma.spatial_ref_sysWhereInput | Prisma.spatial_ref_sysWhereInput[];
    srid?: Prisma.IntFilter<"spatial_ref_sys"> | number;
    auth_name?: Prisma.StringNullableFilter<"spatial_ref_sys"> | string | null;
    auth_srid?: Prisma.IntNullableFilter<"spatial_ref_sys"> | number | null;
    srtext?: Prisma.StringNullableFilter<"spatial_ref_sys"> | string | null;
    proj4text?: Prisma.StringNullableFilter<"spatial_ref_sys"> | string | null;
};
export type spatial_ref_sysOrderByWithRelationInput = {
    srid?: Prisma.SortOrder;
    auth_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    auth_srid?: Prisma.SortOrderInput | Prisma.SortOrder;
    srtext?: Prisma.SortOrderInput | Prisma.SortOrder;
    proj4text?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type spatial_ref_sysWhereUniqueInput = Prisma.AtLeast<{
    srid?: number;
    AND?: Prisma.spatial_ref_sysWhereInput | Prisma.spatial_ref_sysWhereInput[];
    OR?: Prisma.spatial_ref_sysWhereInput[];
    NOT?: Prisma.spatial_ref_sysWhereInput | Prisma.spatial_ref_sysWhereInput[];
    auth_name?: Prisma.StringNullableFilter<"spatial_ref_sys"> | string | null;
    auth_srid?: Prisma.IntNullableFilter<"spatial_ref_sys"> | number | null;
    srtext?: Prisma.StringNullableFilter<"spatial_ref_sys"> | string | null;
    proj4text?: Prisma.StringNullableFilter<"spatial_ref_sys"> | string | null;
}, "srid">;
export type spatial_ref_sysOrderByWithAggregationInput = {
    srid?: Prisma.SortOrder;
    auth_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    auth_srid?: Prisma.SortOrderInput | Prisma.SortOrder;
    srtext?: Prisma.SortOrderInput | Prisma.SortOrder;
    proj4text?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.spatial_ref_sysCountOrderByAggregateInput;
    _avg?: Prisma.spatial_ref_sysAvgOrderByAggregateInput;
    _max?: Prisma.spatial_ref_sysMaxOrderByAggregateInput;
    _min?: Prisma.spatial_ref_sysMinOrderByAggregateInput;
    _sum?: Prisma.spatial_ref_sysSumOrderByAggregateInput;
};
export type spatial_ref_sysScalarWhereWithAggregatesInput = {
    AND?: Prisma.spatial_ref_sysScalarWhereWithAggregatesInput | Prisma.spatial_ref_sysScalarWhereWithAggregatesInput[];
    OR?: Prisma.spatial_ref_sysScalarWhereWithAggregatesInput[];
    NOT?: Prisma.spatial_ref_sysScalarWhereWithAggregatesInput | Prisma.spatial_ref_sysScalarWhereWithAggregatesInput[];
    srid?: Prisma.IntWithAggregatesFilter<"spatial_ref_sys"> | number;
    auth_name?: Prisma.StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null;
    auth_srid?: Prisma.IntNullableWithAggregatesFilter<"spatial_ref_sys"> | number | null;
    srtext?: Prisma.StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null;
    proj4text?: Prisma.StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null;
};
export type spatial_ref_sysCreateInput = {
    srid: number;
    auth_name?: string | null;
    auth_srid?: number | null;
    srtext?: string | null;
    proj4text?: string | null;
};
export type spatial_ref_sysUncheckedCreateInput = {
    srid: number;
    auth_name?: string | null;
    auth_srid?: number | null;
    srtext?: string | null;
    proj4text?: string | null;
};
export type spatial_ref_sysUpdateInput = {
    srid?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    auth_srid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    srtext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proj4text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type spatial_ref_sysUncheckedUpdateInput = {
    srid?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    auth_srid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    srtext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proj4text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type spatial_ref_sysCreateManyInput = {
    srid: number;
    auth_name?: string | null;
    auth_srid?: number | null;
    srtext?: string | null;
    proj4text?: string | null;
};
export type spatial_ref_sysUpdateManyMutationInput = {
    srid?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    auth_srid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    srtext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proj4text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type spatial_ref_sysUncheckedUpdateManyInput = {
    srid?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    auth_srid?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    srtext?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proj4text?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type spatial_ref_sysCountOrderByAggregateInput = {
    srid?: Prisma.SortOrder;
    auth_name?: Prisma.SortOrder;
    auth_srid?: Prisma.SortOrder;
    srtext?: Prisma.SortOrder;
    proj4text?: Prisma.SortOrder;
};
export type spatial_ref_sysAvgOrderByAggregateInput = {
    srid?: Prisma.SortOrder;
    auth_srid?: Prisma.SortOrder;
};
export type spatial_ref_sysMaxOrderByAggregateInput = {
    srid?: Prisma.SortOrder;
    auth_name?: Prisma.SortOrder;
    auth_srid?: Prisma.SortOrder;
    srtext?: Prisma.SortOrder;
    proj4text?: Prisma.SortOrder;
};
export type spatial_ref_sysMinOrderByAggregateInput = {
    srid?: Prisma.SortOrder;
    auth_name?: Prisma.SortOrder;
    auth_srid?: Prisma.SortOrder;
    srtext?: Prisma.SortOrder;
    proj4text?: Prisma.SortOrder;
};
export type spatial_ref_sysSumOrderByAggregateInput = {
    srid?: Prisma.SortOrder;
    auth_srid?: Prisma.SortOrder;
};
export type spatial_ref_sysSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    srid?: boolean;
    auth_name?: boolean;
    auth_srid?: boolean;
    srtext?: boolean;
    proj4text?: boolean;
}, ExtArgs["result"]["spatial_ref_sys"]>;
export type spatial_ref_sysSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    srid?: boolean;
    auth_name?: boolean;
    auth_srid?: boolean;
    srtext?: boolean;
    proj4text?: boolean;
}, ExtArgs["result"]["spatial_ref_sys"]>;
export type spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    srid?: boolean;
    auth_name?: boolean;
    auth_srid?: boolean;
    srtext?: boolean;
    proj4text?: boolean;
}, ExtArgs["result"]["spatial_ref_sys"]>;
export type spatial_ref_sysSelectScalar = {
    srid?: boolean;
    auth_name?: boolean;
    auth_srid?: boolean;
    srtext?: boolean;
    proj4text?: boolean;
};
export type spatial_ref_sysOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"srid" | "auth_name" | "auth_srid" | "srtext" | "proj4text", ExtArgs["result"]["spatial_ref_sys"]>;
export type $spatial_ref_sysPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "spatial_ref_sys";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        srid: number;
        auth_name: string | null;
        auth_srid: number | null;
        srtext: string | null;
        proj4text: string | null;
    }, ExtArgs["result"]["spatial_ref_sys"]>;
    composites: {};
};
export type spatial_ref_sysGetPayload<S extends boolean | null | undefined | spatial_ref_sysDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload, S>;
export type spatial_ref_sysCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<spatial_ref_sysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Spatial_ref_sysCountAggregateInputType | true;
};
export interface spatial_ref_sysDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['spatial_ref_sys'];
        meta: {
            name: 'spatial_ref_sys';
        };
    };
    findUnique<T extends spatial_ref_sysFindUniqueArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends spatial_ref_sysFindFirstArgs>(args?: Prisma.SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends spatial_ref_sysFindManyArgs>(args?: Prisma.SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends spatial_ref_sysCreateArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends spatial_ref_sysCreateManyArgs>(args?: Prisma.SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends spatial_ref_sysCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends spatial_ref_sysDeleteArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends spatial_ref_sysUpdateArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends spatial_ref_sysDeleteManyArgs>(args?: Prisma.SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends spatial_ref_sysUpdateManyArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends spatial_ref_sysUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends spatial_ref_sysUpsertArgs>(args: Prisma.SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>): Prisma.Prisma__spatial_ref_sysClient<runtime.Types.Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends spatial_ref_sysCountArgs>(args?: Prisma.Subset<T, spatial_ref_sysCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Spatial_ref_sysCountAggregateOutputType> : number>;
    aggregate<T extends Spatial_ref_sysAggregateArgs>(args: Prisma.Subset<T, Spatial_ref_sysAggregateArgs>): Prisma.PrismaPromise<GetSpatial_ref_sysAggregateType<T>>;
    groupBy<T extends spatial_ref_sysGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: spatial_ref_sysGroupByArgs['orderBy'];
    } : {
        orderBy?: spatial_ref_sysGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, spatial_ref_sysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpatial_ref_sysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: spatial_ref_sysFieldRefs;
}
export interface Prisma__spatial_ref_sysClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface spatial_ref_sysFieldRefs {
    readonly srid: Prisma.FieldRef<"spatial_ref_sys", 'Int'>;
    readonly auth_name: Prisma.FieldRef<"spatial_ref_sys", 'String'>;
    readonly auth_srid: Prisma.FieldRef<"spatial_ref_sys", 'Int'>;
    readonly srtext: Prisma.FieldRef<"spatial_ref_sys", 'String'>;
    readonly proj4text: Prisma.FieldRef<"spatial_ref_sys", 'String'>;
}
export type spatial_ref_sysFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where: Prisma.spatial_ref_sysWhereUniqueInput;
};
export type spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where: Prisma.spatial_ref_sysWhereUniqueInput;
};
export type spatial_ref_sysFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where?: Prisma.spatial_ref_sysWhereInput;
    orderBy?: Prisma.spatial_ref_sysOrderByWithRelationInput | Prisma.spatial_ref_sysOrderByWithRelationInput[];
    cursor?: Prisma.spatial_ref_sysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Spatial_ref_sysScalarFieldEnum | Prisma.Spatial_ref_sysScalarFieldEnum[];
};
export type spatial_ref_sysFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where?: Prisma.spatial_ref_sysWhereInput;
    orderBy?: Prisma.spatial_ref_sysOrderByWithRelationInput | Prisma.spatial_ref_sysOrderByWithRelationInput[];
    cursor?: Prisma.spatial_ref_sysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Spatial_ref_sysScalarFieldEnum | Prisma.Spatial_ref_sysScalarFieldEnum[];
};
export type spatial_ref_sysFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where?: Prisma.spatial_ref_sysWhereInput;
    orderBy?: Prisma.spatial_ref_sysOrderByWithRelationInput | Prisma.spatial_ref_sysOrderByWithRelationInput[];
    cursor?: Prisma.spatial_ref_sysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Spatial_ref_sysScalarFieldEnum | Prisma.Spatial_ref_sysScalarFieldEnum[];
};
export type spatial_ref_sysCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.spatial_ref_sysCreateInput, Prisma.spatial_ref_sysUncheckedCreateInput>;
};
export type spatial_ref_sysCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.spatial_ref_sysCreateManyInput | Prisma.spatial_ref_sysCreateManyInput[];
    skipDuplicates?: boolean;
};
export type spatial_ref_sysCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    data: Prisma.spatial_ref_sysCreateManyInput | Prisma.spatial_ref_sysCreateManyInput[];
    skipDuplicates?: boolean;
};
export type spatial_ref_sysUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.spatial_ref_sysUpdateInput, Prisma.spatial_ref_sysUncheckedUpdateInput>;
    where: Prisma.spatial_ref_sysWhereUniqueInput;
};
export type spatial_ref_sysUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.spatial_ref_sysUpdateManyMutationInput, Prisma.spatial_ref_sysUncheckedUpdateManyInput>;
    where?: Prisma.spatial_ref_sysWhereInput;
    limit?: number;
};
export type spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.spatial_ref_sysUpdateManyMutationInput, Prisma.spatial_ref_sysUncheckedUpdateManyInput>;
    where?: Prisma.spatial_ref_sysWhereInput;
    limit?: number;
};
export type spatial_ref_sysUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where: Prisma.spatial_ref_sysWhereUniqueInput;
    create: Prisma.XOR<Prisma.spatial_ref_sysCreateInput, Prisma.spatial_ref_sysUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.spatial_ref_sysUpdateInput, Prisma.spatial_ref_sysUncheckedUpdateInput>;
};
export type spatial_ref_sysDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
    where: Prisma.spatial_ref_sysWhereUniqueInput;
};
export type spatial_ref_sysDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.spatial_ref_sysWhereInput;
    limit?: number;
};
export type spatial_ref_sysDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.spatial_ref_sysSelect<ExtArgs> | null;
    omit?: Prisma.spatial_ref_sysOmit<ExtArgs> | null;
};
