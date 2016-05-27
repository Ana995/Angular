(function(){
  var app=angular.module('store',['store-products']); //store depinde de store-products
  app.controller('StoreController',function(){ //apelul la 'StoreController'
     this.products=gems; //product=proprietate a controllerului
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
 app.controller('ReviewController',function(){
   this.review={};
   this.addReview=function(product){ //product e un array
     product.reviews.push(this.review);
     this.review={};
   };
 });


})();
