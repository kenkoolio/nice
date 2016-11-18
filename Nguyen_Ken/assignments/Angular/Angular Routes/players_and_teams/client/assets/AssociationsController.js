myApp.controller('AssociationsController', ['$scope', 'playerFactory', 'teamFactory', 'associationFactory', function($scope, playerFactory, teamFactory, associationFactory){
  $scope.players = playerFactory.index();
  $scope.teams = teamFactory.index();
  $scope.associations = associationFactory.index();
  $scope.create = function(){
    var newAssociation = {player: $scope.association.player, team: $scope.association.team};
    associationFactory.create(newAssociation);
    $scope.association = {};
  };
  $scope.remove = function(index){
    associationFactory.remove(index);
  };
}]);
