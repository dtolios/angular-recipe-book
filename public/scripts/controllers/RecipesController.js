
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

            const modal = new tingle.modal({
                footer: true,
                stickyFooter: false,
                closeMethods: ['overlay', 'button', 'escape'],
                closeLabel: "Close",
                cssClass: ['custom-class-1', 'custom-class-2'],
            });

            // set content
            modal.setContent('<h1>Are you sure you want to delete the ' + recipe.name + ' recipe?</h1>');

            // Delete recipe button
            modal.addFooterBtn('Yes, delete recipe', 'tingle-btn tingle-btn--danger', function() {
                dataService.deleteRecipe(recipe);
                $scope.recipes.splice($index, 1);
                modal.close();
            });

            // Cancel button
            modal.addFooterBtn('Cancel', 'tingle-btn tingle-btn--default', function() {
                modal.close();
            });

            // open modal
            modal.open();
        };
    });
})();