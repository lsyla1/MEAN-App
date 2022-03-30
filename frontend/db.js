const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/employee", (err) => {
  if (!err) {
    console.log("DB Connection Successful");
  } else {
    console.log("Error in DB connection" + err);
  }
});

module.exports = mongoose;
