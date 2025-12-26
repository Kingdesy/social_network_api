const { submitQuery, camelKeys } = require("~root/lib/database");

const selectLikes = ({ postId }) => submitQuery`
  SELECT
    pl.user_id,
    pl.post_id,
    pl.created_at,
    CONCAT(u.first_name, ' ', u.last_name) AS full_name,
    u.profile_pic_url
  FROM
    post_likes pl
  INNER JOIN 
    users u ON pl.user_id = u.user_id
  WHERE
    pl.post_id = ${postId}
  ORDER BY 
    pl.created_at DESC
`;

module.exports = camelKeys(selectLikes);
