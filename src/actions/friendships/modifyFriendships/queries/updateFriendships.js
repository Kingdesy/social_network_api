const {
  submitQuery,
  sql,
  sqlReduce,
  sqlValueOrNull
} = require("~root/lib/database");

const NO_UPDATE = Symbol("NO_UPDATE");

const updateFriendships = ({
  userId,
  status = NO_UPDATE,
  updatedAt = NO_UPDATE
}) => {
  const updates = [];
  if (status !== NO_UPDATE) {
    updates.push(sql`status = ${sqlValueOrNull(status)} `);
  }

  if (updatedAt !== NO_UPDATE) {
    updates.push(sql`updated_at = ${sqlValueOrNull(updatedAt)} `);
  }

  if (updates.length !== 0) {
    return submitQuery`
        UPDATE 
          friendships 
        SET 
          ${updates.reduce(sqlReduce)} 
        WHERE 
          user_id = ${userId} `;
  }

  return Promise.resolve();
};

module.exports = updateFriendships;
