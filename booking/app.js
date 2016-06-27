/**
 * Created by V3790154 on 6/22/2016.
 */
var app=angular.module('scheduleProg',['firebase'])

app.controller('mainCtrl',function($firebaseObject)
{
    var ctrl=this;
    var link= new Firebase("https://schedule-bbbca.firebaseio.com/days");
    var ref= $firebaseObject(link);
    // sync as object
    var syncObject = link.$asObject();
    this.reset=function(){
        ref.$set({
            monday:{
                name:'Monday',
                slots:{
                    0900:{
                        time:'9:00am',
                        booked:false
                    },
                    0110:{
                        time:'10:00am',
                        booked:false
                    }
                }
            },
            tuesday: {
                name: 'Tuesday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            }
        });

    }

});
