const { submitQuery } = require("~root/lib/database");

const insertLike = ({ userId, postId }) => submitQuery`
  INSERT INTO post_likes (user_id, post_id)
  VALUES (${userId}, ${postId})
`;

module.exports = insertLike;
