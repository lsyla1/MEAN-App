const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db.js");
const routes = require("./routes/routes.js");

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.static("frontend/dist"));

// LOCALLY
//const port = 3000;

//Setup for Heroku
const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Server started at port : 3000"));

app.use("/employees", routes);
