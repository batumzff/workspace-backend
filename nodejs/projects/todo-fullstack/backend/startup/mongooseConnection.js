const mongoose = require("mongoose");
const { CustomError } = require("../errors/customError");

const mongooseConnection = async () => {
  try {
    if (!process.env.MONGODB_URI)
      throw new CustomError("Mongodb url is required");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db not connected");
    throw new CustomError("db connection is failed");
  }
};

module.exports = { mongooseConnection };
