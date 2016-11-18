myApp.controller('PlayersController', ['$scope', 'playerFactory', '$location', function($scope, playerFactory, $location){
  $scope.players = playerFactory.index();
  $scope.create = function(){
    var newPlayer = { name: $scope.newPlayer.name }
    playerFactory.create(newPlayer);
    $scope.newPlayer = {};
    $location.url('/');
  };
  $scope.remove = function(index){
    playerFactory.remove(index);
    $location.url('/');
  };
}]);
