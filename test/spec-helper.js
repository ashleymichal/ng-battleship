function GameServiceMock(){
  var ENV, GameService, httpBackend;

  inject(function (_ENV_, _GameService_, $httpBackend) {
    ENV = _ENV_;
    GameService = _GameService_;
    httpBackend = $httpBackend;
  });
}

