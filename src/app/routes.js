const express = require("express");

const { ADMIN } = require("~root/constants/userTypes");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const putPassword = require("./controllers/password-recovery/putPassword");
const postRecoveryRequest = require("./controllers/password-recovery/postRecoveryRequest");
const healthcheck = require("./platform/healthcheck");
const getUsers = require("./controllers/users/getUsers");
const getComments = require("./controllers/comments/getComments");
const getFriendships = require("./controllers/friendships/getFriendships");
const getMessages = require("./controllers/messages/getMessages");
const postMessages = require("./controllers/messages/postMessages");
const putMessages = require("./controllers/messages/putMessages");
const deleteMessages = require("./controllers/messages/deleteMessages");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);

router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);

router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.post("/recovery-request", postRecoveryRequest);

router.put("/update-password/:shortcode", putPassword);

router.get("/healthcheck", healthcheck);

router.get("/users", getUsers);
router.get("/comments/:postId", getComments);
router.get("/friendships", getFriendships);
router.get("/messages/:senderId/:receiverId", getMessages);
router.post("/messages", postMessages);
router.put("/messages", putMessages);
router.delete("/messages", deleteMessages);
module.exports = router;
