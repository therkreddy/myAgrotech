'use strict';

  var app = angular.module('app', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
     function($stateProvider, $urlRouterProvider) {
      // routes
      $urlRouterProvider.otherwise('contact');
      $stateProvider
        .state('home', {
                  url: '/home',
          templateUrl: './templates/home.html',
          controller: 'HomeController',
        })
         .state('contact', {
                  url: '/contact',
          templateUrl: './templates/contact.html',
          controller: 'HomeController',
        })
         .state('people', {
                  url: '/people',
          templateUrl: './templates/people.html',
          controller: 'HomeController',
        })
      .state('services', {
                  url: '/services',
          templateUrl: './templates/services.html',
          controller: 'HomeController',
        })
    }
  ]);
  