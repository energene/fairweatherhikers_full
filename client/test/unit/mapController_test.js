const angular = require('angular');
require('angular-mocks');

describe('map controller', () => {
  var $httpBackend;
  var $scope;
  var $ControllerConstructor;

  beforeEach(angular.mock.module('demoApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $ControllerConstructor = $controller;
    $scope = $rootScope.$new();
  }));

  it('should be able to make a controller', () => {
    var mapController = $ControllerConstructor('MapController', {$scope});
    expect(typeof mapController).toBe('object');
    expect(Array.isArray($scope.circles)).toBe(true);
  });
});
