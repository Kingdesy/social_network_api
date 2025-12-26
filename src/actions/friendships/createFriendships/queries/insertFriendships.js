const {
  submitQuery,
  getInsertId,
  sqlValueOrNull
} = require("~root/lib/database");

const insertFriendships = ({
  userId,
  friendId,
  status,
  updatedAt
}) => submitQuery`
 INSERT INTO friendships (user_id, friend_id, status, updated_at)
VALUES (
  ${userId}, 
  ${friendId}, 
  ${sqlValueOrNull(status)}, 
  ${sqlValueOrNull(updatedAt)}
);
`;

module.exports = getInsertId(insertFriendships);
