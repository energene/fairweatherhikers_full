const angular = require('angular');
require('angular-mocks');

describe('Sign Up controller', function() {
  var $controller;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be a controller', function() {
    var signupctrl = $controller('SignUpController');
    expect(typeof signupctrl).toBe('object');
    expect(typeof signupctrl.authenticate).toBe('function');
  });
});
