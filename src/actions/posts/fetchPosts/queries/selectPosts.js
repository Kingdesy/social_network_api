const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPosts = ({ postId }) => submitQuery`
  SELECT
    user_id,
    content,
    image_url,
    visibility,
    created_at
  FROM
    posts
  WHERE
    post_id = ${postId}
`;

module.exports = camelKeys(selectPosts);
