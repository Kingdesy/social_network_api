const handleAPIError = require("~root/utils/handleAPIError");
const removeFriendships = require("~root/actions/friendships/removeFriendships");
const newDeleteFriendshipsSchema = require("./schema/newDeleteFriendshipsSchema");

const deleteFriendships = async (req, res) => {
  const { userId } = req.params;

  try {
    await newDeleteFriendshipsSchema.validate(
      { userId },
      { abortEarly: false }
    );

    await removeFriendships({ userId });

    res.status(204).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteFriendships;
