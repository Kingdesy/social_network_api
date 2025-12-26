const handleAPIError = require("~root/utils/handleAPIError");
const modifyFriendships = require("~root/actions/friendships/modifyFriendships");
const newPutFriendshipsSchema = require("./schema/newPutFriendshipsSchema");

const putFriendships = async (req, res) => {
  const { userId } = req.params;

  const { status, updatedAt } = req.body;

  try {
    await newPutFriendshipsSchema.validate(
      { userId, status, updatedAt },
      { abortEarly: false }
    );

    await modifyFriendships({ userId, status, updatedAt });

    res.status(200).send({ success: true });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = putFriendships;
