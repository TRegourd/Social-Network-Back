const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/social");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection Successful!");
});