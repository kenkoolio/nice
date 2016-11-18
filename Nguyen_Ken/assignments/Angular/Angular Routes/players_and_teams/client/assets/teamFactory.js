myApp.factory('teamFactory', function(){
  var teams = [];
  return {
    index: function(){
      return teams;
    },

    create: function(newTeam){
      teams.push(newTeam);
    },

    remove: function(index){
      teams.splice(index, 1);
    }
  };
});
