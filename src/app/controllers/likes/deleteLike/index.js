const handleAPIError = require("~root/utils/handleAPIError");
const removeLike = require("~root/actions/likes/removeLike");
const newDeleteLikeSchema = require("./schema/newDeleteLikeSchema");

const deleteLike = async (req, res) => {
  const { userId, postId } = req.body;

  try {
    await newDeleteLikeSchema.validate({ userId, postId }, { abortEarly: false });

    const { success } = await removeLike({ userId, postId });

    res.status(200).send({ success });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteLike;
