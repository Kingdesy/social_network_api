const updateFriendships = require("./queries/updateFriendships");

const modifyFriendships = async ({ userId, status, updatedAt }) => {
  await updateFriendships({ userId, status, updatedAt });
};

module.exports = modifyFriendships;
