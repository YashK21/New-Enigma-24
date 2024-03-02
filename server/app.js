const express = require("express");
const app = express();
app.use(express.json({ limit: "15mb" }));
require("./conn/db");
const lvl = require("./Schema/Lvls");
// const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("TMKOC");
});
app.get("/lvls", async (req, res) => {
  const data = await lvl.find();
  // console.log(data)
  res.send({
    data: data,
  });
});
app.listen(5000, () => {
  console.log("Server RUNNING");
});

// app.get("/lvls", async (req, res) => {
//   try {
//     Img.find({}).then((data) => res.send(data));
//   } catch (error) {
//     (error) => console.error("Error retrieving data:", error); // const
//   }
// });
