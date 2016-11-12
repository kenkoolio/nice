var mongoose = require('mongoose')

var peopleSchema = new mongoose.Schema({
  name: {type: String}
})

mongoose.model('People', peopleSchema)
