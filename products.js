(function(){
 var app=angular.module('store-products',[]);
 app.directive('productTitle',function(){ //defineste cum functioneaza directiva

       return{
         restrict :'E', //tipul directivei
         templateUrl:'product-title.html',
           //transclude:true

       };

  });
  app.directive('productPanels',function(){

      return{
        restrict:'E',
        templateUrl:'product-panels.html',
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
          link:function(scope,elements,attrs){
              console.log('Linking...');
              console.log(scope);
              console.log(elements);
          },
          transclude:true
          /*compile: function(elem,attrs){ //compile nu prea este folosit asa des
              console.log('Compiling..');
              //elem.removeAttr('class');
              //console.log(elem.html());
              console.log(elem);
              return {

                  /*pre: function(scope,element,attrs){ //avoid pre-link it's not safe!!
                      console.log('Pre-linking...');
                      console.log(element);
                  },*/
                  /*post: function(scope,elements,attrs){
                      console.log('Post-linking...');
                      console.log(scope);
                      //elements.removeAttr('class');
                      console.log(elements);
                  }

              }
          }*/

      };

  });
})();
