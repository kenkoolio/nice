var mongoose = require('mongoose')
var People = mongoose.model('People')

module.exports = {
  index: function(req, res){
              People.find({}, function(err, people){
                if(err){
                  console.log(err)
                } else {
                  res.json(people)
                }
              })
  },

  create: function(req, res){
              var newName = req.params.name
              var person = new People({name: newName})
              person.save(function(err){
                if(err){
                  console.log(err)
                } else {
                  res.redirect('/')
                }
              })
  },

  destroy: function(req, res){
              var findName = req.params.name
              People.remove({name: findName}, function(err){
                if(err){
                  console.log(err)
                }
                res.redirect('/')
              })
  },

  show: function(req, res){
              var findName = req.params.name
              People.findOne({name: findName}, function(err, person){
                if(err){
                  console.log(err)
                } else {
                  res.json(person)
                }
              })
  }
}
