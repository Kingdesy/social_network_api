const { sql } = require("~root/lib/database");

const selectMessages = async ({ senderId, receiverId } = {}) => {
  const messages = await sql`
    SELECT
      message_id,
      sender_id,
      receiver_id,
      message_text,
      is_read,
      created_at
    FROM messages
    WHERE 1=1
      ${senderId ? sql`AND sender_id = ${senderId}` : sql``}
      ${receiverId ? sql`AND receiver_id = ${receiverId}` : sql``}
    ORDER BY created_at DESC
  `;

  return messages;
};

module.exports = selectMessages;
