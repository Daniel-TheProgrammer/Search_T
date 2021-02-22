var jobSearch = angular.module('jobSearch', ['ui.router']);

jobSearch.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/welcome')

    $stateProvider

    .state('welcome', {
            url: '/welcome',
            templateUrl: 'partials/welcome.html'
        })

    .state('search', {
            url: '/search',
            templateUrl: 'partials/search.html'
        })

    .state('search.advanced', {
                url: '/advanced',
                templateUrl: 'partials/search/advanced.html'
        })


    	.state('search.results', {
    			url: '/results',
    			templateUrl: 'partials/search/results.html'
    	})
})