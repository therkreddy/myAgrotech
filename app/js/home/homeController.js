 app.controller('HomeController', function($scope,HomeFactory) {
      $scope.HomeFactory = HomeFactory;
      HomeFactory.sayHello();
    }
  );