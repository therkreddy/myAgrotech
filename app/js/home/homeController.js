
 var app = angular.module('app');

 app.controller('HomeController', function($scope, HomeService) {
      $scope.HomeService = HomeService;
      HomeService.callRk();
    }
  );