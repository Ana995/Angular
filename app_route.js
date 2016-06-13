var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/first.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
        .otherwise({ redirectTo:'pages/first.html'
        });
});
myApp.service('nameService',function(){

    var self=this;
    this.name='Ana';
    this.namelength = function(){

        return self.name.length();
    }
});
myApp.controller('mainController', ['$scope', '$log','nameService','$routeProvider', function($scope, $log, nameService,routeProvider) {

    $scope.name = nameService.name;
    $scope.watch('name',function(){
           nameService.name=$scope.name; //actualizeaza variabila name in cazul in care se schimba
    });
    $log.log(nameService.name);
    $log.log(nameService.name.namelength());
    console.log("Alert!!");

}]);

myApp.controller('secondController', ['$scope', '$log','$routeParams','nameService', function($scope, $log,$routeParams,nameService) {

    $scope.num = $routeParams.num || 1 ; //if routeParams.num exista va avea val altfel va fi 1
    $scope.name=nameService.name;
    $scope.watch('name',function(){
        nameService.name=$scope.name; //actualizeaza variabila name in cazul in care se schimba
    });
    $log.log(nameService.name);
    $log.log(nameService.name.namelength());
    console.log("ALERT");
}]);
