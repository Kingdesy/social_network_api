const { submitQuery, getFirst } = require("~root/lib/database");

const selectPostsById = ({ postId }) => submitQuery`
  SELECT
    COUNT(*) AS count
  FROM
    posts
  WHERE
    post_id = ${postId}
`;

module.exports = getFirst(selectPostsById, "count");
