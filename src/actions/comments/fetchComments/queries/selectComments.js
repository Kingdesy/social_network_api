const { submitQuery, camelKeys } = require("~root/lib/database");

const selectComments = ({ postId }) => submitQuery`
  SELECT
    c.comment_id,
    c.user_id,
    c.comment_text,
    c.created_at,
    CONCAT(u.first_name, ' ', u.last_name) AS full_name,
    u.profile_pic_url,
    u.user_id
  FROM
    comments c
  INNER JOIN 
    users u ON c.user_id = u.user_id
  WHERE
    c.post_id = ${postId}
  ORDER BY 
    c.created_at DESC
`;

module.exports = camelKeys(selectComments);
