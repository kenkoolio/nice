myApp.factory('associationFactory', function(){
  var associations = [];
  return {
    index: function(){
      return associations;
    },

    create: function(associationObj){
      associations.push(associationObj);
    },

    remove: function(index){
      associations.splice(index, 1);
    }
  };
});
