console.log('friend model');
var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
  name: {type: String}
});

mongoose.model('People', peopleSchema);
