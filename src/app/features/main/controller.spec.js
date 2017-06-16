'use strict';

// =====================
// Controller unit tests
// =====================
describe('mainController', function () {

  var $scope, controllerInjections;

  beforeEach(module('ui.router'));
  beforeEach(module('rsPokedex.controllers'));
  beforeEach(module('rsPokedex.services'));
  beforeEach(module('rsPokedex.constants'));
  beforeEach(module('rsPokedex.mocks'));
  beforeEach(inject(function($rootScope, $state, regionService, REGIONS_MOCK) {
    $scope = $rootScope.$new();
    controllerInjections = {
      $scope: $scope,
      $state: $state,
      regions: angular.copy(REGIONS_MOCK),
      regionService: regionService,
      search: undefined
    }
  }));

  it('should have some attributes setted',
  angular.mock.inject(function ($controller, REGIONS_MOCK) {

    // Setup
    var mainController = $controller('mainController', controllerInjections);

    // Expectations
    expect($scope.attrs.regions).toEqual(REGIONS_MOCK.results);
    expect($scope.attrs.regionDetail).toBeUndefined();

  }));

  it('should set regionDetail when getRegionDetail get invoked',
  angular.mock.inject(function (
    $controller, $httpBackend, $state, regionService, generationService,generationAddIdTransformResponse,
    REGION_MOCK, GENERATION_MOCK
  ) {

    // Setup
    var mainController = $controller('mainController', controllerInjections);
    $httpBackend.expect('GET', 'http://pokeapi.co/api/v2/region/kanto').respond(200, angular.copy(REGION_MOCK));
    $httpBackend.expect('GET', 'http://pokeapi.co/api/v2/generation/generation-i').respond(200,
      JSON.stringify(angular.copy(GENERATION_MOCK)) // stringified for the transform response
    );

    // Spies
    spyOn($scope, '$broadcast').and.stub();
    spyOn(regionService, 'get').and.callThrough();
    spyOn(generationService, 'get').and.callThrough();
    spyOn($state, 'go').and.callThrough();

    // Test
    $scope.methods.getRegionDetail('kanto');
    $httpBackend.flush();

    // Expectations
    expect($scope.$broadcast).toHaveBeenCalledWith('loader:detail:show');
    expect($state.go).toHaveBeenCalledWith('main', { search: 'kanto' }, { location: 'replace' });
    expect(regionService.get).toHaveBeenCalledWith('kanto');
    expect(generationService.get).toHaveBeenCalledWith('generation-i');
    expect($scope.attrs.regionDetail).toEqual(
      generationAddIdTransformResponse(JSON.stringify(GENERATION_MOCK)).pokemon_species
    );
    expect($scope.attrs.currentSearch).toEqual('kanto');
    expect($scope.$broadcast).toHaveBeenCalledWith('loader:detail:hide');

  }));

  it('should call getRegionDetail() if the search parameter is defined',
  angular.mock.inject(function ($controller, $timeout, REGIONS_MOCK) {

    // Setup
    controllerInjections.search = 'kanto';
    var mainController = $controller('mainController', controllerInjections);

    // Spies
    spyOn($scope.methods, 'getRegionDetail').and.stub();

    // Test
    $timeout.flush();

    // Expectations
    expect($scope.methods.getRegionDetail).toHaveBeenCalledWith('kanto');

  }));

});

