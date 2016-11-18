myApp.factory('playerFactory', function(){
  var players = [];
  return {
    index: function(){
      return players;
    },

    create: function(playerObj){
      players.push(playerObj);
    },

    remove: function(index){
      players.splice(index, 1);
    }
  };
});
