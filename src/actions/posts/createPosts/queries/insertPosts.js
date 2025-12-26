const {
  submitQuery,
  getInsertId,
  sqlValueOrNull
} = require("~root/lib/database");

const insertPosts = ({
  userId,
  content,
  imageUrl,
  visibility,
  createdAt
}) => submitQuery`
  INSERT INTO
    posts (user_id, content, image_url, visibility, created_at)
  VALUES
    (
      ${userId},
      ${content},
      ${sqlValueOrNull(imageUrl)},
      ${sqlValueOrNull(visibility)},
      ${sqlValueOrNull(createdAt)}
    );
`;

module.exports = getInsertId(insertPosts);
