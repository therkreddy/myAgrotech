 app.controller('HomeController', function($scope, $state, HomeFactory) {
      $scope.HomeFactory = HomeFactory;
      // clear the model by initialzing with an empty object each time controller called.
      HomeFactory.model = {};
      HomeFactory.state = $state;
    }
  );