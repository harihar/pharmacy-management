'use strict';

/**
 * LoginController
 * @constructor
 */
var LoginController = function($scope, $http) {
	$scope.login = {};
    $scope.validateLogin = function(login) {
    	$scope.resetError();

        $http.post('login/', login).success(function() {
            $scope.login.name = '';
            $scope.login.password = '';
        }).error(function() {
            $scope.setError('Could not validate login details');
        });
    };

    $scope.addNewCar = function(newCar) {
        $http.post('cars/addCar/' + newCar).success(function() {
            $scope.fetchCarsList();
        });
        $scope.carName = '';
    };

    $scope.removeCar = function(car) {
        $http.delete('cars/removeCar/' + car).success(function() {
            $scope.fetchCarsList();
        });
    };

    $scope.removeAllCars = function() {
        $http.delete('cars/removeAllCars').success(function() {
            $scope.fetchCarsList();
        });

    };

   /// $scope.fetchCarsList();
};