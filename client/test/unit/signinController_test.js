const angular = require('angular');
require('angular-mocks');

describe('Sign In controller', function() {
  var $controller;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be a controller', function() {
    var signinctrl = $controller('SignInController');
    expect(typeof signinctrl).toBe('object');
    expect(typeof signinctrl.authenticate).toBe('function');
  });
});
