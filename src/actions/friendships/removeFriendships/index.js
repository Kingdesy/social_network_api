const deleteFriendships = require("./queries/deleteFriendships");

const removeFriendships = async ({ userId }) => {
  await deleteFriendships({ userId });
};

module.exports = removeFriendships;
