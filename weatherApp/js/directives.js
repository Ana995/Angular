/**
 * Created by V3790154 on 6/14/2016.
 */

//directives
weatherApp.directive("weatherReport",function(){

    return {
        restrict:'E', //only html element
        templateUrl:'directives/weatherReport.html',
        replace:true,//replace the placeholder complete
        scope:{
            weatherDay: "=",
            dateFormat: "@",
            convertToStandard:"&",
            convertToDate:"&"
        }
    }
})