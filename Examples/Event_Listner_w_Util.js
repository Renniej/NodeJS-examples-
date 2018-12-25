var events = require('events'); //core module
var util = require('util');


var Person = function(name){  //Object 
    this.name = name;
}


util.inherits(Person, events.EventEmitter);  //Makes sure every person object inherits the ability to have custom events

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var People = [james, mary, ryu];


People.forEach(function(person){ //Add speak event listener to every person object

    person.on('speak', function(msg){

        console.log(`${person.name} said "${msg}"`)
    })



});


james.emit('speak', 'hey dude');
mary.emit('speak', 'I am not dude.');
ryu.emit('speak', 'Did you just assume her gender?????');