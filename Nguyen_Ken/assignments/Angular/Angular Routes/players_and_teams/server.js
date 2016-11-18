//players and teams
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    root = __dirname,
    app = express();

app.use(express.static(path.join(root, './client')))
app.use(express.static(path.join(root, './bower_components')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(5000, function(){
  console.log('Listening on port 5000')
})
