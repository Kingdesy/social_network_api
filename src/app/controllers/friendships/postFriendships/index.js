const handleAPIError = require("~root/utils/handleAPIError");
const createFriendships = require("~root/actions/friendships/createFriendships");

const postFriendships = async (req, res) => {
  const { userId, friendId, status, updatedAt } = req.body;

  try {
    const { insertedFriendshipId } = await createFriendships({
      userId,
      friendId,
      status,
      updatedAt
    });

    res.status(201).send({ insertedFriendshipId });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postFriendships;
