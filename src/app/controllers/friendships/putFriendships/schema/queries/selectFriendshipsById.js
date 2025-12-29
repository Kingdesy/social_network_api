const { submitQuery, getFirst } = require("~root/lib/database");

const selectFriendshipsById = ({ userId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    friendships
  WHERE
    user_id = ${userId}
`;

module.exports = getFirst(selectFriendshipsById, "count");
