// import express, bodyparser and mongoose
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// use express
let app = express();

// import routes
let apiRoutes = require("./api-routes");

// configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// connect to mongoose and set connection variable
mongoose.connect("mongodb://localhost/resthub", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;

// check for DB connection
if (!db) {
  console.log("Error connecting to database.");
} else {
  console.log("Database connected successfully!");
}

// port for running the app
var port = process.env.PORT || 3000;

// send message for default URL
app.get("/", (req, res) => {
  res.send("Hello world with express");
});

// use api routes in the app
app.use("/api", apiRoutes);

// launch app on specified port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
