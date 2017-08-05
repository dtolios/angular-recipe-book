
(function () {
    'use strict';
    angular.module('app').controller('RecipeDetailController', function ($scope, $location, dataService) {
        if($location.path() === '/add') {
            $scope.save = function () {
                dataService.createRecipe(function () {
                    $location.path('/');
                });
            }
        }
        else {
            dataService.getRecipeByID(dataService.selectedRecipe._id, function (response) {
                $scope.recipe = response.data;
            });
        }

        dataService.getCategories (function (response) {
            $scope.categories = response.data;
        });

        $scope.cancel = function () {
            dataService.selectedRecipe = {};
            $location.path('/');
        };
    });
})();