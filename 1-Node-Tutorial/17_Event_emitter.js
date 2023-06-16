const EventEmitter  = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response' , (name , id)=>{
    console.log(`Data recived : Name : ${name} with Id : ${id}`);

})

customEmitter.on('response' , ()=>{
    console.log('The other data is revived .....');

})

customEmitter.emit('response' , 'john' , 11)