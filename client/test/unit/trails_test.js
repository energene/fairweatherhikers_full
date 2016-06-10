const angular = require('angular');
require('angular-mocks');

describe('trails controller', function() {
  var $controller;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be a controller', function() {
    var trailsctrl = $controller('TrailsController');
    expect(typeof trailsctrl).toBe('object');
    expect(typeof trailsctrl.getAll).toBe('function');
  });
});
