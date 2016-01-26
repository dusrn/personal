(function(){
  var myapp = angular.module('myapp', []);

  myapp.controller('ctrl', function($scope){
    $scope.click = function(){
      $scope.showname = 'Fucking ' + $scope.name;
    };
  });

})();