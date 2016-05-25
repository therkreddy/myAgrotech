'use strict';

  var app = angular.module('app', ['ngRoute', 'ngAnimate']);

  app.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when('/', {
          templateUrl: './templates/wassup.html',
          controller: 'HomeController'
        })
        .when('/home', {
          templateUrl: './templates/home.html',
          controller: 'HomeController',
        })
        .otherwise({
           redirectTo: '/home'
        });
    }
  ]);
  
 app.controller('HomeController', function($scope, HomeService) {
      $scope.HomeService = HomeService;
      HomeService.sayHello();
    }
  );
//Factory and service are different. Here using a factory 
  app.factory('HomeService', function() {
      var HomeService = function() {
      };
     HomeService.sayHello = function() {
        var self = this;
        self.information = 'హోం సర్వీస్ నీకు దండం పెడ్తుంది ';
      };
      return (HomeService);
  });
