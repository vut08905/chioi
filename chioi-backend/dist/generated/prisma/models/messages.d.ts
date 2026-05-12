import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type messagesModel = runtime.Types.Result.DefaultSelection<Prisma.$messagesPayload>;
export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null;
    _avg: MessagesAvgAggregateOutputType | null;
    _sum: MessagesSumAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type MessagesAvgAggregateOutputType = {
    message_id: number | null;
    order_id: number | null;
    sender_id: number | null;
    receiver_id: number | null;
};
export type MessagesSumAggregateOutputType = {
    message_id: number | null;
    order_id: number | null;
    sender_id: number | null;
    receiver_id: number | null;
};
export type MessagesMinAggregateOutputType = {
    message_id: number | null;
    order_id: number | null;
    sender_id: number | null;
    receiver_id: number | null;
    content: string | null;
    is_read: boolean | null;
    created_at: Date | null;
};
export type MessagesMaxAggregateOutputType = {
    message_id: number | null;
    order_id: number | null;
    sender_id: number | null;
    receiver_id: number | null;
    content: string | null;
    is_read: boolean | null;
    created_at: Date | null;
};
export type MessagesCountAggregateOutputType = {
    message_id: number;
    order_id: number;
    sender_id: number;
    receiver_id: number;
    content: number;
    is_read: number;
    created_at: number;
    _all: number;
};
export type MessagesAvgAggregateInputType = {
    message_id?: true;
    order_id?: true;
    sender_id?: true;
    receiver_id?: true;
};
export type MessagesSumAggregateInputType = {
    message_id?: true;
    order_id?: true;
    sender_id?: true;
    receiver_id?: true;
};
export type MessagesMinAggregateInputType = {
    message_id?: true;
    order_id?: true;
    sender_id?: true;
    receiver_id?: true;
    content?: true;
    is_read?: true;
    created_at?: true;
};
export type MessagesMaxAggregateInputType = {
    message_id?: true;
    order_id?: true;
    sender_id?: true;
    receiver_id?: true;
    content?: true;
    is_read?: true;
    created_at?: true;
};
export type MessagesCountAggregateInputType = {
    message_id?: true;
    order_id?: true;
    sender_id?: true;
    receiver_id?: true;
    content?: true;
    is_read?: true;
    created_at?: true;
    _all?: true;
};
export type MessagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithRelationInput | Prisma.messagesOrderByWithRelationInput[];
    cursor?: Prisma.messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessagesCountAggregateInputType;
    _avg?: MessagesAvgAggregateInputType;
    _sum?: MessagesSumAggregateInputType;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
    [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessages[P]> : Prisma.GetScalarType<T[P], AggregateMessages[P]>;
};
export type messagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
    orderBy?: Prisma.messagesOrderByWithAggregationInput | Prisma.messagesOrderByWithAggregationInput[];
    by: Prisma.MessagesScalarFieldEnum[] | Prisma.MessagesScalarFieldEnum;
    having?: Prisma.messagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessagesCountAggregateInputType | true;
    _avg?: MessagesAvgAggregateInputType;
    _sum?: MessagesSumAggregateInputType;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type MessagesGroupByOutputType = {
    message_id: number;
    order_id: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read: boolean | null;
    created_at: Date | null;
    _count: MessagesCountAggregateOutputType | null;
    _avg: MessagesAvgAggregateOutputType | null;
    _sum: MessagesSumAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type GetMessagesGroupByPayload<T extends messagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]>;
}>>;
export type messagesWhereInput = {
    AND?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    OR?: Prisma.messagesWhereInput[];
    NOT?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    message_id?: Prisma.IntFilter<"messages"> | number;
    order_id?: Prisma.IntFilter<"messages"> | number;
    sender_id?: Prisma.IntFilter<"messages"> | number;
    receiver_id?: Prisma.IntFilter<"messages"> | number;
    content?: Prisma.StringFilter<"messages"> | string;
    is_read?: Prisma.BoolNullableFilter<"messages"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    users_messages_receiver_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    users_messages_sender_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type messagesOrderByWithRelationInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_read?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
    users_messages_receiver_idTousers?: Prisma.usersOrderByWithRelationInput;
    users_messages_sender_idTousers?: Prisma.usersOrderByWithRelationInput;
};
export type messagesWhereUniqueInput = Prisma.AtLeast<{
    message_id?: number;
    AND?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    OR?: Prisma.messagesWhereInput[];
    NOT?: Prisma.messagesWhereInput | Prisma.messagesWhereInput[];
    order_id?: Prisma.IntFilter<"messages"> | number;
    sender_id?: Prisma.IntFilter<"messages"> | number;
    receiver_id?: Prisma.IntFilter<"messages"> | number;
    content?: Prisma.StringFilter<"messages"> | string;
    is_read?: Prisma.BoolNullableFilter<"messages"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
    users_messages_receiver_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    users_messages_sender_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "message_id">;
export type messagesOrderByWithAggregationInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_read?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.messagesCountOrderByAggregateInput;
    _avg?: Prisma.messagesAvgOrderByAggregateInput;
    _max?: Prisma.messagesMaxOrderByAggregateInput;
    _min?: Prisma.messagesMinOrderByAggregateInput;
    _sum?: Prisma.messagesSumOrderByAggregateInput;
};
export type messagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.messagesScalarWhereWithAggregatesInput | Prisma.messagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.messagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.messagesScalarWhereWithAggregatesInput | Prisma.messagesScalarWhereWithAggregatesInput[];
    message_id?: Prisma.IntWithAggregatesFilter<"messages"> | number;
    order_id?: Prisma.IntWithAggregatesFilter<"messages"> | number;
    sender_id?: Prisma.IntWithAggregatesFilter<"messages"> | number;
    receiver_id?: Prisma.IntWithAggregatesFilter<"messages"> | number;
    content?: Prisma.StringWithAggregatesFilter<"messages"> | string;
    is_read?: Prisma.BoolNullableWithAggregatesFilter<"messages"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"messages"> | Date | string | null;
};
export type messagesCreateInput = {
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutMessagesInput;
    users_messages_receiver_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_receiver_idTousersInput;
    users_messages_sender_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput;
};
export type messagesUncheckedCreateInput = {
    message_id?: number;
    order_id: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesUpdateInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutMessagesNestedInput;
    users_messages_receiver_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_receiver_idTousersNestedInput;
    users_messages_sender_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput;
};
export type messagesUncheckedUpdateInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesCreateManyInput = {
    message_id?: number;
    order_id: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesUpdateManyMutationInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesUncheckedUpdateManyInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesCountOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type messagesAvgOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
};
export type messagesMaxOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type messagesMinOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type messagesSumOrderByAggregateInput = {
    message_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    sender_id?: Prisma.SortOrder;
    receiver_id?: Prisma.SortOrder;
};
export type MessagesListRelationFilter = {
    every?: Prisma.messagesWhereInput;
    some?: Prisma.messagesWhereInput;
    none?: Prisma.messagesWhereInput;
};
export type messagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type messagesCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutOrdersInput, Prisma.messagesUncheckedCreateWithoutOrdersInput> | Prisma.messagesCreateWithoutOrdersInput[] | Prisma.messagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutOrdersInput | Prisma.messagesCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.messagesCreateManyOrdersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutOrdersInput, Prisma.messagesUncheckedCreateWithoutOrdersInput> | Prisma.messagesCreateWithoutOrdersInput[] | Prisma.messagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutOrdersInput | Prisma.messagesCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.messagesCreateManyOrdersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutOrdersInput, Prisma.messagesUncheckedCreateWithoutOrdersInput> | Prisma.messagesCreateWithoutOrdersInput[] | Prisma.messagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutOrdersInput | Prisma.messagesCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutOrdersInput | Prisma.messagesUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.messagesCreateManyOrdersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutOrdersInput | Prisma.messagesUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutOrdersInput | Prisma.messagesUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutOrdersInput, Prisma.messagesUncheckedCreateWithoutOrdersInput> | Prisma.messagesCreateWithoutOrdersInput[] | Prisma.messagesUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutOrdersInput | Prisma.messagesCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutOrdersInput | Prisma.messagesUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.messagesCreateManyOrdersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutOrdersInput | Prisma.messagesUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutOrdersInput | Prisma.messagesUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesCreateNestedManyWithoutUsers_messages_receiver_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_receiver_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesCreateNestedManyWithoutUsers_messages_sender_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUncheckedCreateNestedManyWithoutUsers_messages_receiver_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_receiver_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUncheckedCreateNestedManyWithoutUsers_messages_sender_idTousersInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
};
export type messagesUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_receiver_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_receiver_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUpdateManyWithoutUsers_messages_sender_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_receiver_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_receiver_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_receiver_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput> | Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput[] | Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput[];
    connectOrCreate?: Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput | Prisma.messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput[];
    upsert?: Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    createMany?: Prisma.messagesCreateManyUsers_messages_sender_idTousersInputEnvelope;
    set?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    disconnect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    delete?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    connect?: Prisma.messagesWhereUniqueInput | Prisma.messagesWhereUniqueInput[];
    update?: Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput[];
    updateMany?: Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput | Prisma.messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput[];
    deleteMany?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
};
export type messagesCreateWithoutOrdersInput = {
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
    users_messages_receiver_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_receiver_idTousersInput;
    users_messages_sender_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput;
};
export type messagesUncheckedCreateWithoutOrdersInput = {
    message_id?: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesCreateOrConnectWithoutOrdersInput = {
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateWithoutOrdersInput, Prisma.messagesUncheckedCreateWithoutOrdersInput>;
};
export type messagesCreateManyOrdersInputEnvelope = {
    data: Prisma.messagesCreateManyOrdersInput | Prisma.messagesCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type messagesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.messagesUpdateWithoutOrdersInput, Prisma.messagesUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.messagesCreateWithoutOrdersInput, Prisma.messagesUncheckedCreateWithoutOrdersInput>;
};
export type messagesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.messagesUpdateWithoutOrdersInput, Prisma.messagesUncheckedUpdateWithoutOrdersInput>;
};
export type messagesUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyWithoutOrdersInput>;
};
export type messagesScalarWhereInput = {
    AND?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
    OR?: Prisma.messagesScalarWhereInput[];
    NOT?: Prisma.messagesScalarWhereInput | Prisma.messagesScalarWhereInput[];
    message_id?: Prisma.IntFilter<"messages"> | number;
    order_id?: Prisma.IntFilter<"messages"> | number;
    sender_id?: Prisma.IntFilter<"messages"> | number;
    receiver_id?: Prisma.IntFilter<"messages"> | number;
    content?: Prisma.StringFilter<"messages"> | string;
    is_read?: Prisma.BoolNullableFilter<"messages"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"messages"> | Date | string | null;
};
export type messagesCreateWithoutUsers_messages_receiver_idTousersInput = {
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutMessagesInput;
    users_messages_sender_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_sender_idTousersInput;
};
export type messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput = {
    message_id?: number;
    order_id: number;
    sender_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesCreateOrConnectWithoutUsers_messages_receiver_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput>;
};
export type messagesCreateManyUsers_messages_receiver_idTousersInputEnvelope = {
    data: Prisma.messagesCreateManyUsers_messages_receiver_idTousersInput | Prisma.messagesCreateManyUsers_messages_receiver_idTousersInput[];
    skipDuplicates?: boolean;
};
export type messagesCreateWithoutUsers_messages_sender_idTousersInput = {
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
    orders: Prisma.ordersCreateNestedOneWithoutMessagesInput;
    users_messages_receiver_idTousers: Prisma.usersCreateNestedOneWithoutMessages_messages_receiver_idTousersInput;
};
export type messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput = {
    message_id?: number;
    order_id: number;
    receiver_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesCreateOrConnectWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesCreateManyUsers_messages_sender_idTousersInputEnvelope = {
    data: Prisma.messagesCreateManyUsers_messages_sender_idTousersInput | Prisma.messagesCreateManyUsers_messages_sender_idTousersInput[];
    skipDuplicates?: boolean;
};
export type messagesUpsertWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_receiver_idTousersInput>;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_receiver_idTousersInput>;
};
export type messagesUpdateWithWhereUniqueWithoutUsers_messages_receiver_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_receiver_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_receiver_idTousersInput>;
};
export type messagesUpdateManyWithWhereWithoutUsers_messages_receiver_idTousersInput = {
    where: Prisma.messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersInput>;
};
export type messagesUpsertWithWhereUniqueWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_sender_idTousersInput>;
    create: Prisma.XOR<Prisma.messagesCreateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedCreateWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesUpdateWithWhereUniqueWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.messagesUpdateWithoutUsers_messages_sender_idTousersInput, Prisma.messagesUncheckedUpdateWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesUpdateManyWithWhereWithoutUsers_messages_sender_idTousersInput = {
    where: Prisma.messagesScalarWhereInput;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersInput>;
};
export type messagesCreateManyOrdersInput = {
    message_id?: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesUpdateWithoutOrdersInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    users_messages_receiver_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_receiver_idTousersNestedInput;
    users_messages_sender_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput;
};
export type messagesUncheckedUpdateWithoutOrdersInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesUncheckedUpdateManyWithoutOrdersInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesCreateManyUsers_messages_receiver_idTousersInput = {
    message_id?: number;
    order_id: number;
    sender_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesCreateManyUsers_messages_sender_idTousersInput = {
    message_id?: number;
    order_id: number;
    receiver_id: number;
    content: string;
    is_read?: boolean | null;
    created_at?: Date | string | null;
};
export type messagesUpdateWithoutUsers_messages_receiver_idTousersInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutMessagesNestedInput;
    users_messages_sender_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_sender_idTousersNestedInput;
};
export type messagesUncheckedUpdateWithoutUsers_messages_receiver_idTousersInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_receiver_idTousersInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sender_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesUpdateWithoutUsers_messages_sender_idTousersInput = {
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutMessagesNestedInput;
    users_messages_receiver_idTousers?: Prisma.usersUpdateOneRequiredWithoutMessages_messages_receiver_idTousersNestedInput;
};
export type messagesUncheckedUpdateWithoutUsers_messages_sender_idTousersInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesUncheckedUpdateManyWithoutUsers_messages_sender_idTousersInput = {
    message_id?: Prisma.IntFieldUpdateOperationsInput | number;
    order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    receiver_id?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    is_read?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type messagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    order_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    users_messages_receiver_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type messagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    order_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    users_messages_receiver_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type messagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    message_id?: boolean;
    order_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    is_read?: boolean;
    created_at?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    users_messages_receiver_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type messagesSelectScalar = {
    message_id?: boolean;
    order_id?: boolean;
    sender_id?: boolean;
    receiver_id?: boolean;
    content?: boolean;
    is_read?: boolean;
    created_at?: boolean;
};
export type messagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"message_id" | "order_id" | "sender_id" | "receiver_id" | "content" | "is_read" | "created_at", ExtArgs["result"]["messages"]>;
export type messagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    users_messages_receiver_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type messagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    users_messages_receiver_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type messagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
    users_messages_receiver_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    users_messages_sender_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $messagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "messages";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>;
        users_messages_receiver_idTousers: Prisma.$usersPayload<ExtArgs>;
        users_messages_sender_idTousers: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        message_id: number;
        order_id: number;
        sender_id: number;
        receiver_id: number;
        content: string;
        is_read: boolean | null;
        created_at: Date | null;
    }, ExtArgs["result"]["messages"]>;
    composites: {};
};
export type messagesGetPayload<S extends boolean | null | undefined | messagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$messagesPayload, S>;
export type messagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessagesCountAggregateInputType | true;
};
export interface messagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['messages'];
        meta: {
            name: 'messages';
        };
    };
    findUnique<T extends messagesFindUniqueArgs>(args: Prisma.SelectSubset<T, messagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends messagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends messagesFindFirstArgs>(args?: Prisma.SelectSubset<T, messagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends messagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends messagesFindManyArgs>(args?: Prisma.SelectSubset<T, messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends messagesCreateArgs>(args: Prisma.SelectSubset<T, messagesCreateArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends messagesCreateManyArgs>(args?: Prisma.SelectSubset<T, messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends messagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends messagesDeleteArgs>(args: Prisma.SelectSubset<T, messagesDeleteArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends messagesUpdateArgs>(args: Prisma.SelectSubset<T, messagesUpdateArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends messagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends messagesUpdateManyArgs>(args: Prisma.SelectSubset<T, messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends messagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends messagesUpsertArgs>(args: Prisma.SelectSubset<T, messagesUpsertArgs<ExtArgs>>): Prisma.Prisma__messagesClient<runtime.Types.Result.GetResult<Prisma.$messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends messagesCountArgs>(args?: Prisma.Subset<T, messagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessagesCountAggregateOutputType> : number>;
    aggregate<T extends MessagesAggregateArgs>(args: Prisma.Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>;
    groupBy<T extends messagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: messagesGroupByArgs['orderBy'];
    } : {
        orderBy?: messagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: messagesFieldRefs;
}
export interface Prisma__messagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users_messages_receiver_idTousers<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users_messages_sender_idTousers<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface messagesFieldRefs {
    readonly message_id: Prisma.FieldRef<"messages", 'Int'>;
    readonly order_id: Prisma.FieldRef<"messages", 'Int'>;
    readonly sender_id: Prisma.FieldRef<"messages", 'Int'>;
    readonly receiver_id: Prisma.FieldRef<"messages", 'Int'>;
    readonly content: Prisma.FieldRef<"messages", 'String'>;
    readonly is_read: Prisma.FieldRef<"messages", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"messages", 'DateTime'>;
}
export type messagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type messagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type messagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type messagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.messagesCreateInput, Prisma.messagesUncheckedCreateInput>;
};
export type messagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.messagesCreateManyInput | Prisma.messagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type messagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    data: Prisma.messagesCreateManyInput | Prisma.messagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.messagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type messagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.messagesUpdateInput, Prisma.messagesUncheckedUpdateInput>;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyInput>;
    where?: Prisma.messagesWhereInput;
    limit?: number;
};
export type messagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.messagesUpdateManyMutationInput, Prisma.messagesUncheckedUpdateManyInput>;
    where?: Prisma.messagesWhereInput;
    limit?: number;
    include?: Prisma.messagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type messagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.messagesCreateInput, Prisma.messagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.messagesUpdateInput, Prisma.messagesUncheckedUpdateInput>;
};
export type messagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
    where: Prisma.messagesWhereUniqueInput;
};
export type messagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.messagesWhereInput;
    limit?: number;
};
export type messagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.messagesSelect<ExtArgs> | null;
    omit?: Prisma.messagesOmit<ExtArgs> | null;
    include?: Prisma.messagesInclude<ExtArgs> | null;
};
