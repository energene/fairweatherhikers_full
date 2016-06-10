const angular = require('angular');
require('angular-mocks');

describe('Map controller', function() {
  var $controller;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be a controller', function() {
    var mapctrl = $controller('mapController');
    expect($scope.generateTrailMarkers).toBe('function');
    // expect(typeof mapctrl.generateTrailMarkers).toBe('function');
  });
});
