//quoting dojo redux
"use_strict";
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var dt = require('datetimejs')
var app = express()

//config
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "./static")))

app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs")

//mongoose
mongoose.connect("mongodb://localhost/quotes_dojo")
var quoteSchema = new mongoose.Schema({
  name: {type: String},
  quote: {type: String},
  likes: {type: Number}
}, {timestamps: true})

var Quote = mongoose.model("Quote", quoteSchema)

//routes
app.get('/', function(req, res){
  res.render('index')
})

app.get('/quotes', function(req, res){
  Quote.find({}).sort({likes: -1}).exec(function(err, quotes){
    if(err){
      console.log("Error: ", err)
    } else {
      res.render('quotes', {quotes: quotes})
    }
  })
})

app.post('/quotes', function(req, res){
  var quote = new Quote({
    name: req.body.name,
    quote: req.body.quote,
    likes: 0
  })
  quote.save(function(err){
    if(err){
      console.log("Error: ", err)
    } else {
      res.redirect('/quotes')
    }
  })
})

app.post('/likes/:id', function(req, res){
  Quote.update({_id: req.params.id}, {$inc: {likes: 1}}, function(err){
    if(err){
      console.log("Error: ", err)
    } else {
      res.redirect('/quotes')
    }
  })
})

//listen
app.listen(5000, function(){
  console.log('Listening on port 5000')
})
