
angular
  .module('team-slogup', [
    'ngRoute'
  ])
  .config(function ($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'view/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'view/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/portfolio', {
        templateUrl: 'view/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/request', {
        templateUrl: 'view/request.html',
        controller: 'RequestCtrl',
        controllerAs: 'request'
      })
      .when('/service', {
        templateUrl: 'view/service.html',
        controller: 'ServiceCtrl',
        controllerAs: 'service'
      })
      .otherwise({
        redirectTo: '/'
      });
  });