'use strict';

var PharmacyApp = {};

var App = angular.module('PharmacyApp', ['PharmacyApp.filters', 'PharmacyApp.services', 'PharmacyApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login',
        controller: LoginController
    });

    $routeProvider.when('/trains', {
        templateUrl: 'trains/layout',
        controller: TrainController
    });
    
    $routeProvider.when('/railwaystations', {
        templateUrl: 'railwaystations/layout',
        controller: RailwayStationController
    });

    $routeProvider.otherwise({redirectTo: '/login'});
}]);
