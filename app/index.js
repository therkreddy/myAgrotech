'use strict';

  var app = angular.module('app', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
     function($stateProvider, $urlRouterProvider) {
      // routes
      $urlRouterProvider.otherwise('home');
      $stateProvider
        .state('home', {
                  url: '/home',
          templateUrl: './templates/home.html',
          controller: 'HomeController',
        })
         .state('message', {
                  url: '/message',
          templateUrl: './templates/message.html',
          controller: 'HomeController',
        })
         .state('production', {
                  url: '/production',
          templateUrl: './templates/production.html',
          controller: 'HomeController',
        })
        .state('market', {
                  url: '/market',
          templateUrl: './templates/market.html',
          controller: 'HomeController',
        })
      .state('varieties', {
                  url: '/varieties',
          templateUrl: './templates/varieties.html',
          controller: 'HomeController',
        })
      .state('blog', {
                  url: '/blog',
          templateUrl: './templates/blog.html',
          controller: 'HomeController',
        })
      .state('gallery', {
                  url: '/gallery',
          templateUrl: './templates/gallery.html',
          controller: 'HomeController',
        })
    }
  ]);

