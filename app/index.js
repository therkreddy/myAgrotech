(function () {

'use strict';

  angular.module('app', ['ngRoute', 'ngAnimate'])
  .config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./templates/wassup.html",
          controller: "MainController"
        })
        .when("/home", {
          templateUrl: "./templates/home.html",
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
  
}());