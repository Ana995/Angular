/**
 * Created by V3790154 on 6/13/2016.
 */
//module
var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
//routes
console.log("blabla");

weatherApp.config( '$routeProvider',function($routeProvider){

    $routeProvider

        .when('/',{
            templateUrl:'pages/home.htm',
            controller:'homeCtrl'
        })
       .when('/forecast',{
            templateUrl:'pages/forecast.htm',
            controller:'forecastCtrl'
    })
        .otherwise({
            redirectTo: 'angular/index.html'
        });
    console.log("Alert!!!");
});

//controllers
weatherApp.controller('homeCtrl',['$scope',function($scope){
    console.log("Alert!!");

}]);

weatherApp.controller('forecastCtrl',['$scope',function($scope){

}]);
