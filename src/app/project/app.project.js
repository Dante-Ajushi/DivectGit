angular.module('app.project', [])
  .directive('myProject', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/project/project.tpl.html'
    };
  });