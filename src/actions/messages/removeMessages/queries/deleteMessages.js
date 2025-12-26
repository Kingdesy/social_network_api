const { submitQuery } = require("~root/lib/database");

const deleteMessages = ({ messageId }) => submitQuery`
  DELETE FROM
    messages
  WHERE
    message_id = ${messageId} `;
module.exports = deleteMessages;
