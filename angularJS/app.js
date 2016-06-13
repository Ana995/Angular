/**
 * Created by V3790154 on 6/6/2016.
 */
var myApp
    =angular.module('myApp',[]);
myApp.controller('mainCtrl',function($scope,$log) {
    console.log($scope);
    $log.log("Hello");
    $log.warn("Hey");
    $log.debug("Info");
});