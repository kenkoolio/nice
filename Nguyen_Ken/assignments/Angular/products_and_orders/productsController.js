myApp.controller('productsController', ['$scope', 'productFactory', function($scope, productFactory){
  $scope.allProducts = productFactory.index();
  $scope.newProduct = {quantity:50};
  $scope.addProduct = function(){
    productFactory.add($scope.newProduct);
    $scope.newProduct = {quantity:50};
  };
  $scope.deleteProduct = function(index){
    productFactory.delete(index);
  };

  $scope.sortPrice = "";
  var count = 0;
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
