'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the battleshipApp
 */

angular.module('battleshipApp')
  .controller('GameCtrl', ["$scope", "$routeParams", "GameService", GameCtrl]);

function GameCtrl($scope, $routeParams, GameService) {
  GameService.get({ id: $routeParams.id }, function(game){
    $scope.game = game;
  });
}