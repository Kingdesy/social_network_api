const { submitQuery, camelKeys } = require("~root/lib/database");

const selectLikesCount = ({ postId }) => submitQuery`
  SELECT
    COUNT(*) AS likes_count
  FROM
    post_likes
  WHERE
    post_id = ${postId}
`;

module.exports = camelKeys(selectLikesCount);
