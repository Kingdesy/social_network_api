const { submitQuery, getFirst } = require("~root/lib/database");

const selectUsersById = ({ userId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    users
  WHERE
    user_id = ${userId}
`;

module.exports = getFirst(selectUsersById, "count");
