// wolves eat mongeese
"use strict";
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

//config
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//mongoose
mongoose.connect("mongodb://localhost/wolves_db", function(err){
  if(err){
    console.log("Database connection error: ", err);
  };
});

var wolvesSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number},
  status: {type: String}
}, {timestamps: true});

var Wolf = mongoose.model("Wolf", wolvesSchema);

//routes
app.get('/', function(req, res){
  Wolf.find({}, function(err, returnedWolves){
    if(err){
      console.log("Error: ", err);
    } else {
      res.render('index', {wolves: returnedWolves})
    };
  });
});

app.get('/wolves/new', function(req, res){
  res.render('new');
});

app.post('/wolves', function(req, res){
  var wolf = new Wolf({name: req.body.name, age: parseInt(req.body.age), status: req.body.status});
  wolf.save(function(err, newWolf){
    if(err){
      console.log("Error: ", err);
    } else {
      console.log("Success! New wolf added..", newWolf);
    };
  });
  res.redirect('/');
})

app.get('/wolves/:id', function(req, res){
  Wolf.findOne({_id: req.params.id}, function(err, returnedWolf){
    if(err){
      console.log('Error: ', err);
    } else {
      res.render('show', {wolf: returnedWolf});
    };
  });
});

app.get('/wolves/:id/edit', function(req, res){
  Wolf.findOne({_id: req.params.id}, function(err, returnedWolf){
    if(err){
      console.log("Error: ", err);
    } else {
      res.render('edit', {wolf: returnedWolf});
    };
  });
});

app.post('/wolves/:id', function(req, res){
  Wolf.update({_id: req.params.id}, {
    name: req.body.name,
    age: parseInt(req.body.age),
    status: req.body.status
  }, function(err){
    if(err){
      console.log("Error: ", err);
    };
  });
  res.redirect('/');
});

app.post('/wolves/:id/destroy', function(req, res){
  Wolf.remove({_id: req.params.id}, function(err){
    if(err){
      console.log("Error: ", err);
    };
  });
  res.redirect('/');
});

// listen
app.listen(5000, function(){
  console.log("Listening on port 5000");
});
