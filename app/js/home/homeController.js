 app.controller('HomeController', function($scope,HomeService) {
      $scope.HomeService = HomeService;
      HomeService.sayHello();
    }
  );