angular.module('app.history', [])
  .directive('myHistory', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/history/history.tpl.html',
    };
  });