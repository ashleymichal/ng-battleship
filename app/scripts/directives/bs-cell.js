'use strict';

/**
 * @ngdoc directive
 * @name battleshipApp.directive:bsCell
 * @description
 * # bsCell
 */
angular.module('battleshipApp')
  .directive('bsCell', function () {
    return {
      templateUrl: 'views/bs-cell.html',
      restrict: 'E'
    };
  });
