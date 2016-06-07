 app.controller('HomeController', function($scope, $state, HomeFactory) {
      $scope.HomeFactory = HomeFactory;
      HomeFactory.model = {};
      HomeFactory.state = $state;
    }
  );