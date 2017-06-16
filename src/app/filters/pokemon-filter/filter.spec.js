'use strict';

// =====================
// Filter unit tests
// =====================
describe('pokemonFilter', function () {

  beforeEach(module('rsPokedex.constants'));
  beforeEach(module('rsPokedex.filters'));

  it('should return a trusted html with a sprite, id and name of the pokemon',
  angular.mock.inject(function ($sce, $filter, SPRITE_BASE_URL) {

    // Setup
    var obj = { name: 'bulbasaur', id: 1 };
    var regex = new RegExp(/\{id\}/g);

    // Test
    var html = $filter('pokemonFilter')(obj);

    // Expectations
    expect($sce.valueOf(html)).toEqual(
      '<img src="'+
        angular.copy(SPRITE_BASE_URL).replace(regex, obj.id)
      +'" alt="'+ obj.name +'" /> #'+ obj.id +' - '+
        obj.name.charAt(0).toUpperCase() + obj.name.slice(1)
      +''
    );

  }));

});
