const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/GetFoodMERN';



const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected Successfully");

   
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1);
  }
};

module.exports = mongoDB;