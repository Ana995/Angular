var fs=require("fs");
/*var data = fs.readFileSync('input.txt');*/ //blocking example

/*fs.readFile("input.txt",function(err,data){
    if(err) return console.error(err);
   console.log(data.toString());

})*/
//console.log("Program ended");
var events= require('events'); //import event module
var eventEmitter=new events.EventEmitter(); //create an eventEmitter object
//  Event handler
var connectHandler=function connected(){
  console.log('connection succesful');
  eventEmitter.emit('data');
};
//bind the connection event with the handler
eventEmitter.on('connection',connectHandler);
//bind the data event with the function
eventEmitter.on('data',function(){
    console.log('data succesfully received' );
});
// fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended");
console.log( __filename );
