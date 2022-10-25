const express = require("express");
const router = express.Router();
const { getUsers } = require("../controller/usersController");
// middleware that is specific to this router
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// define the home page route
router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
