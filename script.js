'use strict'
/* this keyword */ // this is the object that the function is a property  of...

// this : Is a special variable that is created for every execution context(all functions).
// It takes the value of(points to) the 'owner' of the function in which the 'this' keyword is used.

// The value of the this keyword is not always the same; it depends on how the function is called:

/* 
    - Method ===> this = object that is calling the method.
    - function call ===> this = undefined. (in strict mode otherwise. window ==== this)
    - Arrow functions ====> this = this of surrounding function(lexical this). Arrow functions does not have their own this keyword!!!
    - Event listener ====> this = DOM element that the handler is attached to!
    **** Next section ===> new keyword, call(), bind(), apply() this keyword with those!
*/

console.log(this); //Global object ===> window!

const calcAge = function (birthYear) {
    console.log(2020 - birthYear);
    console.log(this); //undefined in strict mode or Global object ===> window!(not strict mode)
}

calcAge(1990);

const calcAgeArrFunc = birthYear => {
    console.log(2020 - birthYear);
    // Arrow function does not have their own this keyword
    console.log(this); //Global object ===> window! 
}

calcAgeArrFunc(1990);

const mike = {
    year: 1990,
    calcAge: function () {
        console.log(this); // this ===>> object ===>> mike = {....}
        console.log(2020 - this.year); // this ===> mike = { year: 1990 } ===> mike.year = 1990 ====> this.year = 1990;
    },
};

mike.calcAge(); //mike called calcAge method therefore this keyword points to the method


const anthony = {
    year: 1995,
};

anthony.calcAge = mike.calcAge;

console.log(anthony); // {year: 1995, calcAge: ƒ} 
console.log(mike); // {year: 1990, calcAge: ƒ} 

anthony.calcAge(); // this points to the object from the method that was called!