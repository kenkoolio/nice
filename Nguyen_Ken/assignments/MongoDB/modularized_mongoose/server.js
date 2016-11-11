// wolves eat mongeese
"use strict";
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

//setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

//mongoose
require('./server/config/mongoose.js');

//routes
var routes_setup = require('./server/config/routes.js');
routes_setup(app);

// listen
app.listen(5000, function(){
  console.log("Listening on port 5000");
})
