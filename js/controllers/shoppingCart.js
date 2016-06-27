/**
 * Created by V3790154 on 6/23/2016.
 */
var app = angular.module('store');
app.controller('shoppingCart',function ($scope, $http) {
    $scope.cart = [];

    // Load products from server
    $http.get('produse.json').success(function (response) {
        $scope.products = response.products;
    });

    $scope.addToCart = function (product) {
        var found = false;
        $scope.cart.forEach(function (item) {
            if (item.id === product.id) {
                item.quantity++;
                found = true;
            }
        });
        if (!found) {
            $scope.cart.push(angular.extend({quantity: 1}, product));
        }
    };

    $scope.getCartPrice = function () {
        var total = 0;
        $scope.cart.forEach(function (product) {
            total += product.price * product.quantity;
        });
       // $scope.$emit('CheckoutCtrl',total);
        return total;
      
    };

    $scope.checkout = function ($scope,ModalService) { //????
       $scope.showModel= function(){
           ModalService.open({
               templateUrl: "pages/checkout.html",
               controller: "CheckoutCtrl"
           }).then(function (modal) {

               modal.element.modal();
               modal.close.then(function (result) {
                   console.log(result);
               });
           });
       }
    } 
});

