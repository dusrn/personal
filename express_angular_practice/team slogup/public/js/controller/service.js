
angular.module('team-slogup')
  .controller('ServiceCtrl', function($scope, ScrollresetService){
    ScrollresetService.reset();
  });