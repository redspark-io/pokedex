'use strict';

// =====================
// Controller unit tests
// =====================
describe('requestInterceptor', function () {

  beforeEach(module('rsPokedex'));
  beforeEach(module('rsPokedex.mocks'));

  it('should fail as a 401 error',
  angular.mock.inject(function (requestInterceptor, messageService, HTTP_ERRORS, RESPONSE_ERRORS_MOCK) {

    // Spies
    spyOn(messageService, 'error').and.stub();

    // Test
    requestInterceptor.responseError(RESPONSE_ERRORS_MOCK['401']);

    // Expectations
    expect(messageService.error).toHaveBeenCalledWith(HTTP_ERRORS['401']);

  }));

  it('should fail as a 403 error',
  angular.mock.inject(function (requestInterceptor, messageService, HTTP_ERRORS, RESPONSE_ERRORS_MOCK) {

    // Spies
    spyOn(messageService, 'error').and.stub();

    // Test
    requestInterceptor.responseError(RESPONSE_ERRORS_MOCK['403']);

    // Expectations
    expect(messageService.error).toHaveBeenCalledWith(HTTP_ERRORS['403']);

  }));

  it('should fail as a 404 error',
  angular.mock.inject(function (requestInterceptor, messageService, HTTP_ERRORS, RESPONSE_ERRORS_MOCK) {

    // Spies
    spyOn(messageService, 'error').and.stub();

    // Test
    requestInterceptor.responseError(RESPONSE_ERRORS_MOCK['404']);

    // Expectations
    expect(messageService.error).toHaveBeenCalledWith(HTTP_ERRORS['404']);

  }));

});

