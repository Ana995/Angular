var app=angular.module('store',['ngRoute']); //store depinde de store-products
    app.config( ['$routeProvider',function($routeProvider) {
        console.log("Alert!!!");
        $routeProvider

            .when('/first', {
                templateUrl: 'pages/first.html',
                controller: 'StoreController',
                controllerAs: 'store'
            })
            .when('/second', {
                templateUrl: 'panels/product-panels.html',
                controller: 'ReviewController',
                controllerAs: 'review'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'ReviewController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);





