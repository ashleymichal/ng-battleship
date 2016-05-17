'use strict';

/**
 * @ngdoc service
 * @name battleshipApp.gameService
 * @description
 * # gameService
 * Service in the battleshipApp.
 */
angular.module('battleshipApp')
  .service('GameService', ["$resource", 'ENV', GameService]);

function GameService($resource, ENV) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(ENV.apiEndpoint + '/games/:id.json');
}
