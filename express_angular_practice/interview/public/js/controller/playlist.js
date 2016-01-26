
angular.module('playerApp')
  .controller('PlaylistCtrl', function($scope){

    var player = document.getElementById("player");

    $scope.playthis = function(file_name){
      var index = 0,
          li = document.getElementsByClassName('playlistitem');
      player.src = "./data/" + file_name + ".mp3";
      player.play();
    };

    player.onplay = function(e){
      playing();
    };

    function playing(){
      var li = document.getElementsByClassName('playlistitem'),
          index = 0;
      for (var i=0; i<li.length; i++){
        if ($scope.checklist[i].url == player.src){
          index = i;
        }
        li[i].className = "playlistitem";
      }
      if (li.length){
        li[index].className = "playlistitem playing";
      }
    };

  });