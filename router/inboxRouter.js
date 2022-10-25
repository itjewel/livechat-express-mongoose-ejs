const express = require("express");
const router = express.Router();
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
// middleware that is specific to this router

// define the home page route
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
