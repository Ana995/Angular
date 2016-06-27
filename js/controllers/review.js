/**
 * Created by V3790154 on 6/23/2016.
 */
var app = angular.module('store');
app.controller('ReviewController',function(){
    console.log("haaaa");
    debugger;
    var vm=this;
    vm.review={};
    vm.addReview =function(product){ //product e un array
        product.reviews.push(this.review);
        vm.review={};
    };
});