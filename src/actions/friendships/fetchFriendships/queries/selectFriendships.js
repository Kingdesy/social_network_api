const { submitQuery, camelKeys } = require("~root/lib/database");

const selectFriendships = ({ userId, friendId }) => submitQuery`
  SELECT
    status,
    updated_at
  FROM
    friendships
  WHERE
    user_id = ${userId}
    AND friend_id = ${friendId}
`;

module.exports = camelKeys(selectFriendships);
