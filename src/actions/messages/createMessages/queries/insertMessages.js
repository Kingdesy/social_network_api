const {
  submitQuery,
  getInsertId,
  sqlValueOrNull
} = require("~root/lib/database");

const insertMessages = ({
  senderId,
  receiverId,
  messageText,
  isRead,
  createdAt
}) => submitQuery`
  INSERT INTO
    messages (
      sender_id,
      receiver_id,
      message_text,
      is_read,
      created_at
    )
  VALUES
    (
      ${sqlValueOrNull(senderId)},
      ${sqlValueOrNull(receiverId)},
      ${sqlValueOrNull(messageText)},
      ${sqlValueOrNull(isRead)},
      ${sqlValueOrNull(createdAt)}
    );
`;

module.exports = getInsertId(insertMessages);
