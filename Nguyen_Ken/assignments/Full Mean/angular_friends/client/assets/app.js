var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/friends/new', {
    templateUrl: '/partials/new.html',
    controller: 'newController'
  })
  .when('/friends/edit', {
    templateUrl: '/partials/edit.html',
    controller: 'editController'
  })
  .otherwise({
    redirectTo: "/"
  })
});
