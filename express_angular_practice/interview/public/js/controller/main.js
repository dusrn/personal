
angular.module('playerApp')
  .controller('MainCtrl', function($scope, $http){
    var player = document.getElementById("player");
    $scope.musiclist = [];
    $scope.checklist = [];

    $http.get('data/musiclist.json').success(function(data){
      $scope.musiclist = data;
    });

    $scope.change_list = function(){
      $scope.checklist = [];
      for (var i=0; i<$scope.musiclist.length; i++) {
        if ($scope.musiclist[i].check) {
          $scope.checklist.push($scope.musiclist[i]);
          if (player.src == "http://localhost:3000/") {
            player.src = $scope.checklist[0].url;
          }
        }
      }
    };

    $scope.prev_or_next_music = function(temp){
      if (temp) {
        next_music();
      } else {
        var length = $scope.checklist.length;
        console.log(length);
        for (var i=0; i<length; i++) {
          if (player.src == $scope.checklist[i].url) {
            if (i == 0) {
              player.src = $scope.checklist[length-1].url;
            } else {
              player.src = $scope.checklist[i-1].url;
              break;
            }
          }
        }
        player.play();
      }
    };

    player.onended = function(e){
      next_music();
    };

    function next_music() {
      var exist = false;
      for (var i=0; i<$scope.checklist.length; i++) {
        if (player.src == $scope.checklist[i].url) {
          exist = true;
          if (i == ( $scope.checklist.length - 1)) {
            player.src = $scope.checklist[0].url;
          } else {
            player.src = $scope.checklist[i+1].url;
            break;
          }
        }
      }
      if (!exist && $scope.checklist.length) {
        player.src = $scope.checklist[0].url;
      }
      player.play();
    };
  });