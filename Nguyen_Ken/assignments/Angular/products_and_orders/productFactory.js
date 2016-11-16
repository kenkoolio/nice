myApp.factory('productFactory', function(){
  var productObj = {};
  productObj.productList = [];
  productObj.add = function(product){
    productObj.productList.push(product);
  };
  productObj.delete = function(productIdx){
    productObj.productList.splice(productIdx, 1);
  };
  productObj.index = function(){
    return productObj.productList;
  };
  productObj.decQty = function(productName){
    var arr = productObj.productList
    for (var i=0; i<arr.length; i++){
      if (arr[i].name === productName){
        arr[i].quantity > 0 ? arr[i].quantity -= 1 : null;
      };
    };
  };
  return productObj;
});
