'use strict';

(function () {
    angular.module('app').service('dataService', function($http) {
        this.getRecipes = function (callback) {
            $http.get('api/recipes').then(callback);
        };

        this.getCategories = function (callback) {
            $http.get('api/categories').then(callback);
        };

        this.getRecipesByCategory = function (category, callback) {
            $http.get('api/recipes?category=' + category.name).then(callback);
        };

        this.deleteRecipe = function (recipe) {
            console.log("The " + recipe.name + " recipe has been deleted!");
            // other logic to delete from database
        };
    });
})();
