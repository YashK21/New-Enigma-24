const mongoose = require("mongoose");
const config = require("../config.json");
require("../Schema/Lvls")
const connectDB = async () => {
  try {
    await mongoose.connect(config.db);
  } catch (err) {
    console.log(err);
  }
  console.log("DB Connected");
};
connectDB();
