var mongoose = require('mongoose');
var Wolf = mongoose.model('Wolf');

module.exports = {
  index: function(req, res){
            Wolf.find({}, function(err, returnedWolves){
              if(err){
                console.log("Error: ", err);
              } else {
                res.render('index', {wolves: returnedWolves});
              }
            })
  },

  create: function(req, res){
            var wolf = new Wolf({name: req.body.name, age: parseInt(req.body.age), status: req.body.status});
            wolf.save(function(err, newWolf){
              if(err){
                console.log("Error: ", err);
              } else {
                console.log("Success! New wolf added..", newWolf);
              }
            })
            res.redirect('/');
  },

  show: function(req, res){
            Wolf.findOne({_id: req.params.id}, function(err, returnedWolf){
              if(err){
                console.log('Error: ', err);
              } else {
                res.render('show', {wolf: returnedWolf});
              }
            })
  },

  edit: function(req, res){
            Wolf.findOne({_id: req.params.id}, function(err, returnedWolf){
              if(err){
                console.log("Error: ", err);
              } else {
                res.render('edit', {wolf: returnedWolf});
              }
            })
  },

  update: function(req, res){
            Wolf.update({_id: req.params.id}, {
              name: req.body.name,
              age: parseInt(req.body.age),
              status: req.body.status
            }, function(err){
              if(err){
                console.log("Error: ", err);
              }
            })
            res.redirect('/');
  },

  destroy: function(req, res){
            Wolf.remove({_id: req.params.id}, function(err){
              if(err){
                console.log("Error: ", err);
              }
            })
            res.redirect('/');
  }
}
