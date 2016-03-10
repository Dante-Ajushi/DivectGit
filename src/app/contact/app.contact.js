angular.module('app.contact', [])
  .directive('myContact', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/contact/contact.tpl.html'
    };
  });