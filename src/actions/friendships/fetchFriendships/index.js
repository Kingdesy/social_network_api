const selectFriendships = require("./queries/selectFriendships");

const fetchFriendships = async ({ userId, friendId }) => {
  const friendships = await selectFriendships({ userId, friendId });

  return { friendships };
};

module.exports = fetchFriendships;
