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
  