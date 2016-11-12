//1955
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

//mongoose
require('./server/config/mongoose.js')

//routes
var routes_server = require('./server/config/routes.js')
routes_server(app)


//listen
app.listen(5000, function(){
  console.log('Listening on port 5000')
})
