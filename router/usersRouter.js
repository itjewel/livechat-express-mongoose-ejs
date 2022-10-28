const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const avatarUpload = require("../middlewares/users/avatarUpload");
// middleware that is specific to this router
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

// define the home page route
router.get("/", decorateHtmlResponse("Users"), getUsers);

router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

router.delete("/:id", removeUser);

module.exports = router;
