// arrow functions
function sum( a, b ) {
    return a + b;
  }
  
  // function has only return statement then you can use this syntax
  var product = (a, b) => a * b;
  
  // if function has multiple statements, then you can use this syntax
  var logGreeting = () => {
    console.log( 'Good morning' );
    console.log( 'Have a good day' );
    return 'Good night';
  };
  
  // Exercise: write an arrow function that calculates the sum of an array and returns the sum
  var sumArr = (arr) => {
    for(var i = 0; i < arr.length; i++ ) {
      
    }
  }

  let x = 1; // global scope variable
  
  let foo = () => {
    var sum = 0; // function scope variable
    
    if( 1 < 2 ) {
      var y = 2; // function scope variable
      let z = 3; // this is a block-scope variable
    }
    
    console.log( y );
    console.log( z ); // not allowed
  }

  // old syntax for class
function Person(name, age) {
	this.name = name;
  	this.age = age;
  
  	this.getName = function() {
    	return this.name;
    }
}

var john = new Person( 'John', 24 );
console.log( john );

// new syntax for class
class Person2 {
  	// in JS there can be only one constructor (I now remembered you can have more than one in Java :)
	constructor( name, age ) {
    	this.name = name;
      	this.age = age;
    }
  
  	getName() {
      return this.name;
    }
}

var jenny = new Person2( 'Jenny', 25 );
console.log( jenny );

// greeting is of string type
let greeting: string = 'hello';

// we cannot assign a number to a string
greeting = 10;

// function arguments can also be assigned types
// the return type can also be specified in TypeScript
var sum = (a: number, b: number) : number => a + b;

// we cannot pass anything other than a number now
sum('hello', 1);

// a string cannot be assigned the number returned by sum()
let result : string = sum(1, 2);