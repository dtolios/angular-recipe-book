
(function () {
    'use strict';
    angular.module('app').controller('RecipeDetailController', function ($scope, $location, dataService) {
        // conditional logic for whether user is creating a new recipe or editing an existing recipe
        if($location.path() === '/add') {
            $scope.recipe = {
                name: '',
                description: '',
                category: '',
                prepTime: 0,
                cookTime: 0,
                ingredients: [],
                steps: []
            };
            $scope.save = function () {
                dataService.createRecipe($scope.recipe, function () {
                    $location.path('/');
                });
            }
        }
        else {
            dataService.getRecipeByID(dataService.selectedRecipe._id, function (response) {
                $scope.recipe = response.data;
            });
            $scope.save = function () {
                dataService.updateRecipe($scope.recipe, function () {
                    $location.path('/');
                });
            }
        }

        dataService.getCategories (function (response) {
            $scope.categories = response.data;
        });

        dataService.getFoodItems (function (response) {
            $scope.foodItems = response.data;
        });

        $scope.addIngredient = function () {
            const newIngredient = {
                foodItem: '',
                condition: '',
                amount: ''
            };
            $scope.recipe.ingredients.push(newIngredient);
        };

        $scope.addStep = function () {
            const newStep = {
                description: ''
            };
            $scope.recipe.steps.push(newStep);
        };

        $scope.cancel = function () {
            dataService.selectedRecipe = {};
            $location.path('/');
        };

        $scope.deleteIngredient = function ($index) {
            $scope.recipe.ingredients.splice($index, 1);
        };
    });
})();