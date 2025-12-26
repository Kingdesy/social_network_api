const {
  submitQuery,
  sql,
  sqlReduce,
  sqlValueOrNull
} = require("~root/lib/database");

const NO_UPDATE = Symbol("NO_UPDATE");

const updatePosts = ({
  postId,
  userId = NO_UPDATE,
  content = NO_UPDATE,
  imageUrl = NO_UPDATE,
  visibility = NO_UPDATE,
  createdAt = NO_UPDATE
}) => {
  const updates = [];
  if (userId !== NO_UPDATE) {
    updates.push(sql`user_id = ${userId} `);
  }

  if (content !== NO_UPDATE) {
    updates.push(sql`content = ${content} `);
  }

  if (imageUrl !== NO_UPDATE) {
    updates.push(sql`image_url = ${sqlValueOrNull(imageUrl)} `);
  }

  if (visibility !== NO_UPDATE) {
    updates.push(sql`visibility = ${sqlValueOrNull(visibility)} `);
  }

  if (createdAt !== NO_UPDATE) {
    updates.push(sql`created_at = ${sqlValueOrNull(createdAt)} `);
  }

  if (updates.length !== 0) {
    return submitQuery`
        UPDATE 
          posts 
        SET 
          ${updates.reduce(sqlReduce)} 
        WHERE 
          post_id = ${postId} `;
  }

  return Promise.resolve();
};

module.exports = updatePosts;
