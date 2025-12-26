const { submitQuery } = require("~root/lib/database");

const deletePosts = ({ postId }) => submitQuery`
  DELETE FROM
    posts
  WHERE
    post_id = ${postId} `;
module.exports = deletePosts;
