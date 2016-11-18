myApp.controller('UserListsController', ['$scope', 'userFactory', function($scope, userFactory){
  $scope.users = userFactory.index();
}]);
