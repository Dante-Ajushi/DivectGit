angular.module('app.config', [])
  .directive('myConfig', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/config/config.tpl.html'
    };
  });