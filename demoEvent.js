var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEvenHandler = function(){
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream',myEvenHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');