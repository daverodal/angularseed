'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs:'MyVeryOwnAlias'
  });
}])

.controller('View1Ctrl', [function() {
    this.crap = "crud";
    this.poopers = ['a','b','c'];

}]);