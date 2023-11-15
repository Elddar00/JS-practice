'use strict';

const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categorise: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // EA6 enhanced object literals
    openingHours,
    

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order recivded! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};   

    // Strings methods practice

    const flights = 
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    const getCode = str => str.slice(0,3).toUpperCase();

    for(const flight of flights.split('+')) {
       const [type, from, to, time] = flight.split(';');
       const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
       console.log(output);
     };

    // 🔴

    // Split and join
    // console.log('a+very+nice+string'.split('+'));
    // console.log('Jonas Smedtmann'.split(' '));

    // const [firstName, lastName] = 'Jonas Smedtmann'.split(' ');

    // const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
    // console.log(newName);

    // const capitalizeName = function(name) {
    //     const names = name.split(' ');
    //     const namesUpper = [];

    //     for(const n of names){
    //         // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    //         //same result
    //         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    //     }
    //     console.log(namesUpper.join(' '));
    // };

    // capitalizeName('jessica ann smith davis');
    // capitalizeName('jonas schmedtmann');

    // Padding
    // const message = 'Go to gate 23!';
    // console.log(message.padStart(25, '+').padEnd(30, '+'));
    // console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

    // const maskCreditCard = function (number) {
    //     const str = number + ''; 
    //     const last = str.slice(-4);
    //     return last.padStart(str.length, '*');
    // }

    // console.log(maskCreditCard(42311111))
    // console.log(maskCreditCard(433424234234));
    // console.log(maskCreditCard('2342342424234242422342'));


    //Repeat
    // const message2 = 'Bad wather...All Departues Delayed... \n';
    // console.log(message2.repeat(5));

    // const planesInLine = function(n) {
    //     console.log(`There are ${n} planes in line ${'#'.repeat(n)}`);
    // }

    // planesInLine(1);
    // planesInLine(2);
    // planesInLine(3);

    // CHALLENGE #4

    // document.body.append(document.createElement('textarea'));
    // document.body.append(document.createElement('button'));


    // document.querySelector('button').addEventListener('click', function () {
    //     const text = document.querySelector('textarea').value;
    //     const rows = text.split('\n');

    //     for (const [i, row] of rows.entries()) {
    //         const [first, second] = row.toLowerCase().trim().split('_');

    //         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    //         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    //     }
    // });

    //✅

    // underscore_case
    //  first_name
    // Some_Variables
    //  calculate_AGE
    // delayed_departue


    //WORK WITH STRING PART 2

    // const airline = 'TAP Air Portugal';

    // console.log(airline.toLowerCase());
    // console.log(airline.toUpperCase());

    // Fix capitilization in name
    // const passenger = 'jOnAS'; //Jonas
    // const passengerLower = passenger.toLowerCase();
    // const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    // console.log(passengerCorrect);

    // Comparing emails
    // const email = 'hello@jonas.io';
    // const loginEmail = '  Hello@Jonas.Io \n';

    // const lowerEmail = loginEmail.toLowerCase();
    // const trimmedEmail = lowerEmail.trim();

    // const normalizedEmail = loginEmail.toLowerCase().trim();
    // console.log(normalizedEmail);
    // console.log(email === normalizedEmail);

    // replacing
    // const priceGB = '288,97£';
    // const priceUs = priceGB.replace('£', '$').replace(',', '.');
    // console.log(priceUs);

    // const announcement = 'All passengers come to barding door 23. Boarading door 23!';

    // console.log(announcement.replaceAll('door', 'gate'));

    // Booleans
    // const plane = 'Airbus A320neo';
    // console.log(plane.includes('A320'));
    // console.log(plane.includes('Boeing'));
    // console.log(plane.startsWith('Air'));

    // if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
    //     console.log('Part of the NEW Airbus family');
    // }

    // Practice exercise
    // const checkBaggage = function(items) {
    //     const baggage = items.toLowerCase();
    //     if(baggage.includes('knife') || baggage.includes('gun')) {
    //         console.log('You not allowed on board');
    //     }else {
    //         console.log('Welcome aboard');
    //     }
    // };

    // checkBaggage('I have a laptop, some Food and a pocket Knife');
    // checkBaggage('Socks and camera');
    // checkBaggage('Got some snacks and a gun for protection');


    // Working with STRINGS
    // const airline = 'TAP Air Portugal';
    // const plane = 'A320';

    // console.log(plane[0]);
    // console.log(plane[1]);
    // console.log(plane[2]);
    // console.log('B737'[0]);

    // console.log(airline.length);
    // console.log('B737'.length);

    // console.log(airline.indexOf('r'));
    // console.log(airline.lastIndexOf('r'));
    // console.log(airline.indexOf('portugal'));

    // //Position where slice method will start
    // //This result is called a substring
    // //because it's just a part of orginal string
    // console.log(airline.slice(4));
    // //the end value not included in the string
    // console.log(airline.slice(4, 7));

    // console.log(airline.slice(0, airline.indexOf(' ')));
    // console.log(airline.slice(airline.lastIndexOf(' ') + 1));

    // console.log(airline.slice(-2));
    // console.log(airline.slice(1, -1));

    // const checkMiddleSeat = function(seat) {
    //     // B and E are middle seats
    //     const s = seat.slice(-1);
    //     if(s === 'B' || s === 'E')
    //     console.log('You got the middle seat');
    //     else console.log('You got lucky');
    // }

    // checkMiddleSeat('11B');
    // checkMiddleSeat('23C');
    // checkMiddleSeat('3E');





        // CHALLENGE #3

        // const gameEvents = new Map([
        //     [17, '⚽ GOAL'],
        //     [36, '🔁 Substitution'],
        //     [47, '⚽ GOAL'],
        //     [61, '🔁 Substitution'],
        //     [64, '🔶 Yellow card'],
        //     [69, '🔴 Red card'],
        //     [70, '🔁 Substitution'],
        //     [72, '🔁 Substitution'],
        //     [76, '⚽ GOAL'],
        //     [80, '⚽ GOAL'],
        //     [92, '🔶 Yellow card'],
        //     ]); 


        // 1.

        // const events = new Set(gameEvents.values());
        // console.log(events);

        // 2.

        // gameEvents.delete(64);
        
        // 3.

        //  console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
        
         // 4.

        //  for(const [key, value] of gameEvents){
        //     const half = key <= 45 ? 'FIRST' : 'SECOND';
        //     console.log(`[${half} HALF] ${key}: ${value}`);
        //  }

    // Maps: Iteration-----------------

    // const question = new Map([
    //     ['question', 'What is the best programming language in the world?'],
    //     [1, 'C'],
    //     [2, 'Java'],
    //     [3, 'JavaScript'],
    //     ['correct', 3],
    //     [true, 'Correct'],
    //     [false, 'Try again'],
    // ]);
    // console.log(question);

    //Convert object to map
    // console.log(Object.entries(openingHours));
    // const hoursMap = new Map(Object.entries(openingHours));
    // console.log(hoursMap);

    //Quiz app
    // console.log(question.get('question'));
    // for(const [key, value] of question) {
    //     if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    // }
    // // const answer = Number(prompt('Your answer'));
    // const answer = 3;
    // console.log(answer);

    // console.log(question.get(question.get('correct') === answer)); 

    //Convert map to array
    // console.log([...question]);
    //console.log(question.entries());
    // console.log([...question.keys()]);
    // console.log([...question.values()]);

    // Maps: Iteration-----------------END-------

    // Maps: Fundamamentals
    // const rest = new Map();
    // rest.set('name', 'Classico Italiano');
    // rest.set(1, 'Firenze, Italy');
    // console.log(rest.set(2, 'Lisabon, Portugal'));

    // rest.set('categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are close');

    // console.log(rest.get('name'));
    // console.log(rest.get(true));
    // console.log(rest.get(1));

    // const time = 21;
    // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

    // console.log(rest.has('categories'));
    // rest.delete(2);
    //rest.clear(); 

    // const arr = [1,2];
    // rest.set(arr, 'Test');
    // rest.set(document.querySelector('h1'), 'Heading');
    // console.log(rest);
    // console.log(rest.size);

    // console.log(rest.get(arr));


    // Work with Set -------------------
    // const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

    // console.log(ordersSet);

    // console.log(new Set('Jonas'));

    // console.log(ordersSet.size);
    // console.log(ordersSet.has('Pizza'));
    // console.log(ordersSet.has('Bread'));
    // ordersSet.add('Garlic Bread');
    // ordersSet.add('Garlic Bread');
    // ordersSet.delete('Risotto');
    // ordersSet.clear();
    // console.log(ordersSet);

    // for(const order of ordersSet) console.log(order);

    // Example
    // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
    // const staffUnique = [...new Set(staff)];
    // console.log(staffUnique);
    // console.log(new Set('eldaridrizovic').size);



    // Property NAMES
    // const properties = Object.keys(openingHours);
    // console.log(properties);

    // let openStr = `we are open on ${properties.length} days: `
    // for(const day of properties) {
    //     openStr += `${day}, `;
    // }

    // console.log(openStr);

    //Property VALUES
    // const values = Object.values(openingHours);
    // console.log(values);

    // Entire object
    // const entries = Object.entries(openingHours);
    // console.log(entries);

    // [key,values]
    // for(const [key, { open, close }] of entries) {
    //     console.log(`On ${key} we open at ${open} and close at ${close}.`);
    // }

   
    // OPTIONAL Chaining

    // if(restaurant.openingHours && restaurant.openingHours.mon) console.log
    // (restaurant.openingHours.mon.open);

    // console.log(restaurant.openingHours.mon.open);

    //WITH optioanal chaining
    // console.log(restaurant.openingHours.mon?.open);
    // console.log(restaurant.openingHours?.mon?.open);

    //Example
    // const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

    // for(const day of days) {
    //     const open = restaurant.openingHours[day]?.open ?? 'closed';
    //     console.log(`On ${day}, we open at ${open}`);
    // }

    // Methods
    // console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

    // Arrays
    // const users = [{name: 'Jonas', email: 'hello@jonas.com'}];
    // const users = [];

    //Easy with optional chaining (?)
    // console.log(users[0]?.name ?? 'User array empty');

    //Example without optional chaining
    // if(users.length > 0) console.log(users[0].name);
    // else console.log('user array empty');

    //Looping Arrays
    //  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

    //  for (const item of menu) console.log(item); 

    //  for(const [i, el] of menu.entries())  {
    //     console.log(`${i + 1}: ${el}`);
    //  }

    // Coding Challenge #1
    const game = {
        team1: 'Bayern Munich',
        team2: 'Borrussia Dortmund',
        players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
        },
    };

    
    // 1.
    // const [players1, players2] = game.players;
    // console.log(players1, players2);

    // 2.
    // const [gk, ...fieldPlayers] = players1;
    // console.log(gk);

    // 3.
    // const allPlayers = [...players1, ...players2];
    // console.log(allPlayers);

    // 4.
    // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

    // 5.
    // const {odds: {team1, x: draw, team2}} = game;
    // console.log(team1, draw, team2);

    // 6.
    // const printGoals = function (...players) {
    //     console.log(`${players.length} goals were scored!`);
    // }
    // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    // printGoals('Davies', 'Muller');
    // printGoals(...game.scored);

    // 7.
    // team1 < team2 && console.log(`Team 1 is more likely to win`);
    // team1 > team2 && console.log(`Team 2 is more likely to win`);


    // // Nullish coalescing operator (??)

    //  restaurant.numGuests = 0;

    //  const guests = restaurant.numGuests || 10;
    //  console.log(guests);

    //  const guestsCorrect = restaurant.numGuests ?? 10;
    //  console.log(guestsCorrect);


    // // Use ANY data type, return ANY data type, short-circuting
    // console.log(3 || 'Jonas');
    // console.log('' || 'Jonas');
    // console.log(true || 0);
    // console.log(undefined || null);

    // console.log(undefined || 0 || "" || 'Hello' || 23 || null);

    // // restaurant.numGuests = 23;
    // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
    // console.log(guests1);
    
    // const guests2 = restaurant.numGuests || 10;
    // console.log(guests2);
    // console.log('---------AND---------');

    // // AND operator (&&)
    // console.log(0 && 'Jonas');
    // console.log(7 && 'Jonas');

    // console.log('Hello' && 23 && null && 'jonas');

    // if(restaurant.orderPizza) {
    //     restaurant.orderPizza('mushrooms', 'spinach');
    // }

    // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

 
// ------------------------- REST PATERN------------------------
    // const arr = [1,2, ...[3,4]];

    // const [a, b, ...others] = [1,2,3,4,5];

    // console.log(a, b, others);

    // const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
    // console.log(pizza, risotto, otherFood);

    // //Objects

    // const {sat, ...weekdays} = restaurant.openingHours;
    // console.log(weekdays);

    // //Functions
    // const add = function(...brojevi) {
    //     let rez = 0;
    //     for(let i = 0; i<brojevi.length; i++) rez += brojevi[i];
    //     console.log(rez);
    // }
    // add(2,3);
    // add(5,3,7,2);
    // add(8,2,5,3,2,1,4);

    // const x = [23, 5, 7];
    // add(...x);
 
    // // functions and rest
    // restaurant.orderPizza('nesto', 'luk', 'olives', 'nesto2');
    // restaurant.orderPizza('pecurke');

    // ----------- Spread Operator [...]

    // const arr = [7, 8, 9];
    // const badNewArr = [1,2, arr[0], arr[1], arr[2]];
    // console.log(badNewArr);

    // const newArr = [1,2, ...arr];
    // console.log(newArr);

    // console.log(...arr);

    // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
    // console.log(newMenu);


    // //Copy array
    // const mainMenuCopy = [...restaurant.mainMenu];

    // //Join 2 array
    // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
    // console.log(menu);

    // // Iterables: array, strings, maps, sets. NOT object
    // const str = 'Jonas';
    // const letters = [...str, ' ', 'S.'];
    // console.log(letters);
    // console.log(...str);

    // //Not working
    // // console.log(`${...str} `);

    // // Real-world example
    // // const ingreadients = [prompt('Let\'s make pasta!Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
    // // console.log(ingreadients);

    // // restaurant.orderPasta(ingreadients[0], ingreadients[1], ingreadients[2]);
    // // restaurant.orderPasta(...ingreadients);

    // ------------------------------------------ [...]

    // // Objects
    // const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
    // console.log(newRestaurant);

    // const restaurantCopy = {...restaurant};
    // restaurantCopy.name = 'Ristorante Roma';
    // console.log(restaurantCopy.name);
    // console.log(restaurant.name);
    

// ---------------------------- DESC OBJ

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });

// const {name, openingHours, categorise } = restaurant;
// console.log(name, openingHours, categorise);

// const {
//     name: restaurantName, 
//     openingHours: hours, 
//     categorise: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);  

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);


// // N  ested objects
// const { 
//     fri: {open: o, close: c },
//  } = openingHours;
// console.log(o, c);



// --------------------------- DESC ARRAY
// const arr = [2,3,4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[3];

// const [x, y, z] = arr;
// console.log(x, y, z);


// let [main, , secondary] = restaurant.categorise;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested desctructuring
// const nested = [2, 4, [5,6]];
// const [i, ,j] = nested;
// console.log(i, j);
// const [i, , [j,k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// --------------------- DESC ARRAY

 //CHALLENGE #2

    // 1.
    // const goalScored = [...game.scored];   
    // for(const [i, el] of goalScored.entries()) {
    //     console.log(`Goal ${i + 1}: ${el}`);
    // }

    // 2. 
    // let odds = Object.values(game.odds);
    // let average = 0;
    // for(const odd of odds)
    // average += odd;
    // average /= odds.length;
    // console.log(average);

    // 3.
    // for(const [team, odd] of Object.entries(game.odds)) {
    //     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    //     console.log(`Odd of ${teamStr} ${odd}`);
    // } 
