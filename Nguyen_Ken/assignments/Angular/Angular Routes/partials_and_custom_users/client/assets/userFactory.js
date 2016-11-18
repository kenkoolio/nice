myApp.factory('userFactory', function(){
  var users = [];
  var userObj = {};
  userObj.index = function(){
    return users;
  };
  userObj.create = function(user){
    users.push(user);
  };
  userObj.delete = function(index){
    users.splice(index, 1);
  };
  userObj.show = function(index){
    return users[index];
  }
  return userObj;
});
