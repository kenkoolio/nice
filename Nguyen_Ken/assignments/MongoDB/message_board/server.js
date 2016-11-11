//message board
"use_strict";
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')
var session = require('express-session')
var flash = require('connect-flash')
var app = express()

//config
app.use(session({secret: 'secret-squirrel'}))
app.use(flash())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, "./views"))
app.set('view engine', 'ejs')

//mongoose
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/message_board')

var messageSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  message: {type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

var commentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: {type: String, required: true, minlength: 4},
  comment: {type: String, required: true}
}, {timestamps: true})

var Message = mongoose.model('Message', messageSchema)
var Comment = mongoose.model('Comment', commentSchema)

//routes
app.get('/', function(req, res){
  Message.find({}).populate('comments').exec(function(err, messages){
    if(err){
      console.log("Error: ", err)
    } else {
      res.render('index', {messages: messages, mErrors: req.flash('mErrors')[0], cErrors: req.flash('cErrors')[0]})
    }
  })
})

app.post('/messages', function(req, res){
  var newMessage = new Message()
  newMessage.name = req.body.name
  newMessage.message = req.body.message
  newMessage.save(function(err){
    if(err){
      req.flash('mErrors', newMessage.errors)
    }
    res.redirect('/')
  })
})

app.post('/comments/:id', function(req, res){
  Message.findOne({_id: req.params.id}, function(err, msg){
    var newComment = new Comment()
    newComment._message = msg._id
    newComment.name = req.body.name
    newComment.comment = req.body.comment

    newComment.save(function(err){
      if(err){
        console.log(err)
        req.flash('cErrors', newComment.errors)
        res.redirect('/')
      } else {
        msg.comments.push(newComment)
        msg.save(function(err){
          if(err){
            console.log(err)
          } else {
            res.redirect('/')
          }
        })
      }
    })
  })
})

//listen
app.listen(5000, function(){
  console.log("Listening on port 5000")
})
