'use strict';

// =====================
// Component unit tests
// =====================
describe('loaderComponent', function () {
  beforeEach(module('rsPokedex.components'));
  beforeEach(module('rsPokedex.templates'));

  it('should start the component with visible as a falsy value',
  angular.mock.inject(function ($componentController) {
    // Setup
    var controller = $componentController('loaderComponent', null, { name: 'teste' });

    // Test
    controller.$onInit();

    // Expectations
    expect(controller.visible).toBeFalsy();
  }));

  it('should change visible to a falsy value after receive a message',
  angular.mock.inject(function ($rootScope, $componentController) {
    // Setup
    var controller = $componentController('loaderComponent', null, { name: 'teste' });

    // Test
    controller.$onInit();

    // Expectations
    expect(controller.visible).toBeFalsy();

    // Test
    $rootScope.$broadcast('loader:teste:show');

    // Expectations
    expect(controller.visible).toBeTruthy();

    // Test
    $rootScope.$broadcast('loader:teste:hide');

    // Expectations
    expect(controller.visible).toBeFalsy();
  }));

  it('should change visible to a truthy value after receive a message',
  angular.mock.inject(function ($rootScope, $componentController) {
    // Setup
    var controller = $componentController('loaderComponent', null, { name: 'teste' });

    // Test
    controller.$onInit();

    // Expectations
    expect(controller.visible).toBeFalsy();

    // Test
    $rootScope.$broadcast('loader:teste:show');

    // Expectations
    expect(controller.visible).toBeTruthy();
  }));

});
