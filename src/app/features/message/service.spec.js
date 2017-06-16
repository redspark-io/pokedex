'use strict';

// =====================
// Controller unit tests
// =====================
describe('messageService', function () {

  beforeEach(module('toastr'));
  beforeEach(module('rsPokedex.services'));
  beforeEach(module('rsPokedex.constants'));
  beforeEach(module('rsPokedex.mocks'));

  it('should call an error message',
  angular.mock.inject(function ($timeout, toastr, messageService, MESSAGE_MOCK) {

    // Spies
    spyOn(toastr, 'error').and.stub();

    // Teste
    messageService.error('Erro')
    $timeout.flush()

    // Expectations
    expect(toastr.error).toHaveBeenCalledWith('Erro', undefined, MESSAGE_MOCK.ERROR );

  }));

});

