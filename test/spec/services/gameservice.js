'use strict';

describe('Service: GameService', function () {
  var ENV, GameService, httpBackend;

  // load the service's module
  beforeEach(module('battleshipApp'));

  // instantiate service
  beforeEach(inject(function (_ENV_, _GameService_, $httpBackend) {
    ENV = _ENV_;
    GameService = _GameService_;
    httpBackend = $httpBackend;
  }));

  describe('#get', function(){
    it('makes a GET request to the "show" route in Rails API', function(){
      httpBackend.when("GET", ENV.apiEndpoint + "/games/1.json").respond({
        board: 'board'
      });
      GameService.get({ id: 1 }, function(game){
        expect(game.board).toBe("board");
      });
      httpBackend.flush();
    });
  });
});
