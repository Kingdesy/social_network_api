declare module "~root/actions/messages/fetchMessages" {
  export type Message = {
    message_id: number;
    sender_id: number;
    receiver_id: number;
    message_text: string;
    is_read: number;
    created_at: string;
  };

  export type FetchMessagesResult = {
    messages: Message[];
  };

  export type FetchMessagesArguments = {
    senderId?: number;
    receiverId?: number;
  };

  const fetchMessages: (
    args: FetchMessagesArguments
  ) => Promise<FetchMessagesResult>;

  export = fetchMessages;
}
