'use strict';

(function () {
    angular.module('app').controller('RecipeDetailController', function ($scope, $location, dataService) {
        $scope.cancel = function () {
            $location.path('/');
        };
    });
})();