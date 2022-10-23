// 404 not found handler
const createError = require("http-errors");
function notFoundHandler(req, res, next) {
  return next(createError(401, "Your requested content was not found!"));
}

// Default error handler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 5000);

  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
