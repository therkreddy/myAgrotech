'use strict';

  var app = angular.module('app', ['ngRoute', 'ngAnimate']);

  app.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when('/', {
          templateUrl: './templates/home.html',
          controller: 'HomeController'
        })
        .when('/home', {
          templateUrl: './templates/home.html',
          controller: 'HomeController',
        })
        .when('/contact', {
          templateUrl: './templates/contact.html',
          controller: 'HomeController',
        })
        .when('/people', {
          templateUrl: './templates/people.html',
          controller: 'HomeController',
        })
        .when('/services', {
          templateUrl: './templates/services.html',
          controller: 'HomeController',
        })
        .otherwise({
           redirectTo: '/home'
        });
    }
  ]);
  