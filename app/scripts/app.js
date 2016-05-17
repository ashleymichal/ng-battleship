'use strict';

/**
 * @ngdoc overview
 * @name battleshipApp
 * @description
 * # battleshipApp
 *
 * Main module of the application.
 */
angular
  .module('battleshipApp', [
    'config',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/games/new.html'
        })
        .when('/games/:id', {
          templateUrl: 'views/games/show.html',
          controller: 'GameCtrl',
          controllerAs: 'game'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
