myApp.controller('ordersController', ['$scope', 'productFactory', function($scope, productFactory){
  $scope.allProducts = productFactory.index();
  $scope.buy = function(productName){
    productFactory.decQty(productName);
  };

  var count = 0;
  $scope.sortPrice = "";
  $scope.order = function(){
    if (count == 0){
      $scope.sortPrice = "price";
      count = 1;
    } else {
      $scope.sortPrice = "-price";
      count = 0;
    };
  };
}]);
