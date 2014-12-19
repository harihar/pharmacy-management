'use strict';

/* Directives */

var AppDirectives = angular.module('PharmacyApp.directives', []);

AppDirectives.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
}]);
