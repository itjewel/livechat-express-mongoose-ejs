const express = require("express");
const router = express.Router();
const { getUsers, addedUser } = require("../controller/usersController");
const avatarUpload = require('../middlewares/users/avatarUpload');
// middleware that is specific to this router
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");


// define the home page route
router.get("/", decorateHtmlResponse("Users"), getUsers);

router.post("/", avatarUpload, addedUser);

module.exports = router;
