
(function () {
    'use strict';
    angular.module('app').controller('RecipeDetailController', function ($scope, $location, dataService) {
        // conditional logic for whether user is creating a new recipe or editing an existing recipe
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

        dataService.getFoodItems (function (response) {
            $scope.foodItems = response.data;
        });

        $scope.cancel = function () {
            dataService.selectedRecipe = {};
            $location.path('/');
        };

        $scope.deleteIngredient = function (ingredient, $index) {
            dataService.deleteIngredient(ingredient);
            $scope.recipe.ingredients.splice($index, 1);
        };
    });
})();