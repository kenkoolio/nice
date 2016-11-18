myApp.controller('CustomizeUsersController', ['$scope', 'userFactory', function($scope, userFactory){
  $scope.users = userFactory.index();
  $scope.createUser = function(){
    userFactory.create({
      firstName: $scope.newUser.firstName,
      lastName: $scope.newUser.lastName,
      language: $scope.newUser.language
    });

    $scope.newUser = {};
  };
  $scope.deleteUser = function(index){
    userFactory.delete(index);
  };
}]);
