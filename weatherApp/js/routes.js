/**
 * Created by V3790154 on 6/14/2016.
 */
weatherApp.config( ['$routeProvider',function($routeProvider){

    $routeProvider

        .when('/home',{
            templateUrl:'pages/home.htm',
            controller:'homeCtrl'
        })
        .when('/forecast',{
            templateUrl:'pages/forecast.htm',
            controller:'forecastCtrl'
        })
        .when('/forecast/:days',{
            templateUrl:'pages/forecast.htm',
            controller:'forecastCtrl'
        })
        .otherwise({
            redirectTo: 'angular/index.html'
        });
    console.log("Alert!!!");
}]);

