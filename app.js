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
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const app = express();
// request process
app.use(express.json());
// query param pass
app.use(express.urlencoded({ extends: true }));
dotenv.config();

// Database Connection
main().catch((err) => console.log(err));
async function main() {
  try {
    await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING);
  console.log("db connection success");
  } catch (error) {
    console.log("db connection failed");
  }
  
}

// View engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found handeler
app.use(notFoundHandler);

// Default error handeler
app.use(errorHandler);

// server running
app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
