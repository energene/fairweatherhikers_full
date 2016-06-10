module.exports = function(app) {
  app.directive('trailForm', () => {
    return {
      restrict: 'EAC',
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/trails/directives/trail_form.html',
      scope: {
        trail: '=',
        buttonText: '@',
        action: '@'
      },
      link: function(scope, element, attrs, controller) {
        var actions = {
          update: controller.updateTrail,
          create: controller.createTrail
        };
        scope.save = actions[scope.action];
      }
    };
  });
};
