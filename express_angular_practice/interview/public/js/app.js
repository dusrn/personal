
angular
  .module('playerApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'view/totallist.html',
        controller: 'TotallistCtrl',
        controllerAs: 'totallist'
      })
      .when('/playlist', {
        templateUrl: 'view/playlist.html',
        controller: 'PlaylistCtrl',
        controllerAs: 'playlist'
      })
      .otherwise({
        redirectTo: '/'
      });
  });