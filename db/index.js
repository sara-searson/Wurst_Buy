const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://michaeltibbetts1:56BRK05HiuK6j8MO@student-cluster.t8y9r.mongodb.net/wurstBuyDatabase?retryWrites=true&w=majority&appName=student-cluster"
  ) //Alter this with Atlas link from Michael
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
