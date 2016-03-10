angular.module('app.nav', [])
  .directive('myNav', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/nav/nav.tpl.html',
    };
  });