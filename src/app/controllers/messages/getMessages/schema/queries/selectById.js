const { submitQuery, getFirst } = require("~root/lib/database");

const selectById = ({ messageId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
  WHERE
    message_id = ${messageId}
`;

module.exports = getFirst(selectById, "count");
