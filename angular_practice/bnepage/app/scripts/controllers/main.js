'use strict';

/**
 * @ngdoc function
 * @name bnepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bnepageApp
 */
angular.module('bnepageApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('data/businessList.json').success(function(data) {
      $scope.businessList = data;

    });
  });
