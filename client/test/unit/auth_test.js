const angular = require('angular');
require('angular-mocks');

describe('Auth controller', function() {
  var $controller;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be a controller', function() {
    var authctrl = $controller('AuthController');
    expect(typeof authctrl).toBe('object');
    expect(typeof authctrl.getEmail).toBe('function');
    expect(typeof authctrl.logout).toBe('function');
  });
});
