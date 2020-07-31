const express = require("express");
const app = express();
const consign = require("consign");


consign()
.then("./database/database.js")
.then("./middlewares")
.then("./function/validation.js")
.then("./models")
.then("./controller")
.then("./route")
.into(app);

module.exports=app;