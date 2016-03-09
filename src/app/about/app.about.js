angular.module('app.about', [])
  .directive('myAbout', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/about/about.tpl.html',
    };
  });