/*
console.log('Jonas');
console.log(23);

let firstName = "Eldar"


console.log(firstName);
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Barmen'; 



let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Eldar');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);


let year;
console.log(year)
console.log(typeof year)

year = 1991;

console.log(typeof null)
*/



// LET, CONST and VAR -----



// let age = 30;
// age = 31;

// const birthYear = 1991;

   

// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;

// x = y = 25 - 10 - 5;

// console.log(x, y);

// let massMark = 78;
// let heighMark = 1.69;

// let massJohn = 92;
// let heighJohn = 1.95;

// let massMark = 95;
// let heighMark = 1.88;

// let massJohn = 85;
// let heighJohn = 1.76;

// const bmiMark = massMark / (heighMark * heighMark);

// const bmiJohn = massJohn / (heighJohn * heighJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);

// if(bmiMark > bmiJohn){
//     console.log('Mark ima veci BMI');
// } else {
//     console.log('Mark ima manji bmi');
// }


// STRING --------------


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ',a ' + (year - birthYear) + ' years old ' +  job + '!';

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}. `;

// console.log(jonasNew)

// console.log('ovo je proba \n\ da li radi');

// console.log(`ovo je proba2 
// da li radi`);


// const age = 15;

// if(age >= 18) {
//     console.log('Sara can start driving licence ');
// } else {
//     const yeardLeft = 18 - age;
//     console.log(`SARAH IS TOO YOUNG.WAIT ANOTHER ${yeardLeft} YEARS.`)
// }

// const birthYear = 2012;

// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// Challenge #2

// let massMark = 95;
// let heighMark = 1.88;

// let massJohn = 85;
// let heighJohn = 1.76;

// const bmiMark = massMark / (heighMark * heighMark);


// const bmiJohn = massJohn / (heighJohn * heighJohn);

// const markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHigherBMI);

// if(bmiMark > bmiJohn){
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark}) `);
// }


// // type conversion
//  const inputYear = '1991';  
//  console.log(Number(inputYear), inputYear);
//  console.log(Number(inputYear) + 18);

//  console.log(Number('Jonas'));
//  console.log(typeof NaN);

//  console.log(String(23), 23);

//  //type coercion
 
//  console.log('I am ' + 23 + ' years old.');
//  console.log('23' - '10' - 3);
//  console.log('23' * '2');

//  let n = '1' + 1;
//  n = n - 1;

//  console.log(n);


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10;
// if(money) {
//     console.log('Dont spent it all');
// } else {
//     console.log('You should get a job');
// }


// let height;
// if(height) {
//     console.log('YAy.Height is defined');
// } else {
//     console.log('Height is undefined');
// }


// const age = 18;

// if(age === 18) console.log('You just became an adult');

// if(age == 18) console.log('You just became an adult');

// const favourite = Number(prompt("whats your favorite number?"));


// console.log(favourite);
// console.log(typeof favourite);

// if(favourite == 23) {
//     console.log('Cool 23 is an amazing  ');
// } else if(favourite === 7) {
//     console.log('7 IS ALSO COOL ');
// } else {
//     console.log('Niste pogodili broj')
// }


// if(favourite !== 23){
//     console.log('why not 23?')
// }

// const hasDriversLicence = true;
// const hasGoodVision = true;

// console.log(hasDriversLicence && hasGoodVision);

// console.log(hasDriversLicence || hasGoodVision);

// console.log(!hasDriversLicence);


// if(hasDriversLicence && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

// const isTired = false;

// console.log(hasDriversLicence && hasGoodVision && isTired);

// if(hasDriversLicence && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }



//-----------------------------------------------

// let resultDolphins = (96 + 108 + 89) / 3;

// let resultKoalas = (88 + 91 + 110) / 3;

// console.log(resultDolphins, resultKoalas)

// if(resultDolphins === resultKoalas) {
//     console.log("Dolphins and Koalas have a draw result.");
// } else if (resultDolphins > resultKoalas) {
//     console.log("Dolphins wins Koalas");
// } else {
//     console.log("Koalas wins Dolphins");
// }

//-----------------------------------------------

// let resultDolphins = (97 + 112 + 101) / 3;

// let resultKoalas = (109 + 95 + 123) / 3;


// if(resultDolphins === resultKoalas) {
//     console.log("Dolphins and Koalas have a draw result.");
// } else if (resultDolphins > resultKoalas && resultDolphins >= 100) {
//     console.log("Dolphins wins Koalas with over 100 points");
// } else {
//     console.log("Koalas wins Dolphins with over 100 points");
// }

//-----------------------------------------------

// let resultDolphins = (97 + 112 + 101) / 3;

// let resultKoalas = (109 + 95 + 106) / 3;

// console.log(resultDolphins, resultKoalas);

// if(resultDolphins === resultKoalas && resultDolphins >= 100 && resultKoalas >= 100) {
//     console.log("Dolphins and Koalas have a draw result.");
// } else if (resultDolphins > resultKoalas && resultDolphins >= 100) {
//     console.log("Dolphins wins Koalas with over 100 points");
// } else {
//     console.log("Koalas wins Dolphins with over 100 points");
// }


//-----------------------------------------------  



// const age = 23;

// // age >= 18 ? console.log("Imam preko 18 godina") : console.log("Ipak nemam preko 18 godina")

// const drink = age >= 18 ? "coca cola" : "water";

// console.log(drink);


// let drink2;

// if(age >= 18) {
//     drink2 = "coca cola";
// } else {
//     drink2 = 'water';
// }

// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? "coca cola" : "water"}`)



//-------------------------------------------

//ternary javascript challenge

// const bill = 40;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and total value ${bill + tip}`);



// const name = "jonas";

// const first = () => {
//     let a = 1;
//     const b = second(7, 9);
//     a = a + b;
//     return a;
// }

// function second(x, y) {
//     var c = 2;
//     return c;
// }

// const x = first();

