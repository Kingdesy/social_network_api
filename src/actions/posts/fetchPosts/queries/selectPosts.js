const { submitQuery, camelKeys } = require("~root/lib/database");

const selectPosts = () => submitQuery`
  SELECT
    user_id,
    first_name,
    last_name,
    content,
    profile_pic_url,
    image_url,
    visibility,
    created_at
  FROM
    posts
     LEFT JOIN users ON posts.user_id = users.user_id
`;

module.exports = camelKeys(selectPosts);
