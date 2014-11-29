'use strict';

/**
 * @ngdoc function
 * @name medicalSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the medicalSiteApp
 */
angular.module('medicalSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
