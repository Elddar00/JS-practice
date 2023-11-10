//function 


// //function declaration 
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(2000);

// //console.log(age1);




// //function expression

// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(2000);

// console.log(age1, age2);


  

// Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in  ${retirement} years`
// }

// console.log(yearsUntilRetirement(2000, 'Eldar'));
// console.log(yearsUntilRetirement(1980, 'Bob'));



//FUNCTION CALLING OTHER
//FUNCTION

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProccesor(apples,oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// fruitProccesor(2, 3);  
// console.log(fruitProccesor(2, 3));



//---------------------------------------

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in  ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }



// console.log(yearsUntilRetirement(2000, 'Eldar'));
// console.log(yearsUntilRetirement(1950, 'Bob'));


// CHALLENGE <---------


    // const calcAverage = (pointsFirstTeam, pointsSecondTeam) => {
    //     const avgDolhins = pointsFirstTeam / 3 ;
    //     const avgKoalas = pointsSecondTeam / 3 ;

    //     return `${avgDolhins} ${avgKoalas} `;
    // }

    // console.log(calcAverage(138, 168));
    

    // const checkWinner = function(avgDolhins, avgKoalas) {
    //     if(avgDolhins >= 2 * avgKoalas) {
    //         console.log("Dolhins wins");
    //     } else if(avgKoalas >= 2 * avgDolhins){
    //         console.log("Koalas wins");
    //     }else {
    //         console.log("We don't have winner");
    //     }
    // }

    // console.log(checkWinner(46, 56));


    //---------------------------------------
   
// const calcAverage = (a, b, c) => (a + b + c) /3;
// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins wins Koalas (${avgDolphins} vs. ${avgKoalas})`);
//     }else if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas wins Dolphins (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("WE DONT HAVE WINNER!");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);


// ----------------ARRAYS-------------------


//  const friend1 = 'Miki';
//  const friend2 = 'Steven';
//  const friend3 = 'Peter';

//  const friends = ['Miki', 'Steven', 'Peter'];

//  console.log(friends);

//  const yearr = new Array(1991, 1984, 2008, 2020);

//  console.log(friends[0]);

//  console.log(friends.length);
//  console.log(friends[friends.length - 1]);

//  friends[2] = 'Jay';
//  console.log(friends);

// const firstName = 'Jonas';
//  const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];


//  console.log(jonas);


//  //Exercise
//  const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);



// const friends = ['Miki', 'Steven', 'Peter'];

// //Add elements
// const newLenght  = friends.push('Jay');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('John');
// console.log(friends);

// //Remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')) {
//     console.log('You have a friend called Steven.');
// }


//CHALLENGE 

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bill1 = calcTip(100);
// console.log(bill1);

// const bills = [125, 555, 44];

// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);

// console.log(tip1, tip2, tip3);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];

// console.log(total);





//------------------Objects------------------



// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]); 
// console.log(jonas['last' + nameKey]); 


// const interesterIn = prompt('What do you want to know about Jonas? Chose between fisrtName, lastName, age, job, and friends');


// if(jonas[interesterIn]) {
//     console.log(jonas[interesterIn]);  
// } else {
//     console.log('Wrong request! Choose again!');
// }


// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';

// console.log(jonas);


// //MINI CHALLENGE

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}.`);




// OBJECT METHODS


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLincense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function() {
//     //     //console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriverLincense ? 'a' : 'no'} driver's licences.`;
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// //console.log(jonas['calcAge'](1991));

// console.log(jonas.getSummary());



//  CHALLENGE OBJECTS


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,


//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         this.bmi = this.bmi.toFixed(2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,


//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         this.bmi = this.bmi.toFixed(2);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi);
// console.log(john.bmi);

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName}'s (${john.bmi})`);
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s (${mark.bmi})`);
// }




// ITERATION: THE FOR LOOP

// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');
// console.log('Lifting weights repetition 4 ');
// console.log('Lifting weights repetition 5 ');

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}. `);
// }



//--------------------------


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

//     const types = [];

// for(let i = 0; i< jonas.length; i++) {
//     console.log(jonas[i]);

//     // Filling types array
//     //types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);


 

//THE WHILE LOOP


// let rep = 1;

// while(rep <= 10) {
//     console.log(`Ponavljanje br. ${rep}`);

//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end..');
// }