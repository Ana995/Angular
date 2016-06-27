(function(){
 var app=angular.module('store-products',[]);
 app.directive('productTitle',function(){ //defineste cum functioneaza directiva

       return{
         restrict :'E', //tipul directivei
         templateUrl:'panels/product-title.html',

       };

  });
 app.directive('productPanels',function(){

      return{
        restrict:'E',
        templateUrl:'panels/product-panels.html',
        controller:function(){
              this.tab=1;
               this.selectTab=function(setTab){
                  this.tab=setTab;
               };
               this.isActive=function(checkTab){
                  return this.tab === checkTab;
               };
        },
          controllerAs:'panels',
      };

  });
})();
