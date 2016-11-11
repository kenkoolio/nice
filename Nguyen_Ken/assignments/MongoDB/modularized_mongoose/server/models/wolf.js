var mongoose = require('mongoose');

var wolvesSchema = new mongoose.Schema({
  name: {type: String},
  age: {type: Number},
  status: {type: String}
}, {timestamps: true});

var Wolf = mongoose.model("Wolf", wolvesSchema);
