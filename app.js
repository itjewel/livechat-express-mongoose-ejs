const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

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

// error handling

// server running
app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
