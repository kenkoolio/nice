app.controller('newController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location){
  /* This index method access the friends factory a runs the friends index. We might reuse index a few times, so to minimize repetition we set it as a variable
  */

  var index = function(){
                friendsFactory.index(function(returnedData){
                  $scope.friends = returnedData;
                  console.log($scope.friends);
                });
  };
  index(); //invoke it on start

  /* our $scope.create function goes here <-- $scope because we need to access this method with ng-submit or ng-click (from the form in the previous assignment). Want to all of the friends when we get back? We can re-run index.
  */

  $scope.create = function(){
                    var newFriend = {};
                    newFriend.name = $scope.newFriend.name;
                    friendsFactory.create(newFriend, function(returnedData){
                      $scope.newFriendly = returnedData;
                      console.log(returnedData);
                      $location.url('/');
                    });
  }
}]);
