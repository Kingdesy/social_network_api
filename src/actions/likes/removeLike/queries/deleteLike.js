const { submitQuery } = require("~root/lib/database");

const deleteLike = ({ userId, postId }) => submitQuery`
  DELETE FROM post_likes
  WHERE user_id = ${userId} AND post_id = ${postId}
`;

module.exports = deleteLike;
