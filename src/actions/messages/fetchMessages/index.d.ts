declare module "~root/actions/messages/fetchMessages" {
  export type Messages = {
    senderId: number;
    receiverId: number;
    messageText: any;
    isRead: boolean | null;
    createdAt: Date | null;
  };

  export type FetchMessagesResult = {
    messages: Messages[];
  };

  export type FetchMessagesArguments = { messageId: number };

  const fetchMessages: (
    args: FetchMessagesArguments
  ) => Promise<FetchMessagesResult>;

  export = fetchMessages;
}
