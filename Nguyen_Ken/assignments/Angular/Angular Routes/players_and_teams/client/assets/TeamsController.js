myApp.controller('TeamsController', ['$scope', 'teamFactory', '$location', function($scope, teamFactory, $location){
  $scope.teams = teamFactory.index();
  $scope.create = function(){
    var newTeam = { name: $scope.newTeam.name };
    teamFactory.create(newTeam);
    $scope.newTeam = {};
    $location.url('/');
  };
  $scope.remove = function(index){
    teamFactory.remove(index);
    $location.url('/');
  };
}]);
