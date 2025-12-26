const { submitQuery, getFirst } = require("~root/lib/database");

const selectMessagesById = ({ messageId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    messages
  WHERE
    message_id = ${messageId}
`;

module.exports = getFirst(selectMessagesById, "count");
