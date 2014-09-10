'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs:'blurb'
  });
}])

.controller('View2Ctrl', [function() {
    this.love = "the answer";
}]);