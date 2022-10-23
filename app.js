// External Imports
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Internal Imports
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorhandler");

const app = express();
// request process
app.use(express.json());
// query param pass
app.use(express.urlencoded({ extends: true }));
dotenv.config();

// Database Connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING);
}

// View engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

// 404 not found handeler
app.use(notFoundHandler);

// Default error handeler
app.use(errorHandler);

// server running
app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
