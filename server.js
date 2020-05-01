var express = require("express");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 3000;

app.use(cors());

var Users = require("./routes/User");

app.use("/users", Users);

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
