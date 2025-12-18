const { submitQuery, getFirst } = require("~root/lib/database");

const selectFriendshipsById = ({ friendId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    friendships
  WHERE
    friend_id = ${friendId}
`;

module.exports = getFirst(selectFriendshipsById, "count");
