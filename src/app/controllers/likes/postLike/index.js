const handleAPIError = require("~root/utils/handleAPIError");
const createLike = require("~root/actions/likes/createLike");
const newPostLikeSchema = require("./schema/newPostLikeSchema");

const postLike = async (req, res) => {
  const { userId, postId } = req.body;

  try {
    await newPostLikeSchema.validate({ userId, postId }, { abortEarly: false });

    const { success } = await createLike({ userId, postId });

    res.status(201).send({ success });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postLike;
