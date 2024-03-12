"use strict";

class CustomError extends Error {
  name = "customError";
  constructor(message, statusCode = 500) {
    super(message);
  }
}

module.exports = { CustomError };
