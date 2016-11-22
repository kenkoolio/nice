app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location',  function($scope, friendsFactory, $routeParams, $location){
  /* GET A FRIEND FROM THE FACTORY. This is a one time thing when we load this partial - so we didn't set a variable so we could reuse it - we just run the friendsFactory method directly */
  var friendID = $routeParams.id;

  friendsFactory.show(friendID, function(returnedData){
    $scope.friend = returnedData;
    $scope.friend.birthday = new Date($scope.friend.birthday);
    $scope.friend.createdAt = new Date($scope.friend.createdAt);
    console.log($scope.friend);
  });

  /*
      OUR $scope.update function goes here <-- $scope because we need to access this method
      with ng-submit or ng-click (from the form in the previous assignment).  Want to see
      all of the friends when we get back including the updated on??
      See Index in the previous controller.
  */

  $scope.update = function(){
    var editFriend = {};
    editFriend.firstName = $scope.friend.firstName;
    editFriend.lastName = $scope.friend.lastName;
    editFriend.birthday = $scope.friend.birthday;

    friendsFactory.update(friendID, editFriend, function(returnedData){
      $scope.friend = returnedData;
      $location.url('/');
    });
  };

}]);
