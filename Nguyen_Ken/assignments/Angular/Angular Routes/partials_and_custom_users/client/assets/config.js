myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: "/partials/customizeUsers.html",
    controller: "CustomizeUsersController"
  })
  .when('/users', {
    templateUrl: "/partials/customizeUsers.html",
    controller: "CustomizeUsersController"
  })
  .when('/list', {
    templateUrl: "/partials/userList.html",
    controller: "UserListsController"
  })
  .otherwise({
    redirectTo: "/"
  });
});
