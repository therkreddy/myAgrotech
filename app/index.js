(function () {

'use strict';

  angular.module('app', ['ngRoute', 'ngAnimate'])
  .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./html/wassup.html",
          controller: "MainController"
        })
        .when("/home", {
          templateUrl: "./html/home.html",
          controller: "HomeController",
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  var app = angular.module('app');

  //Load controller
  app.controller('MainController', [ '$scope', function($scope) {
      $scope.sampleScope = "Wassup...";
    }
  ]);

  app.controller('HomeController', function($scope, HomeService) {
      $scope.HomeService = HomeService;
      HomeService.callRk();
    }
  );

  //Load a factory service
  app.factory('HomeService', function() {
      var HomeService = function() {
      };
      HomeService.callRk = function() {
        var self = this;
        self.information = "So instead of using scope, attaching variables to the service, this instance directly";
      };
      return (HomeService);
  });

}());