var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/index.html',
    controller: 'newController'
  })
  .when('/friends/new', {
    templateUrl: '/partials/new.html',
    controller: 'newController'
  })
  .when('/friends/:id/edit', {
    templateUrl: '/partials/edit.html',
    controller: 'editController'
  })
  .otherwise({
    redirectTo: "/"
  });
});
