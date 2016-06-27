/**
 * Created by V3790154 on 6/23/2016.
 */
var app = angular.module('store');
app.controller('CheckoutCtrl', function ($scope, totalAmount) {
    $scope.totalAmount = totalAmount;
    //$scope.$on('CheckoutCtrl',function(total) { console.log(total); });
    $scope.onSubmit = function () {
        $scope.processing = true;
    };

    $scope.stripeCallback = function (code, result) {
        $scope.processing = false;
        $scope.hideAlerts();
        if (result.error) {
            $scope.stripeError = result.error.message;
        } else {
            $scope.stripeToken = result.id;
        }
    };

    $scope.hideAlerts = function () {
        $scope.stripeError = null;
        $scope.stripeToken = null;
    };
});