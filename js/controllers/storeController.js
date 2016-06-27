/**
 * Created by V3790154 on 6/23/2016.
 */
var app=angular.module('store',['store-products','ngRoute','angularModalService']);
//debugger;
app.config( ['$routeProvider',function($routeProvider) {
    //console.log("nooooooooo");
    $routeProvider
        .when('/first', {
            templateUrl: 'pages/first.html',
            controller: 'StoreController',
            controllerAs: 'store'
        })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'StoreController',
        controllerAs: 'store'
    })
    .otherwise({
        redirectTo: '/'
    });
    
}]);
app.controller('StoreController',['$scope','$http',function($scope,$http){ //apelul la 'StoreController'
    //console.log('yeeee');
    var pro=this;
    $http.get('produse.json').success(function(data){
        pro.products=data.products;
    });
}]);
