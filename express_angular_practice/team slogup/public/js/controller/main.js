
angular.module('team-slogup')

  .service('ModalService', function(){
    this.ptf_click = function(target, ptf_item, app_item){
      document.querySelector("body").className = "modal-open";

      var target_text = target.children[0].children[0].children[0].style.backgroundImage,
          index = 0;

      for (var i=0; i<ptf_item.length; i++) {
        if (ptf_item[i].url == target_text) {
          index = i;
        }
      }
      return index;
    };

    this.exit_modal = function(){
      document.querySelector("body").className = "";
    }
  })

  .controller('MainCtrl', function($scope, $location, ModalService){
    angular.extend(this, new PortfolioitemCtrl($scope, $location));

    $scope.select_index = 0;
    $scope.temp = {};

    $scope.ptfolio_click = function($event){
      $scope.select_index = ModalService.ptf_click($event.currentTarget, $scope.portfolioitem, $scope.appitem);
      $scope.temp = $scope.portfolioitem[$scope.select_index];
    };

    $scope.close_modal = function(){
      ModalService.exit_modal();
    };
  });
