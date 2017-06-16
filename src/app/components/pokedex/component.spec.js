'use strict';

// =====================
// Component unit tests
// =====================
describe('pokedexComponent', function () {
  beforeEach(module('rsPokedex.constants'));
  beforeEach(module('rsPokedex.components'));
  beforeEach(module('rsPokedex.filters'));
  beforeEach(module('rsPokedex.templates'));

  it('should have a list with class "pokedex-component-master"', angular.mock.inject(function ($rootScope, $compile) {
    // Compile
    var elem = $compile('<pokedex-component master="[]"></pokedex-component>')($rootScope);
    $rootScope.$digest();

    // Test
    var pokedexComponentMaster = $(elem).find(".pokedex-component-master");

    // Expectations
    expect(pokedexComponentMaster.length).toEqual(1);
  }));

  it('should have a list with class "pokedex-component-detail"', angular.mock.inject(function ($rootScope, $compile) {
    // Compile
    var elem = $compile('<pokedex-component detail="[]"></pokedex-component>')($rootScope);
    $rootScope.$digest();

    // Test
    var pokedexComponentMaster = $(elem).find(".pokedex-component-detail");

    // Expectations
    expect(pokedexComponentMaster.length).toEqual(1);
  }));

  it('should have the binding "master" setted', angular.mock.inject(function ($rootScope, $compile) {
    // Compile
    var $scope = $rootScope.$new();
    $scope.master = [{ name: 'bulbasaur', id: 1 }];
    var elem = $compile('<pokedex-component master="master"></pokedex-component>')($scope);
    $scope.$digest();

    // Test
    var listItem = $(elem).find("button");

    // Expectations
    expect(listItem.text()).toEqual('bulbasaur');
  }));

  it('should call the binding "getDetail"', angular.mock.inject(function ($rootScope, $compile) {
    // Compile
    var $scope = $rootScope.$new();
    $scope.master = [{ name: 'bulbasaur', id: 1 }];
    var elem = $compile('<pokedex-component master="master" get-detail="getDetail(id)"></pokedex-component>')($scope);

    // Spy
    $scope.getDetail = jasmine.createSpy('getDetail');
    $scope.$digest();

    // Test
    var listItem = $(elem).find("button");
    listItem.trigger('click');

    // Expectations
    expect($scope.getDetail).toHaveBeenCalledWith($scope.master[0].name);
  }));

});
