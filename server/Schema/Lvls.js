const mongoose = require("mongoose");

const lvlSchema = new mongoose.Schema({
  img: String,
});
const lvl = new mongoose.model("Lvl", lvlSchema);
module.exports = lvl
// // const lvl1 = new lvl({
// //   img: "ckcbdsch2nf33f3",
// // });
// // lvl1.save();
