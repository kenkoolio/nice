//full mean
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    root = __dirname,
    app = express();

app.use(express.static(path.join(root, "./client")));
app.use(express.static(path.join(root, "./bower_components")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.get('/', function(req, res){
  res.send('<p>Welcome</p>');
})

app.listen(5000, function(){
  console.log("Listening on port 5000");
})
