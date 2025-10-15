// const EventEmitter = require('events');
// Here you define a new class MyEmitter that inherits (extends) from the built-in EventEmitter class. This means MyEmitter now has all the features of EventEmitter
// class MyEmitter extends EventEmitter { }


const MyEmitter = require('events');
const myEmitter = new MyEmitter()

//This code will run when myEmitter.emit is called like in Line No 18. else this event is not fired
myEmitter.on('WaterFull', () => {
    console.log('Please Turn off motor!');
    setTimeout(() => {
        console.log('Reminder : Please Turn off motor!!!')
    }, 2000);
})

console.log('This Code is running');
console.log('This Code is still running');

//Event emit name should same as event else event is not fired
myEmitter.emit('WaterFull')