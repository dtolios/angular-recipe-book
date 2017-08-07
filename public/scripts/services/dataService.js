
(function () {
    'use strict';
    angular.module('app').service('dataService', function($http) {
        this.selectedRecipe = {};

        this.getRecipes = function (callback) {
            $http.get('api/recipes').then(callback);
        };

        this.getRecipeByID = function (id, callback) {
            $http.get('api/recipes/' + id).then(callback);
        };

        this.getCategories = function (callback) {
            $http.get('api/categories').then(callback);
        };

        this.getRecipesByCategory = function (category, callback) {
            $http.get('api/recipes?category=' + category.name).then(callback);
        };

        this.getFoodItems = function (callback) {
            $http.get('api/fooditems').then(callback);
        };

        this.createRecipe = function (callback) {
            $http.post('api/recipes').then(callback);
        };

        this.deleteRecipe = function (recipe) {
            console.log("The " + recipe.name + " recipe has been deleted!");
            // other logic to delete from database
        };
    });
})();
