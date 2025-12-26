const {
  submitQuery,
  sql,
  sqlReduce,
  sqlValueOrNull
} = require("~root/lib/database");

const NO_UPDATE = Symbol("NO_UPDATE");

const updateMessages = ({
  messageId,
  senderId = NO_UPDATE,
  receiverId = NO_UPDATE,
  messageText = NO_UPDATE,
  isRead = NO_UPDATE,
  createdAt = NO_UPDATE
}) => {
  const updates = [];
  if (senderId !== NO_UPDATE) {
    updates.push(sql`sender_id = ${sqlValueOrNull(senderId)} `);
  }

  if (receiverId !== NO_UPDATE) {
    updates.push(sql`receiver_id = ${sqlValueOrNull(receiverId)} `);
  }

  if (messageText !== NO_UPDATE) {
    updates.push(sql`message_text = ${sqlValueOrNull(messageText)} `);
  }

  if (isRead !== NO_UPDATE) {
    updates.push(sql`is_read = ${sqlValueOrNull(isRead)} `);
  }

  if (createdAt !== NO_UPDATE) {
    updates.push(sql`created_at = ${sqlValueOrNull(createdAt)} `);
  }

  if (updates.length !== 0) {
    return submitQuery`
        UPDATE 
          messages 
        SET 
          ${updates.reduce(sqlReduce)} 
        WHERE 
          message_id = ${messageId} `;
  }

  return Promise.resolve();
};

module.exports = updateMessages;
