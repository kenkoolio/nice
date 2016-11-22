console.log('Friends Factory');

app.factory('friendsFactory', ['$http', function($http){
  var friends = [];
  var friend = {};


  function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend, callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    }

    this.update = function(friendID, editFriend, callback){
      $http.put('/friends/'+friendID, editFriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
    };

    this.delete = function(friendID, callback){
      $http.delete('/friends/'+friendID).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.show = function(friendID, callback){
      $http.get('/friends/'+friendID).then(function(returned_data){
        console.log("Factory show: ", returned_data);
        friend = returned_data.data;
        if(typeof(callback)=='function'){
          callback(returned_data.data);
        }
      });
    };

    // sometimes you might not want to make a DB call, and just get the information stored in the factory.

    this.getFriends = function(callback){
      callback(friends);
    };

    this.getFriend = function(callback){
      callback(friend);
    };
  }

  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
