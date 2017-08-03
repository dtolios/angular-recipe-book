'use strict';

angular.module('app')
.factory('dataService', dataService);

function dataService ($http) {
    return {
        getRecipes: getRecipes,
        getCategories: getCategories,
        getFoodItems: getFoodItems,
        getRecipesByCategory: getRecipesByCategory
    };

    function getRecipes () {
        return $http.get('/api/recipes')
        .then(getRecipesSuccess)
        .catch(getRecipesFailed);

        function getRecipesSuccess (response) {
            return response.data.results;
        }

        function getRecipesFailed (error) {
            // log error
        }
    }

    function getCategories () {
        return $http.get('/api/categories')
            .then(getCategoriesSuccess)
            .catch(getCategoriesFailed);

        function getCategoriesSuccess (response) {
            return response.data.results;
        }

        function getCategoriesFailed (error) {
            // log error
        }
    }

    function getFoodItems () {
        return $http.get('/api/fooditems')
            .then(getFoodItemsSuccess)
            .catch(getFoodItemsFailed);

        function getFoodItemsSuccess (response) {
            return response.data.results;
        }

        function getFoodItemsFailed (error) {
            // log error
        }
    }

    function getRecipesByCategory (category) {
        return $http.get('/api/recipes?category=' + category)
            .then(getRecipesByCategorySuccess)
            .catch(getRecipesByCategoryFailed);

        function getRecipesByCategorySuccess (response) {
            return response.data.results;
        }

        function getRecipesByCategoryFailed (error) {
            // log error
        }
    }

    function getRecipeById (id) {
        return $http.get('/api/recipes/' + id)
            .then(getRecipeByIdSuccess)
            .catch(getRecipeByIdFailed);

        function getRecipeByIdSuccess (response) {
            return response.data.results;
        }

        function getRecipeByIdFailed (error) {
            // log error
        }
    }
}