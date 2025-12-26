const handleAPIError = require("~root/utils/handleAPIError");
const fetchLikes = require("~root/actions/likes/fetchLikes");
const fetchLikesCount = require("~root/actions/likes/fetchLikesCount");
const newGetLikesSchema = require("./schema/newGetLikesSchema");

const getLikes = async (req, res) => {
  const { postId } = req.params;

  try {
    await newGetLikesSchema.validate({ postId: Number(postId) }, { abortEarly: false });

    const { likes } = await fetchLikes({ postId });
    const { likesCount } = await fetchLikesCount({ postId });

    res.status(200).send({ likes, likesCount });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getLikes;
