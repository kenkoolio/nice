console.log('friends controller');
var mongoose = require('mongoose');
var People = mongoose.model('People');

function FriendsController(){
  this.index = function(req, res){
    People.find({}, function(err, people){
      if(err){
        console.log('Error: ', err);
      } else {
        res.json(people);
      }
    });
  };

  this.create = function(req, res){
    var newPerson = new People();
    newPerson.firstName = req.body.firstName;
    newPerson.lastName = req.body.lastName;
    newPerson.birthday = req.body.birthday;
    newPerson.save(function(err){
      if(err){
        console.log('Error: ', err);
      } else {
        res.json(newPerson);
      }
    });
  };

  this.update = function(req, res){
    People.findOne({_id: req.params.id}, function(err, person){
      person.firstName = req.body.firstName;
      person.lastName = req.body.lastName;
      person.birthday = req.body.birthday;
      person.save(function(err){
        if(err){
          console.log('Error: ', err);
        } else {
          res.json(person);
        }
      });
    });
  };

  this.delete = function(req, res){
    People.remove({_id: req.params.id}, function(err){
      if(err){
        console.log('Error: ', err);
      } else {
        res.json({text: 'done'});
      }
    });
  };

  this.show = function(req, res){
    People.findOne({_id: req.params.id}, function(err, person){
      if(err){
        console.log('Error: ', err);
      } else {
        res.json(person);
      }
    });
  };
}

module.exports = new FriendsController();
