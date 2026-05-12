import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    user_id: number | null;
};
export type UsersSumAggregateOutputType = {
    user_id: number | null;
};
export type UsersMinAggregateOutputType = {
    user_id: number | null;
    phone: string | null;
    password_hash: string | null;
    full_name: string | null;
    avatar_url: string | null;
    role: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    user_id: number | null;
    phone: string | null;
    password_hash: string | null;
    full_name: string | null;
    avatar_url: string | null;
    role: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    user_id: number;
    phone: number;
    password_hash: number;
    full_name: number;
    avatar_url: number;
    role: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    user_id?: true;
};
export type UsersSumAggregateInputType = {
    user_id?: true;
};
export type UsersMinAggregateInputType = {
    user_id?: true;
    phone?: true;
    password_hash?: true;
    full_name?: true;
    avatar_url?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersMaxAggregateInputType = {
    user_id?: true;
    phone?: true;
    password_hash?: true;
    full_name?: true;
    avatar_url?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersCountAggregateInputType = {
    user_id?: true;
    phone?: true;
    password_hash?: true;
    full_name?: true;
    avatar_url?: true;
    role?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    user_id: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url: string | null;
    role: string;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    user_id?: Prisma.IntFilter<"users"> | number;
    phone?: Prisma.StringFilter<"users"> | string;
    password_hash?: Prisma.StringFilter<"users"> | string;
    full_name?: Prisma.StringFilter<"users"> | string;
    avatar_url?: Prisma.StringNullableFilter<"users"> | string | null;
    role?: Prisma.StringFilter<"users"> | string;
    status?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsNullableScalarRelationFilter, Prisma.adminsWhereInput> | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    messages_messages_receiver_idTousers?: Prisma.MessagesListRelationFilter;
    messages_messages_sender_idTousers?: Prisma.MessagesListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
    taskers?: Prisma.XOR<Prisma.TaskersNullableScalarRelationFilter, Prisma.taskersWhereInput> | null;
    wallets?: Prisma.XOR<Prisma.WalletsNullableScalarRelationFilter, Prisma.walletsWhereInput> | null;
};
export type usersOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    admins?: Prisma.adminsOrderByWithRelationInput;
    customers?: Prisma.customersOrderByWithRelationInput;
    messages_messages_receiver_idTousers?: Prisma.messagesOrderByRelationAggregateInput;
    messages_messages_sender_idTousers?: Prisma.messagesOrderByRelationAggregateInput;
    notifications?: Prisma.notificationsOrderByRelationAggregateInput;
    support_tickets?: Prisma.support_ticketsOrderByRelationAggregateInput;
    taskers?: Prisma.taskersOrderByWithRelationInput;
    wallets?: Prisma.walletsOrderByWithRelationInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number;
    phone?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password_hash?: Prisma.StringFilter<"users"> | string;
    full_name?: Prisma.StringFilter<"users"> | string;
    avatar_url?: Prisma.StringNullableFilter<"users"> | string | null;
    role?: Prisma.StringFilter<"users"> | string;
    status?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    admins?: Prisma.XOR<Prisma.AdminsNullableScalarRelationFilter, Prisma.adminsWhereInput> | null;
    customers?: Prisma.XOR<Prisma.CustomersNullableScalarRelationFilter, Prisma.customersWhereInput> | null;
    messages_messages_receiver_idTousers?: Prisma.MessagesListRelationFilter;
    messages_messages_sender_idTousers?: Prisma.MessagesListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
    support_tickets?: Prisma.Support_ticketsListRelationFilter;
    taskers?: Prisma.XOR<Prisma.TaskersNullableScalarRelationFilter, Prisma.taskersWhereInput> | null;
    wallets?: Prisma.XOR<Prisma.WalletsNullableScalarRelationFilter, Prisma.walletsWhereInput> | null;
}, "user_id" | "phone">;
export type usersOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    user_id?: Prisma.IntWithAggregatesFilter<"users"> | number;
    phone?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"users"> | string;
    full_name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    avatar_url?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    role?: Prisma.StringWithAggregatesFilter<"users"> | string;
    status?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
};
export type usersCreateInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersUpdateInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type usersUpdateManyMutationInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type usersUncheckedUpdateManyInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutAdminsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAdminsInput, Prisma.usersUncheckedCreateWithoutAdminsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAdminsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutAdminsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAdminsInput, Prisma.usersUncheckedCreateWithoutAdminsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAdminsInput;
    upsert?: Prisma.usersUpsertWithoutAdminsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutAdminsInput, Prisma.usersUpdateWithoutAdminsInput>, Prisma.usersUncheckedUpdateWithoutAdminsInput>;
};
export type usersCreateNestedOneWithoutCustomersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCustomersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutCustomersInput;
    upsert?: Prisma.usersUpsertWithoutCustomersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutCustomersInput, Prisma.usersUpdateWithoutCustomersInput>, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
};
export type usersCreateNestedOneWithoutMessages_messages_receiver_idTousersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_receiver_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMessages_messages_receiver_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_sender_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_sender_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMessages_messages_sender_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutMessages_messages_receiver_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_receiver_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMessages_messages_receiver_idTousersInput;
    upsert?: Prisma.usersUpsertWithoutMessages_messages_receiver_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUpdateWithoutMessages_messages_receiver_idTousersInput>, Prisma.usersUncheckedUpdateWithoutMessages_messages_receiver_idTousersInput>;
};
export type usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_sender_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_sender_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMessages_messages_sender_idTousersInput;
    upsert?: Prisma.usersUpsertWithoutMessages_messages_sender_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutMessages_messages_sender_idTousersInput, Prisma.usersUpdateWithoutMessages_messages_sender_idTousersInput>, Prisma.usersUncheckedUpdateWithoutMessages_messages_sender_idTousersInput>;
};
export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.usersUpsertWithoutNotificationsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutNotificationsInput, Prisma.usersUpdateWithoutNotificationsInput>, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
};
export type usersCreateNestedOneWithoutSupport_ticketsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutSupport_ticketsInput, Prisma.usersUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutSupport_ticketsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutSupport_ticketsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutSupport_ticketsInput, Prisma.usersUncheckedCreateWithoutSupport_ticketsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutSupport_ticketsInput;
    upsert?: Prisma.usersUpsertWithoutSupport_ticketsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutSupport_ticketsInput, Prisma.usersUpdateWithoutSupport_ticketsInput>, Prisma.usersUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type usersCreateNestedOneWithoutTaskersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTaskersInput, Prisma.usersUncheckedCreateWithoutTaskersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTaskersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutTaskersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTaskersInput, Prisma.usersUncheckedCreateWithoutTaskersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTaskersInput;
    upsert?: Prisma.usersUpsertWithoutTaskersInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutTaskersInput, Prisma.usersUpdateWithoutTaskersInput>, Prisma.usersUncheckedUpdateWithoutTaskersInput>;
};
export type usersCreateNestedOneWithoutWalletsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutWalletsInput, Prisma.usersUncheckedCreateWithoutWalletsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutWalletsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutWalletsInput, Prisma.usersUncheckedCreateWithoutWalletsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutWalletsInput;
    upsert?: Prisma.usersUpsertWithoutWalletsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutWalletsInput, Prisma.usersUpdateWithoutWalletsInput>, Prisma.usersUncheckedUpdateWithoutWalletsInput>;
};
export type usersCreateWithoutAdminsInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutAdminsInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutAdminsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutAdminsInput, Prisma.usersUncheckedCreateWithoutAdminsInput>;
};
export type usersUpsertWithoutAdminsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutAdminsInput, Prisma.usersUncheckedUpdateWithoutAdminsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutAdminsInput, Prisma.usersUncheckedCreateWithoutAdminsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutAdminsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutAdminsInput, Prisma.usersUncheckedUpdateWithoutAdminsInput>;
};
export type usersUpdateWithoutAdminsInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutAdminsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutCustomersInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutCustomersInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutCustomersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
};
export type usersUpsertWithoutCustomersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutCustomersInput, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutCustomersInput, Prisma.usersUncheckedCreateWithoutCustomersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutCustomersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutCustomersInput, Prisma.usersUncheckedUpdateWithoutCustomersInput>;
};
export type usersUpdateWithoutCustomersInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutCustomersInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutMessages_messages_receiver_idTousersInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutMessages_messages_receiver_idTousersInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutMessages_messages_receiver_idTousersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_receiver_idTousersInput>;
};
export type usersCreateWithoutMessages_messages_sender_idTousersInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutMessages_messages_sender_idTousersInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutMessages_messages_sender_idTousersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_sender_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_sender_idTousersInput>;
};
export type usersUpsertWithoutMessages_messages_receiver_idTousersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUncheckedUpdateWithoutMessages_messages_receiver_idTousersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_receiver_idTousersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutMessages_messages_receiver_idTousersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutMessages_messages_receiver_idTousersInput, Prisma.usersUncheckedUpdateWithoutMessages_messages_receiver_idTousersInput>;
};
export type usersUpdateWithoutMessages_messages_receiver_idTousersInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutMessages_messages_receiver_idTousersInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersUpsertWithoutMessages_messages_sender_idTousersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutMessages_messages_sender_idTousersInput, Prisma.usersUncheckedUpdateWithoutMessages_messages_sender_idTousersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutMessages_messages_sender_idTousersInput, Prisma.usersUncheckedCreateWithoutMessages_messages_sender_idTousersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutMessages_messages_sender_idTousersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutMessages_messages_sender_idTousersInput, Prisma.usersUncheckedUpdateWithoutMessages_messages_sender_idTousersInput>;
};
export type usersUpdateWithoutMessages_messages_sender_idTousersInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutMessages_messages_sender_idTousersInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutNotificationsInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutNotificationsInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
};
export type usersUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutNotificationsInput, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutNotificationsInput, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
};
export type usersUpdateWithoutNotificationsInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutNotificationsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutSupport_ticketsInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutSupport_ticketsInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutSupport_ticketsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutSupport_ticketsInput, Prisma.usersUncheckedCreateWithoutSupport_ticketsInput>;
};
export type usersUpsertWithoutSupport_ticketsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutSupport_ticketsInput, Prisma.usersUncheckedUpdateWithoutSupport_ticketsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutSupport_ticketsInput, Prisma.usersUncheckedCreateWithoutSupport_ticketsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutSupport_ticketsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutSupport_ticketsInput, Prisma.usersUncheckedUpdateWithoutSupport_ticketsInput>;
};
export type usersUpdateWithoutSupport_ticketsInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutSupport_ticketsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutTaskersInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    wallets?: Prisma.walletsCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutTaskersInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    wallets?: Prisma.walletsUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutTaskersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutTaskersInput, Prisma.usersUncheckedCreateWithoutTaskersInput>;
};
export type usersUpsertWithoutTaskersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutTaskersInput, Prisma.usersUncheckedUpdateWithoutTaskersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutTaskersInput, Prisma.usersUncheckedCreateWithoutTaskersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutTaskersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutTaskersInput, Prisma.usersUncheckedUpdateWithoutTaskersInput>;
};
export type usersUpdateWithoutTaskersInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    wallets?: Prisma.walletsUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutTaskersInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    wallets?: Prisma.walletsUncheckedUpdateOneWithoutUsersNestedInput;
};
export type usersCreateWithoutWalletsInput = {
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersCreateNestedOneWithoutUsersInput;
};
export type usersUncheckedCreateWithoutWalletsInput = {
    user_id?: number;
    phone: string;
    password_hash: string;
    full_name: string;
    avatar_url?: string | null;
    role: string;
    status?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    admins?: Prisma.adminsUncheckedCreateNestedOneWithoutUsersInput;
    customers?: Prisma.customersUncheckedCreateNestedOneWithoutUsersInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
    support_tickets?: Prisma.support_ticketsUncheckedCreateNestedManyWithoutUsersInput;
    taskers?: Prisma.taskersUncheckedCreateNestedOneWithoutUsersInput;
};
export type usersCreateOrConnectWithoutWalletsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutWalletsInput, Prisma.usersUncheckedCreateWithoutWalletsInput>;
};
export type usersUpsertWithoutWalletsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutWalletsInput, Prisma.usersUncheckedUpdateWithoutWalletsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutWalletsInput, Prisma.usersUncheckedCreateWithoutWalletsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutWalletsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutWalletsInput, Prisma.usersUncheckedUpdateWithoutWalletsInput>;
};
export type usersUpdateWithoutWalletsInput = {
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUpdateOneWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutWalletsInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    admins?: Prisma.adminsUncheckedUpdateOneWithoutUsersNestedInput;
    customers?: Prisma.customersUncheckedUpdateOneWithoutUsersNestedInput;
    messages_messages_receiver_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput;
    messages_messages_sender_idTousers?: Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
    support_tickets?: Prisma.support_ticketsUncheckedUpdateManyWithoutUsersNestedInput;
    taskers?: Prisma.taskersUncheckedUpdateOneWithoutUsersNestedInput;
};
export type UsersCountOutputType = {
    messages_messages_receiver_idTousers: number;
    messages_messages_sender_idTousers: number;
    notifications: number;
    support_tickets: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages_messages_receiver_idTousers?: boolean | UsersCountOutputTypeCountMessages_messages_receiver_idTousersArgs;
    messages_messages_sender_idTousers?: boolean | UsersCountOutputTypeCountMessages_messages_sender_idTousersArgs;
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs;
    support_tickets?: boolean | UsersCountOutputTypeCountSupport_ticketsArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountMessages_messages_receiver_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
};
export type UsersCountOutputTypeCountMessages_messages_sender_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
};
export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
};
export type UsersCountOutputTypeCountSupport_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.support_ticketsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    phone?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    avatar_url?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    admins?: boolean | Prisma.users$adminsArgs<ExtArgs>;
    customers?: boolean | Prisma.users$customersArgs<ExtArgs>;
    messages_messages_receiver_idTousers?: boolean | Prisma.users$messages_messages_receiver_idTousersArgs<ExtArgs>;
    messages_messages_sender_idTousers?: boolean | Prisma.users$messages_messages_sender_idTousersArgs<ExtArgs>;
    notifications?: boolean | Prisma.users$notificationsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.users$support_ticketsArgs<ExtArgs>;
    taskers?: boolean | Prisma.users$taskersArgs<ExtArgs>;
    wallets?: boolean | Prisma.users$walletsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    phone?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    avatar_url?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    phone?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    avatar_url?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    user_id?: boolean;
    phone?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    avatar_url?: boolean;
    role?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "phone" | "password_hash" | "full_name" | "avatar_url" | "role" | "status" | "created_at" | "updated_at", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admins?: boolean | Prisma.users$adminsArgs<ExtArgs>;
    customers?: boolean | Prisma.users$customersArgs<ExtArgs>;
    messages_messages_receiver_idTousers?: boolean | Prisma.users$messages_messages_receiver_idTousersArgs<ExtArgs>;
    messages_messages_sender_idTousers?: boolean | Prisma.users$messages_messages_sender_idTousersArgs<ExtArgs>;
    notifications?: boolean | Prisma.users$notificationsArgs<ExtArgs>;
    support_tickets?: boolean | Prisma.users$support_ticketsArgs<ExtArgs>;
    taskers?: boolean | Prisma.users$taskersArgs<ExtArgs>;
    wallets?: boolean | Prisma.users$walletsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        admins: Prisma.$adminsPayload<ExtArgs> | null;
        customers: Prisma.$customersPayload<ExtArgs> | null;
        messages_messages_receiver_idTousers: Prisma.$messagesPayload<ExtArgs>[];
        messages_messages_sender_idTousers: Prisma.$messagesPayload<ExtArgs>[];
        notifications: Prisma.$notificationsPayload<ExtArgs>[];
        support_tickets: Prisma.$support_ticketsPayload<ExtArgs>[];
        taskers: Prisma.$taskersPayload<ExtArgs> | null;
        wallets: Prisma.$walletsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: number;
        phone: string;
        password_hash: string;
        full_name: string;
        avatar_url: string | null;
        role: string;
        status: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admins<T extends Prisma.users$adminsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$adminsArgs<ExtArgs>>): Prisma.Prisma__adminsClient<runtime.Types.Result.GetResult<Prisma.$adminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customers<T extends Prisma.users$customersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$customersArgs<ExtArgs>>): Prisma.Prisma__customersClient<runtime.Types.Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    messages_messages_receiver_idTousers<T extends Prisma.users$messages_messages_receiver_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$messages_messages_receiver_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    messages_messages_sender_idTousers<T extends Prisma.users$messages_messages_sender_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$messages_messages_sender_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.users$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    support_tickets<T extends Prisma.users$support_ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$support_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$support_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    taskers<T extends Prisma.users$taskersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$taskersArgs<ExtArgs>>): Prisma.Prisma__taskersClient<runtime.Types.Result.GetResult<Prisma.$taskersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wallets<T extends Prisma.users$walletsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$walletsArgs<ExtArgs>>): Prisma.Prisma__walletsClient<runtime.Types.Result.GetResult<Prisma.$walletsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly user_id: Prisma.FieldRef<"users", 'Int'>;
    readonly phone: Prisma.FieldRef<"users", 'String'>;
    readonly password_hash: Prisma.FieldRef<"users", 'String'>;
    readonly full_name: Prisma.FieldRef<"users", 'String'>;
    readonly avatar_url: Prisma.FieldRef<"users", 'String'>;
    readonly role: Prisma.FieldRef<"users", 'String'>;
    readonly status: Prisma.FieldRef<"users", 'String'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"users", 'DateTime'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$adminsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminsSelect<ExtArgs> | null;
    omit?: Prisma.adminsOmit<ExtArgs> | null;
    include?: Prisma.adminsInclude<ExtArgs> | null;
    where?: Prisma.adminsWhereInput;
};
export type users$customersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customersSelect<ExtArgs> | null;
    omit?: Prisma.customersOmit<ExtArgs> | null;
    include?: Prisma.customersInclude<ExtArgs> | null;
    where?: Prisma.customersWhereInput;
};
export type users$messages_messages_receiver_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type users$messages_messages_sender_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
export type users$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type users$support_ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$taskersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.taskersSelect<ExtArgs> | null;
    omit?: Prisma.taskersOmit<ExtArgs> | null;
    include?: Prisma.taskersInclude<ExtArgs> | null;
    where?: Prisma.taskersWhereInput;
};
export type users$walletsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.walletsSelect<ExtArgs> | null;
    omit?: Prisma.walletsOmit<ExtArgs> | null;
    include?: Prisma.walletsInclude<ExtArgs> | null;
    where?: Prisma.walletsWhereInput;
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
