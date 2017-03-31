var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    views: {
      'main': {
        templateUrl: '/views/home.html',
        controller: 'HomeController'
      }
    }
  });
});
