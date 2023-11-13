'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             //Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Stiven';
//             //Reassigning outer scope's variable
//             output = 'NEW OUTPUT';

//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//         }
//         // console.log(str);
//         console.log(millenial);
//         console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);



// HOISTING AND TDZ IN PRACTICE


// console.log(me);
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = 'teacher';
// const year = 1991;


// //Functions 

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));



// // Only function declaration work 
// function addDecl(a, b) {
//     return a + b;
// }

// //Don't work
// const addExpr = function (a, b) {
//     return a + b;
// }

// //Don't work
// const addArrow = (a, b) => a + b;



// //Example

// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }


// var x = 1;
// let y = 2;
// const z = 3;

// if(x === window.x) console.log(true);




//                  this keyword

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAge(2000);
 

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAgeArrow(2000);


// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// };
 
// jonas.calcAge();


// const matilda = {
//     year:2017,
// };


// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;


// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         // console.log(this);
//         console.log(2037 - this.year);

//         // solution 1
//         // const self = this;
//         // const isMillenial = function () {
//         //     console.log(self);
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     // console.log(this.year >= 1981 && this.year <= 1996); 

//         // };


//         //solution 2
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },

//     greet: () => {
//         console.log(`Hey ${this.firstName}`);
//     },
// };
// jonas.greet();
// jonas.calcAge();



// // Argument keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

// addExpr(2, 3);
// addExpr(2, 5, 8, 12);



// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

// addArrow(2, 5, 6);
