'use strict';

class BadRequest extends Error {
  constructor(message) {
    // Call constructor for Error
    super(message);

    this.name = this.constructor.name;
    this.message = message;
    this.status = 400;

    // Don't capture this function in the stack
    Error.captureStackTrace(this, this.constructor);
  }
}

class Unauthorized extends Error {
  constructor(message) {
    // Call constructor for Error
    super(message);

    this.name = this.constructor.name;
    this.message = message;
    this.status = 401;

    // Don't capture this function in the stack
    Error.captureStackTrace(this, this.constructor);
  }
}

class Forbidden extends Error {
  constructor(message) {
    // Call constructor for Error
    super(message);

    this.name = this.constructor.name;
    this.message = message;
    this.status = 403;

    // Don't capture this function in the stack
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFound extends Error {
  constructor(message) {
    // Call constructor for Error
    super(message);

    this.name = this.constructor.name;
    this.message = message;
    this.status = 404;

    // Don't capture this function in the stack
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { BadRequest, Unauthorized, Forbidden, NotFound };