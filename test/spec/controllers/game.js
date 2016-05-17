'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('battleshipApp'));

  var GameCtrl, GameService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_GameService_, $controller, $rootScope, $q) {
    GameService = _GameService_;
    spyOn(GameService, 'get').and.callFake(function(params, callback) { 
      callback.call(this, 'game'); 
    });
    scope = $rootScope.$new();
    GameCtrl = $controller('GameCtrl', {
      $scope: scope
    });
  }));

  it('calls gameService#get', function(){
    expect(GameService.get).toHaveBeenCalled();
  });

  it('sets the game object', function(){
    expect(scope.game).toBe('game');
  });
});
