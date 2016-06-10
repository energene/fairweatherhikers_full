module.exports = function(app) {
  app.directive('trailListItem', () => {
    return {
      restrict: 'EAC',
      replace: true,
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/trails/directives/trail_list_item.html',
      scope: {
        trail: '='
      },
      link: function(scope, element, attrs, controller) {
        scope.remove = controller.removeTrail;

      }
    };
  });
};
