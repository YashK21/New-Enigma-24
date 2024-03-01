const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("./conn/db");
app.use(express.json());
require("./Schema/Lvls.js")
const Lvls = mongoose.model("LvlDetails")
const cors = require("cors");
app.use(cors());
app.get("/",(req,res)=>{
res.send("TMKOC")
})
app.listen(5000, () => {
  console.log("Server RUNNING");
});
