const { submitQuery, camelKeys } = require("~root/lib/database");

const selectMessages = ({ messageId }) => submitQuery`
  SELECT
    sender_id,
    receiver_id,
    message_text,
    is_read,
    created_at
  FROM
    messages
  WHERE
    message_id = ${messageId}
`;

module.exports = camelKeys(selectMessages);
