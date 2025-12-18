const handleAPIError = require("~root/utils/handleAPIError");
const fetchFriendships = require("~root/actions/friendships/fetchFriendships");
const newGetFriendshipsSchema = require("./schema/newGetFriendshipsSchema");

const getFriendships = async (req, res) => {
  const { userId, friendId } = req.params;

  try {
    await newGetFriendshipsSchema.validate(
      { userId, friendId },
      { abortEarly: false }
    );

    const { friendships } = await fetchFriendships({ userId, friendId });

    res.status(200).send({ friendships });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getFriendships;
