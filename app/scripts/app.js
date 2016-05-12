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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
