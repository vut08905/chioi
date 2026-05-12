import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customer_packagesModel = runtime.Types.Result.DefaultSelection<Prisma.$customer_packagesPayload>;
export type AggregateCustomer_packages = {
    _count: Customer_packagesCountAggregateOutputType | null;
    _avg: Customer_packagesAvgAggregateOutputType | null;
    _sum: Customer_packagesSumAggregateOutputType | null;
    _min: Customer_packagesMinAggregateOutputType | null;
    _max: Customer_packagesMaxAggregateOutputType | null;
};
export type Customer_packagesAvgAggregateOutputType = {
    customer_package_id: number | null;
    customer_id: number | null;
    package_id: number | null;
};
export type Customer_packagesSumAggregateOutputType = {
    customer_package_id: number | null;
    customer_id: number | null;
    package_id: number | null;
};
export type Customer_packagesMinAggregateOutputType = {
    customer_package_id: number | null;
    customer_id: number | null;
    package_id: number | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    created_at: Date | null;
};
export type Customer_packagesMaxAggregateOutputType = {
    customer_package_id: number | null;
    customer_id: number | null;
    package_id: number | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    created_at: Date | null;
};
export type Customer_packagesCountAggregateOutputType = {
    customer_package_id: number;
    customer_id: number;
    package_id: number;
    start_date: number;
    end_date: number;
    status: number;
    created_at: number;
    _all: number;
};
export type Customer_packagesAvgAggregateInputType = {
    customer_package_id?: true;
    customer_id?: true;
    package_id?: true;
};
export type Customer_packagesSumAggregateInputType = {
    customer_package_id?: true;
    customer_id?: true;
    package_id?: true;
};
export type Customer_packagesMinAggregateInputType = {
    customer_package_id?: true;
    customer_id?: true;
    package_id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
};
export type Customer_packagesMaxAggregateInputType = {
    customer_package_id?: true;
    customer_id?: true;
    package_id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
};
export type Customer_packagesCountAggregateInputType = {
    customer_package_id?: true;
    customer_id?: true;
    package_id?: true;
    start_date?: true;
    end_date?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type Customer_packagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_packagesWhereInput;
    orderBy?: Prisma.customer_packagesOrderByWithRelationInput | Prisma.customer_packagesOrderByWithRelationInput[];
    cursor?: Prisma.customer_packagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Customer_packagesCountAggregateInputType;
    _avg?: Customer_packagesAvgAggregateInputType;
    _sum?: Customer_packagesSumAggregateInputType;
    _min?: Customer_packagesMinAggregateInputType;
    _max?: Customer_packagesMaxAggregateInputType;
};
export type GetCustomer_packagesAggregateType<T extends Customer_packagesAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer_packages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer_packages[P]> : Prisma.GetScalarType<T[P], AggregateCustomer_packages[P]>;
};
export type customer_packagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_packagesWhereInput;
    orderBy?: Prisma.customer_packagesOrderByWithAggregationInput | Prisma.customer_packagesOrderByWithAggregationInput[];
    by: Prisma.Customer_packagesScalarFieldEnum[] | Prisma.Customer_packagesScalarFieldEnum;
    having?: Prisma.customer_packagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Customer_packagesCountAggregateInputType | true;
    _avg?: Customer_packagesAvgAggregateInputType;
    _sum?: Customer_packagesSumAggregateInputType;
    _min?: Customer_packagesMinAggregateInputType;
    _max?: Customer_packagesMaxAggregateInputType;
};
export type Customer_packagesGroupByOutputType = {
    customer_package_id: number;
    customer_id: number;
    package_id: number;
    start_date: Date;
    end_date: Date;
    status: string | null;
    created_at: Date | null;
    _count: Customer_packagesCountAggregateOutputType | null;
    _avg: Customer_packagesAvgAggregateOutputType | null;
    _sum: Customer_packagesSumAggregateOutputType | null;
    _min: Customer_packagesMinAggregateOutputType | null;
    _max: Customer_packagesMaxAggregateOutputType | null;
};
export type GetCustomer_packagesGroupByPayload<T extends customer_packagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Customer_packagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Customer_packagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Customer_packagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Customer_packagesGroupByOutputType[P]>;
}>>;
export type customer_packagesWhereInput = {
    AND?: Prisma.customer_packagesWhereInput | Prisma.customer_packagesWhereInput[];
    OR?: Prisma.customer_packagesWhereInput[];
    NOT?: Prisma.customer_packagesWhereInput | Prisma.customer_packagesWhereInput[];
    customer_package_id?: Prisma.IntFilter<"customer_packages"> | number;
    customer_id?: Prisma.IntFilter<"customer_packages"> | number;
    package_id?: Prisma.IntFilter<"customer_packages"> | number;
    start_date?: Prisma.DateTimeFilter<"customer_packages"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"customer_packages"> | Date | string;
    status?: Prisma.StringNullableFilter<"customer_packages"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"customer_packages"> | Date | string | null;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    family_packages?: Prisma.XOR<Prisma.Family_packagesScalarRelationFilter, Prisma.family_packagesWhereInput>;
};
export type customer_packagesOrderByWithRelationInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    customers?: Prisma.customersOrderByWithRelationInput;
    family_packages?: Prisma.family_packagesOrderByWithRelationInput;
};
export type customer_packagesWhereUniqueInput = Prisma.AtLeast<{
    customer_package_id?: number;
    AND?: Prisma.customer_packagesWhereInput | Prisma.customer_packagesWhereInput[];
    OR?: Prisma.customer_packagesWhereInput[];
    NOT?: Prisma.customer_packagesWhereInput | Prisma.customer_packagesWhereInput[];
    customer_id?: Prisma.IntFilter<"customer_packages"> | number;
    package_id?: Prisma.IntFilter<"customer_packages"> | number;
    start_date?: Prisma.DateTimeFilter<"customer_packages"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"customer_packages"> | Date | string;
    status?: Prisma.StringNullableFilter<"customer_packages"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"customer_packages"> | Date | string | null;
    customers?: Prisma.XOR<Prisma.CustomersScalarRelationFilter, Prisma.customersWhereInput>;
    family_packages?: Prisma.XOR<Prisma.Family_packagesScalarRelationFilter, Prisma.family_packagesWhereInput>;
}, "customer_package_id">;
export type customer_packagesOrderByWithAggregationInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.customer_packagesCountOrderByAggregateInput;
    _avg?: Prisma.customer_packagesAvgOrderByAggregateInput;
    _max?: Prisma.customer_packagesMaxOrderByAggregateInput;
    _min?: Prisma.customer_packagesMinOrderByAggregateInput;
    _sum?: Prisma.customer_packagesSumOrderByAggregateInput;
};
export type customer_packagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.customer_packagesScalarWhereWithAggregatesInput | Prisma.customer_packagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.customer_packagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customer_packagesScalarWhereWithAggregatesInput | Prisma.customer_packagesScalarWhereWithAggregatesInput[];
    customer_package_id?: Prisma.IntWithAggregatesFilter<"customer_packages"> | number;
    customer_id?: Prisma.IntWithAggregatesFilter<"customer_packages"> | number;
    package_id?: Prisma.IntWithAggregatesFilter<"customer_packages"> | number;
    start_date?: Prisma.DateTimeWithAggregatesFilter<"customer_packages"> | Date | string;
    end_date?: Prisma.DateTimeWithAggregatesFilter<"customer_packages"> | Date | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"customer_packages"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"customer_packages"> | Date | string | null;
};
export type customer_packagesCreateInput = {
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
    customers: Prisma.customersCreateNestedOneWithoutCustomer_packagesInput;
    family_packages: Prisma.family_packagesCreateNestedOneWithoutCustomer_packagesInput;
};
export type customer_packagesUncheckedCreateInput = {
    customer_package_id?: number;
    customer_id: number;
    package_id: number;
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
};
export type customer_packagesUpdateInput = {
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneRequiredWithoutCustomer_packagesNestedInput;
    family_packages?: Prisma.family_packagesUpdateOneRequiredWithoutCustomer_packagesNestedInput;
};
export type customer_packagesUncheckedUpdateInput = {
    customer_package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesCreateManyInput = {
    customer_package_id?: number;
    customer_id: number;
    package_id: number;
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
};
export type customer_packagesUpdateManyMutationInput = {
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesUncheckedUpdateManyInput = {
    customer_package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesCountOrderByAggregateInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customer_packagesAvgOrderByAggregateInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
};
export type customer_packagesMaxOrderByAggregateInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customer_packagesMinOrderByAggregateInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customer_packagesSumOrderByAggregateInput = {
    customer_package_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    package_id?: Prisma.SortOrder;
};
export type Customer_packagesListRelationFilter = {
    every?: Prisma.customer_packagesWhereInput;
    some?: Prisma.customer_packagesWhereInput;
    none?: Prisma.customer_packagesWhereInput;
};
export type customer_packagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type customer_packagesCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutCustomersInput, Prisma.customer_packagesUncheckedCreateWithoutCustomersInput> | Prisma.customer_packagesCreateWithoutCustomersInput[] | Prisma.customer_packagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutCustomersInput | Prisma.customer_packagesCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.customer_packagesCreateManyCustomersInputEnvelope;
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
};
export type customer_packagesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutCustomersInput, Prisma.customer_packagesUncheckedCreateWithoutCustomersInput> | Prisma.customer_packagesCreateWithoutCustomersInput[] | Prisma.customer_packagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutCustomersInput | Prisma.customer_packagesCreateOrConnectWithoutCustomersInput[];
    createMany?: Prisma.customer_packagesCreateManyCustomersInputEnvelope;
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
};
export type customer_packagesUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutCustomersInput, Prisma.customer_packagesUncheckedCreateWithoutCustomersInput> | Prisma.customer_packagesCreateWithoutCustomersInput[] | Prisma.customer_packagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutCustomersInput | Prisma.customer_packagesCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.customer_packagesUpsertWithWhereUniqueWithoutCustomersInput | Prisma.customer_packagesUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.customer_packagesCreateManyCustomersInputEnvelope;
    set?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    disconnect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    delete?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    update?: Prisma.customer_packagesUpdateWithWhereUniqueWithoutCustomersInput | Prisma.customer_packagesUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.customer_packagesUpdateManyWithWhereWithoutCustomersInput | Prisma.customer_packagesUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.customer_packagesScalarWhereInput | Prisma.customer_packagesScalarWhereInput[];
};
export type customer_packagesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutCustomersInput, Prisma.customer_packagesUncheckedCreateWithoutCustomersInput> | Prisma.customer_packagesCreateWithoutCustomersInput[] | Prisma.customer_packagesUncheckedCreateWithoutCustomersInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutCustomersInput | Prisma.customer_packagesCreateOrConnectWithoutCustomersInput[];
    upsert?: Prisma.customer_packagesUpsertWithWhereUniqueWithoutCustomersInput | Prisma.customer_packagesUpsertWithWhereUniqueWithoutCustomersInput[];
    createMany?: Prisma.customer_packagesCreateManyCustomersInputEnvelope;
    set?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    disconnect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    delete?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    update?: Prisma.customer_packagesUpdateWithWhereUniqueWithoutCustomersInput | Prisma.customer_packagesUpdateWithWhereUniqueWithoutCustomersInput[];
    updateMany?: Prisma.customer_packagesUpdateManyWithWhereWithoutCustomersInput | Prisma.customer_packagesUpdateManyWithWhereWithoutCustomersInput[];
    deleteMany?: Prisma.customer_packagesScalarWhereInput | Prisma.customer_packagesScalarWhereInput[];
};
export type customer_packagesCreateNestedManyWithoutFamily_packagesInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput> | Prisma.customer_packagesCreateWithoutFamily_packagesInput[] | Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput | Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput[];
    createMany?: Prisma.customer_packagesCreateManyFamily_packagesInputEnvelope;
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
};
export type customer_packagesUncheckedCreateNestedManyWithoutFamily_packagesInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput> | Prisma.customer_packagesCreateWithoutFamily_packagesInput[] | Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput | Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput[];
    createMany?: Prisma.customer_packagesCreateManyFamily_packagesInputEnvelope;
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
};
export type customer_packagesUpdateManyWithoutFamily_packagesNestedInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput> | Prisma.customer_packagesCreateWithoutFamily_packagesInput[] | Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput | Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput[];
    upsert?: Prisma.customer_packagesUpsertWithWhereUniqueWithoutFamily_packagesInput | Prisma.customer_packagesUpsertWithWhereUniqueWithoutFamily_packagesInput[];
    createMany?: Prisma.customer_packagesCreateManyFamily_packagesInputEnvelope;
    set?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    disconnect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    delete?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    update?: Prisma.customer_packagesUpdateWithWhereUniqueWithoutFamily_packagesInput | Prisma.customer_packagesUpdateWithWhereUniqueWithoutFamily_packagesInput[];
    updateMany?: Prisma.customer_packagesUpdateManyWithWhereWithoutFamily_packagesInput | Prisma.customer_packagesUpdateManyWithWhereWithoutFamily_packagesInput[];
    deleteMany?: Prisma.customer_packagesScalarWhereInput | Prisma.customer_packagesScalarWhereInput[];
};
export type customer_packagesUncheckedUpdateManyWithoutFamily_packagesNestedInput = {
    create?: Prisma.XOR<Prisma.customer_packagesCreateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput> | Prisma.customer_packagesCreateWithoutFamily_packagesInput[] | Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput[];
    connectOrCreate?: Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput | Prisma.customer_packagesCreateOrConnectWithoutFamily_packagesInput[];
    upsert?: Prisma.customer_packagesUpsertWithWhereUniqueWithoutFamily_packagesInput | Prisma.customer_packagesUpsertWithWhereUniqueWithoutFamily_packagesInput[];
    createMany?: Prisma.customer_packagesCreateManyFamily_packagesInputEnvelope;
    set?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    disconnect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    delete?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    connect?: Prisma.customer_packagesWhereUniqueInput | Prisma.customer_packagesWhereUniqueInput[];
    update?: Prisma.customer_packagesUpdateWithWhereUniqueWithoutFamily_packagesInput | Prisma.customer_packagesUpdateWithWhereUniqueWithoutFamily_packagesInput[];
    updateMany?: Prisma.customer_packagesUpdateManyWithWhereWithoutFamily_packagesInput | Prisma.customer_packagesUpdateManyWithWhereWithoutFamily_packagesInput[];
    deleteMany?: Prisma.customer_packagesScalarWhereInput | Prisma.customer_packagesScalarWhereInput[];
};
export type customer_packagesCreateWithoutCustomersInput = {
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
    family_packages: Prisma.family_packagesCreateNestedOneWithoutCustomer_packagesInput;
};
export type customer_packagesUncheckedCreateWithoutCustomersInput = {
    customer_package_id?: number;
    package_id: number;
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
};
export type customer_packagesCreateOrConnectWithoutCustomersInput = {
    where: Prisma.customer_packagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_packagesCreateWithoutCustomersInput, Prisma.customer_packagesUncheckedCreateWithoutCustomersInput>;
};
export type customer_packagesCreateManyCustomersInputEnvelope = {
    data: Prisma.customer_packagesCreateManyCustomersInput | Prisma.customer_packagesCreateManyCustomersInput[];
    skipDuplicates?: boolean;
};
export type customer_packagesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.customer_packagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.customer_packagesUpdateWithoutCustomersInput, Prisma.customer_packagesUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.customer_packagesCreateWithoutCustomersInput, Prisma.customer_packagesUncheckedCreateWithoutCustomersInput>;
};
export type customer_packagesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: Prisma.customer_packagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.customer_packagesUpdateWithoutCustomersInput, Prisma.customer_packagesUncheckedUpdateWithoutCustomersInput>;
};
export type customer_packagesUpdateManyWithWhereWithoutCustomersInput = {
    where: Prisma.customer_packagesScalarWhereInput;
    data: Prisma.XOR<Prisma.customer_packagesUpdateManyMutationInput, Prisma.customer_packagesUncheckedUpdateManyWithoutCustomersInput>;
};
export type customer_packagesScalarWhereInput = {
    AND?: Prisma.customer_packagesScalarWhereInput | Prisma.customer_packagesScalarWhereInput[];
    OR?: Prisma.customer_packagesScalarWhereInput[];
    NOT?: Prisma.customer_packagesScalarWhereInput | Prisma.customer_packagesScalarWhereInput[];
    customer_package_id?: Prisma.IntFilter<"customer_packages"> | number;
    customer_id?: Prisma.IntFilter<"customer_packages"> | number;
    package_id?: Prisma.IntFilter<"customer_packages"> | number;
    start_date?: Prisma.DateTimeFilter<"customer_packages"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"customer_packages"> | Date | string;
    status?: Prisma.StringNullableFilter<"customer_packages"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"customer_packages"> | Date | string | null;
};
export type customer_packagesCreateWithoutFamily_packagesInput = {
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
    customers: Prisma.customersCreateNestedOneWithoutCustomer_packagesInput;
};
export type customer_packagesUncheckedCreateWithoutFamily_packagesInput = {
    customer_package_id?: number;
    customer_id: number;
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
};
export type customer_packagesCreateOrConnectWithoutFamily_packagesInput = {
    where: Prisma.customer_packagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_packagesCreateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput>;
};
export type customer_packagesCreateManyFamily_packagesInputEnvelope = {
    data: Prisma.customer_packagesCreateManyFamily_packagesInput | Prisma.customer_packagesCreateManyFamily_packagesInput[];
    skipDuplicates?: boolean;
};
export type customer_packagesUpsertWithWhereUniqueWithoutFamily_packagesInput = {
    where: Prisma.customer_packagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.customer_packagesUpdateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedUpdateWithoutFamily_packagesInput>;
    create: Prisma.XOR<Prisma.customer_packagesCreateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedCreateWithoutFamily_packagesInput>;
};
export type customer_packagesUpdateWithWhereUniqueWithoutFamily_packagesInput = {
    where: Prisma.customer_packagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.customer_packagesUpdateWithoutFamily_packagesInput, Prisma.customer_packagesUncheckedUpdateWithoutFamily_packagesInput>;
};
export type customer_packagesUpdateManyWithWhereWithoutFamily_packagesInput = {
    where: Prisma.customer_packagesScalarWhereInput;
    data: Prisma.XOR<Prisma.customer_packagesUpdateManyMutationInput, Prisma.customer_packagesUncheckedUpdateManyWithoutFamily_packagesInput>;
};
export type customer_packagesCreateManyCustomersInput = {
    customer_package_id?: number;
    package_id: number;
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
};
export type customer_packagesUpdateWithoutCustomersInput = {
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    family_packages?: Prisma.family_packagesUpdateOneRequiredWithoutCustomer_packagesNestedInput;
};
export type customer_packagesUncheckedUpdateWithoutCustomersInput = {
    customer_package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesUncheckedUpdateManyWithoutCustomersInput = {
    customer_package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesCreateManyFamily_packagesInput = {
    customer_package_id?: number;
    customer_id: number;
    start_date: Date | string;
    end_date: Date | string;
    status?: string | null;
    created_at?: Date | string | null;
};
export type customer_packagesUpdateWithoutFamily_packagesInput = {
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneRequiredWithoutCustomer_packagesNestedInput;
};
export type customer_packagesUncheckedUpdateWithoutFamily_packagesInput = {
    customer_package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesUncheckedUpdateManyWithoutFamily_packagesInput = {
    customer_package_id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type customer_packagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_package_id?: boolean;
    customer_id?: boolean;
    package_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    family_packages?: boolean | Prisma.family_packagesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_packages"]>;
export type customer_packagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_package_id?: boolean;
    customer_id?: boolean;
    package_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    family_packages?: boolean | Prisma.family_packagesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_packages"]>;
export type customer_packagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    customer_package_id?: boolean;
    customer_id?: boolean;
    package_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    family_packages?: boolean | Prisma.family_packagesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_packages"]>;
export type customer_packagesSelectScalar = {
    customer_package_id?: boolean;
    customer_id?: boolean;
    package_id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type customer_packagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"customer_package_id" | "customer_id" | "package_id" | "start_date" | "end_date" | "status" | "created_at", ExtArgs["result"]["customer_packages"]>;
export type customer_packagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    family_packages?: boolean | Prisma.family_packagesDefaultArgs<ExtArgs>;
};
export type customer_packagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    family_packages?: boolean | Prisma.family_packagesDefaultArgs<ExtArgs>;
};
export type customer_packagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customers?: boolean | Prisma.customersDefaultArgs<ExtArgs>;
    family_packages?: boolean | Prisma.family_packagesDefaultArgs<ExtArgs>;
};
export type $customer_packagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customer_packages";
    objects: {
        customers: Prisma.$customersPayload<ExtArgs>;
        family_packages: Prisma.$family_packagesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        customer_package_id: number;
        customer_id: number;
        package_id: number;
        start_date: Date;
        end_date: Date;
        status: string | null;
        created_at: Date | null;
    }, ExtArgs["result"]["customer_packages"]>;
    composites: {};
};
export type customer_packagesGetPayload<S extends boolean | null | undefined | customer_packagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload, S>;
export type customer_packagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customer_packagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Customer_packagesCountAggregateInputType | true;
};
export interface customer_packagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customer_packages'];
        meta: {
            name: 'customer_packages';
        };
    };
    findUnique<T extends customer_packagesFindUniqueArgs>(args: Prisma.SelectSubset<T, customer_packagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customer_packagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customer_packagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customer_packagesFindFirstArgs>(args?: Prisma.SelectSubset<T, customer_packagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customer_packagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customer_packagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customer_packagesFindManyArgs>(args?: Prisma.SelectSubset<T, customer_packagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customer_packagesCreateArgs>(args: Prisma.SelectSubset<T, customer_packagesCreateArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customer_packagesCreateManyArgs>(args?: Prisma.SelectSubset<T, customer_packagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customer_packagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customer_packagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customer_packagesDeleteArgs>(args: Prisma.SelectSubset<T, customer_packagesDeleteArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customer_packagesUpdateArgs>(args: Prisma.SelectSubset<T, customer_packagesUpdateArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customer_packagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, customer_packagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customer_packagesUpdateManyArgs>(args: Prisma.SelectSubset<T, customer_packagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customer_packagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customer_packagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customer_packagesUpsertArgs>(args: Prisma.SelectSubset<T, customer_packagesUpsertArgs<ExtArgs>>): Prisma.Prisma__customer_packagesClient<runtime.Types.Result.GetResult<Prisma.$customer_packagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customer_packagesCountArgs>(args?: Prisma.Subset<T, customer_packagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Customer_packagesCountAggregateOutputType> : number>;
    aggregate<T extends Customer_packagesAggregateArgs>(args: Prisma.Subset<T, Customer_packagesAggregateArgs>): Prisma.PrismaPromise<GetCustomer_packagesAggregateType<T>>;
    groupBy<T extends customer_packagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customer_packagesGroupByArgs['orderBy'];
    } : {
        orderBy?: customer_packagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customer_packagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_packagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customer_packagesFieldRefs;
}
export interface Prisma__customer_packagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customers<T extends Prisma.customersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customersDefaultArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    family_packages<T extends Prisma.family_packagesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.family_packagesDefaultArgs<ExtArgs>>): Prisma.Prisma__family_packagesClient<runtime.Types.Result.GetResult<Prisma.$family_packagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customer_packagesFieldRefs {
    readonly customer_package_id: Prisma.FieldRef<"customer_packages", 'Int'>;
    readonly customer_id: Prisma.FieldRef<"customer_packages", 'Int'>;
    readonly package_id: Prisma.FieldRef<"customer_packages", 'Int'>;
    readonly start_date: Prisma.FieldRef<"customer_packages", 'DateTime'>;
    readonly end_date: Prisma.FieldRef<"customer_packages", 'DateTime'>;
    readonly status: Prisma.FieldRef<"customer_packages", 'String'>;
    readonly created_at: Prisma.FieldRef<"customer_packages", 'DateTime'>;
}
export type customer_packagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    where: Prisma.customer_packagesWhereUniqueInput;
};
export type customer_packagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    where: Prisma.customer_packagesWhereUniqueInput;
};
export type customer_packagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customer_packagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customer_packagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customer_packagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_packagesCreateInput, Prisma.customer_packagesUncheckedCreateInput>;
};
export type customer_packagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customer_packagesCreateManyInput | Prisma.customer_packagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customer_packagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    data: Prisma.customer_packagesCreateManyInput | Prisma.customer_packagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.customer_packagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type customer_packagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_packagesUpdateInput, Prisma.customer_packagesUncheckedUpdateInput>;
    where: Prisma.customer_packagesWhereUniqueInput;
};
export type customer_packagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customer_packagesUpdateManyMutationInput, Prisma.customer_packagesUncheckedUpdateManyInput>;
    where?: Prisma.customer_packagesWhereInput;
    limit?: number;
};
export type customer_packagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_packagesUpdateManyMutationInput, Prisma.customer_packagesUncheckedUpdateManyInput>;
    where?: Prisma.customer_packagesWhereInput;
    limit?: number;
    include?: Prisma.customer_packagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type customer_packagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    where: Prisma.customer_packagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_packagesCreateInput, Prisma.customer_packagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customer_packagesUpdateInput, Prisma.customer_packagesUncheckedUpdateInput>;
};
export type customer_packagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
    where: Prisma.customer_packagesWhereUniqueInput;
};
export type customer_packagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_packagesWhereInput;
    limit?: number;
};
export type customer_packagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_packagesSelect<ExtArgs> | null;
    omit?: Prisma.customer_packagesOmit<ExtArgs> | null;
    include?: Prisma.customer_packagesInclude<ExtArgs> | null;
};
