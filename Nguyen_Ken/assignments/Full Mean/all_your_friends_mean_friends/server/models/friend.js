console.log('friend model');
var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  birthday: {type: Date}
}, {timestamps: true});

mongoose.model('People', peopleSchema);
