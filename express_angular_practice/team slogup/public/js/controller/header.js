
angular.module('team-slogup')
  .service('HeaderService', function(){

    this.method1 = function(){
      var header = document.querySelector("header");
      window.onscroll = function(e){
        if (window.scrollY > 250) {
          header.className = "tsg-header ng-scope tsg-header--shrink";
        } else {
          header.className = "tsg-header ng-scope";
        }
      };
    };

    this.method2 = function(target){
      var li_tag = document.querySelectorAll("nav li"),
          index = 0;
      for (var i=0; i<li_tag.length; i++) {
        li_tag[i].className = "ng-scope";
        if (li_tag[i] === target) {
          index = i;
        }
      }
      li_tag[index].className = "ng-scope active";
    };

  })

  .controller('HeaderCtrl', function($scope, HeaderService){
    $scope.navs = [
      {
        url:"about",
        name:"AboutUs"
      },
      {
        url:"portfolio",
        name:"포트폴리오"
      },
      {
        url:"request",
        name:"제작의뢰"
      },
      {
        url:"service",
        name:"서비스"
      }
    ];

    $scope.click_this = function($event){
      HeaderService.method2($event.currentTarget);
    };

    HeaderService.method1();
  });

