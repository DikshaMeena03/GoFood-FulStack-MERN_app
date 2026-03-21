const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected Successfully");
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
};

module.exports = mongoDB;