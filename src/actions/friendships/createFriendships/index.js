const insertFriendships = require("./queries/insertFriendships");

const createFriendships = async ({ userId, friendId, status, updatedAt }) => {
  const insertedFriendshipId = await insertFriendships({
    userId,
    friendId,
    status,
    updatedAt
  });

  return { insertedFriendshipId };
};

module.exports = createFriendships;
