app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
  $scope.addUser = function(){
    userFactory.create($scope.user, function passedToUserFactoryCreate(users){
      $scope.users = users;
    });
    console.log($scope.user);
    $location.url('/index');
  }
}]);
