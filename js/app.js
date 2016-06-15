(function(){
  var app=angular.module('store',['store-products' ,'angularModalService','ngRoute','ngResource']); //store depinde de store-products
    app.config( ['$routeProvider',function($routeProvider){
        console.log("Alert!!!");
        $routeProvider

            .when('/first',{
                templateUrl:'pages/first.html',
                controller:'StoreController',
                controllerAs:'store'
            })
            .when('/second',{
                templateUrl:'product-panels.html',
                controller:'ReviewController',
                controllerAs:'review'
            })
            .when('/contact',{
                templateUrl:'contact.html',
                controller:'ReviewController'
            })
            .otherwise({
                redirectTo: '/'
            });
        console.log("Alert!!!");
    }]);
    //controllers
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
           }
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
                     canPurchase:false,
                 }
              ]

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
            return total;
        };
        
    });

    app.controller('CheckoutCtrl',  function ($scope ) {

    });


})();




