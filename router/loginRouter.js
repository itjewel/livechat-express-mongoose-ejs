const express = require("express");
const router = express.Router();

// internal Exports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// define the home page route
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
