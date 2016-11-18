myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/associations.html',
    controller: 'AssociationsController'
  })
  .when('/players', {
    templateUrl: '/partials/players.html',
    controller: 'PlayersController'
  })
  .when('/teams', {
    templateUrl: '/partials/teams.html',
    controller: 'TeamsController'
  })
  .when('/associations', {
    templateUrl: '/partials/associations.html',
    controller: 'AssociationsController'
  })
  .otherwise({
    redirectTo: '/'
  })
});
