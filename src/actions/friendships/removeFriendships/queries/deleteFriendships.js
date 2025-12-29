const { submitQuery } = require("~root/lib/database");

const deleteFriendships = ({ userId }) => submitQuery`
  DELETE FROM
    friendships
  WHERE
    user_id = ${userId} `;
module.exports = deleteFriendships;
