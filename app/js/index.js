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
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('app')
  .controller('MainController', [ '$scope', function($scope) {
      $scope.sampleScope = "Wassup...";
    }
  ]);

}());