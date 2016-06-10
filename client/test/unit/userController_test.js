const angular = require('angular');
require('angular-mocks');

describe('User controller', function() {
  var $controller;

  beforeEach(angular.mock.module('demoApp'));
  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be a controller', function() {
    var userctrl = $controller('UserprofileController');
    expect(typeof userctrl).toBe('object');
    expect(typeof userctrl.addUserprofile).toBe('function');
    expect('kregg').not.toBe('givingUsUp');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('lettingUsDown');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('runningAround');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('makingUsCry');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('sayingGoodbye');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('TellingUsLies');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('HurtingUs');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('Duncan').not.toBe('onMySpace');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('Logan').not.toBe('here');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('tyler').not.toBe('workingFromHome');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('bella').not.toBe('PuttingUpWithKreggsShenanigans');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('Aaron').not.toBe('aHairyPotter');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('Cam').not.toBe('gradingAssignments');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('rickRoller');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect('kregg').not.toBe('asldfkj');
  });
  it('should be a huge funny jokes', function() {
    var userctrl = $controller('UserprofileController');
    expect(42).toBe(42);
  });
});
