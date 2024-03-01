const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./conn/db");
app.use(express.json());

// newImg
//   .save()
//   .then((result) => console.log("Document saved:"))
//   .catch((error) => console.error("Error saving document:", error));

// Example: Retrieve all documents
// Img.find({})
//   .then((data) => console.log("Retrieved data:", data))
//   .catch((error) => console.error("Error retrieving data:", error)); // const cors = require("cors");
// app.use(cors());
app.get("/", (req, res) => {
  res.send("TMKOC");
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