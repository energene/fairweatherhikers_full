const angular = require('angular');

describe('fwhResource', function() {
  var $httpBackend;
  var fwhResource;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$httpBackend_){
    $httpBackend = _$httpBackend_;
  }));

  it('should return a function', angular.mock.inject(function(fwhResource){
    var diffResource = new fwhResource();
    expect(typeof diffResource.getAll).toBe('function');
  }));

  it('should update things', angular.mock.inject(function(fwhResource, $q) {
    var testThing = { trailName: 'testTrail', _id: 1 }
    var testArray = [testThing];
    var errorsArray = [];
    var diffResource = new fwhResource(testArray, errorsArray, 'http://localhost:3000/api/trails');
  }));
});
