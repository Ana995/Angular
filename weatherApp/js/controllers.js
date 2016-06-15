/**
 * Created by V3790154 on 6/14/2016.
 */
//controllers
weatherApp.controller('forecastCtrl',['$scope','cityService','$resource','$routeParams',function($scope,cityService,$resource,$routeParams){

    $scope.city=cityService.city;
    $scope.days=$routeParams.days || '2'; // daca e default int nu apare in browser in url trb sa fie string
    $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=dfbab5b9804d2dbd5cba98b0785d17cd",{
        callback: "JSON_CALLBACK"},{get:{method:"JSONP"}})

    $scope.weatherResult=$scope.weatherAPI.get( { q: $scope.city,cnt:$scope.days});
    //console.log($scope.weatherResult);

    $scope.convertToCelsius=function(degK){
        return Math.round(degK-273.15);
    }

    $scope.convertToDate=function(dt){
        return new Date(dt*1000); //functie din js pt data
    };
}]);
weatherApp.controller('homeCtrl',['$scope','cityService','$location',function($scope,cityService,$location){

    $scope.city=cityService.city;
    $scope.$watch('city',function(){
        cityService.city=$scope.city;
    });
    $scope.submit=function(){
        $location.path("/forecast");
    }
}]);