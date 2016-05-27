
var app = angular.module('myApp', []);
app.controller('serviceCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});

var app=angular.module('serviceHttp',[]);
app.controller('httpCtrl',function($scope,$http){

    $http.get("C:/xampp/htdocs/angular/hello.htm").then(function(response){

       $scope.varHello=response.data;
    });
});