(function(){
  var app=angular.module('store',['store-products' ,'angularModalService']); //store depinde de store-products
    this.suma=[];
  app.controller('StoreController',function(){ //apelul la 'StoreController'
     this.products=gems; //product=proprietate a controllerului
      this.search={};
  });
  var gems = [
     {
         name: 'Bike',
         price: 3,
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         images:[
           {
              full:'img/poza.jpeg',
           },
         ],
          reviews:[
                 {
                   star:5,
                   body:'Cuteee',
                   author:"joe@yahoo.com",
                 },
                 {
                   star:4,
                   body:"Super!",
                   author:"tom@gmail.com",
                 },
              ],

     },
     {
       name:"Barbie doll",
       price:6.45,
       description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
       canPurchase:true,
       images:[
         {
           full:'img/barbie.jpeg',
         },
       ],
       reviews:[
        {
          stars:5,
          body:'Cuteee',
          author:"joe@yahoo.com",
        },
        {
          stars:3,
          body:"It's ok",
          author:"tom@gmail.com",

         }
       ],
     },
      {
          name:"Car",
          price:500,
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          canPurchase:true,
          images:[
              {
                  full:'img/car.jpeg',
              },
          ],
          reviews:[
              {
                  stars:5,
                  body:'Cuteee',
                  author:"joe@yahoo.com",
              },
              {
                  stars:3,
                  body:"It's ok",
                  author:"tom@gmail.com",

              }
          ],
      },
      {
          name:"Teddy Bear",
          price:10.50,
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          canPurchase:true,
          images:[
              {
                  full:'img/teddy.jpeg',
              },
          ],
          reviews:[
              {
                  stars:5,
                  body:'Cuteee',
                  author:"joe@yahoo.com",
              },
              {
                  stars:3,
                  body:"It's ok",
                  author:"tom@gmail.com",

              }
          ],
      },
      {
          name:"Head Phones",
          price:6.45,
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          canPurchase:true,
          images:[
              {
                  full:'img/headphone.jpeg',
              },
          ],
          reviews:[
              {
                  stars:5,
                  body:'Cuteee',
                  author:"joe@yahoo.com",
              },
              {
                  stars:3,
                  body:"It's ok",
                  author:"tom@gmail.com",

              }
          ],
      },
  ];
 /*app.controller('PanelController',function(){
          this.tab=1;
          this.selectTab=function(setTab){
          this.tab=setTab;

          };
          this.isActive=function(checkTab){
              return this.tab === checkTab;
           };

 });*/
  /*app.controller('ProductCtrl',[ '$http',function($http){ //remoteAPI
        var store=this;
      store.product=[];
         $http.get("/product","server.js");
       $http.get('/product.json').success(function(data){
              store.products=data;
           });
  }]);*/
 app.controller('ReviewController',function(){
   this.review={};
   this.addReview =function(product){ //product e un array
     product.reviews.push(this.review);
     this.review={};
   };
 });
    app.controller('shoppingCart', function ($scope) {
        $scope.cart = [];
        $scope.products = [];
        /*$scope.addProduct =function() {

            //alert("hello");
            $scope.products.push({name:$scope.name, price:$scope.price});
            $scope.nameProduct = "";
            $scope.priceProduct = "";
        }*/
         $scope.suma=[];
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
                total=0;
                total += product.price * product.quantity;
            });
            return total;
        };
        /*$scope.checkout = function () {
            $scope.open({
                templateUrl: 'checkout.html',
                controller: 'CheckoutCtrl',
                resolve: {
                    totalAmount: $scope.getCartPrice
                }
            });
        };*/
        
    });
    app.controller('CheckoutCtrl', function ($scope, totalAmount ) {
        $scope.totalAmount = totalAmount;

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

})();

