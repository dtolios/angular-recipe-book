
(function () {
    'use strict';
    angular.module('app').controller('RecipesController', function ($scope, $location, dataService) {
        dataService.getRecipes (function (response) {
            $scope.recipes = response.data;
        });

        dataService.getCategories (function (response) {
            $scope.categories = response.data;
        });

        $scope.sendRecipeToService = function (recipe) {
            dataService.selectedRecipe = recipe;
        };

        $scope.updateRecipeList = function () {
            if($scope.category) {
                dataService.getRecipesByCategory($scope.category, function (response) {
                    $scope.recipes = response.data;
                });
            }
            else {
                dataService.getRecipes (function (response) {
                    $scope.recipes = response.data;
                });
            }
        };

        $scope.addRecipe = function () {
            $location.path('/add');
        };

        $scope.deleteRecipe = function (recipe, $index) {
            dataService.deleteRecipe(recipe);
            $scope.recipes.splice($index, 1);
        };
    });
})();