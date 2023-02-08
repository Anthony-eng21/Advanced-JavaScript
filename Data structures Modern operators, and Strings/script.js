'use strict';

/*==========================CODING CHALLENGE #1========================*/
/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
//   //#1 making both arrays inside the players array into new variables kfor each team 
//   const [players1, players2] = game.players;
//   console.log(players1, players2);
//   //#1

//   //#2 getting the first name from the array storing it into gk and using the rest syntax to get the rest of the players and storing it into players 1 for the first array
//   const [gk, ...fieldPlayers] = players1;
//   console.log(gk, fieldPlayers);
//   //#2

//   //#3 creating an array with all the players use spread operator to extend both arrays into one 
//   const allPlayers = [...players1, ...players2];
//   console.log(allPlayers);
//   //#3

//   //#4 unpacking array and adding new values to it 
//   const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
//   console.log(players1Final);
//   //#4

//   //#5 nested destructuring
//   const {odds: { team1, x: draw, team2 }, //how we get into a nested object
//   } = game;
//   console.log(team1, draw, team2); //1.33 3.25 6.5
//   //#5

//   //#6
//   const printGoals = function (...players) {
//     console.log(`${players.length} goals were scored`)
//   };

//   // printGoals('Davies', 'Muller', 'Lewandowski', 
//   // 'Kimmich'); //this call gives us four goals that were scored giving us a length of scores for our
//   //logic in our function block
//   // printGoals('Davies', 'Muller');
//   // printGoals(...game.scored); // with spread operator we can take the players out of the array and display them one by one
//   //with any amount of arguments/parameters as possible so its mutabe af
//   //#6

//   //#7
//   //we use && because after a value is truthy we actually want the evaluation to continue 
//   //Important inffoooo
//   team1 < team2 && console.log('Team 1 is more likely to win');
//   team1 > team2 && console.log('Team 2 is more likely to win');
//   //#7
// /*==========================CODING CHALLENGE #1========================*/

 /*==========================CODING CHALLENGE #2========================*/

  /* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// for (const [i, player] of game.scored.entries()) //get the iteration of the player that scored and their entries becausse we want the index of the goals
// console.log(`Goal ${i + 1}: ${player}`); // i + 1 because we dont want to start the iteration with 0 
// //1.

// //2.
// const odds = Object.values(game.odds); // gets the values of the odds object
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average); //3.6933333333333334 average odds
// //2.

// //3 print the average of the content to the console
//   for (const [team, odd ] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`; //teranry operator x or draw or victory of odds 
//     console.log (`Odd of ${teamStr} ${odd}`);
//   }
// //3

// //4/bonus
// const scorers = {}; //making a new object
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
//4
/*==========================CODING CHALLENGE #2========================*/


/*==========================CODING CHALLENGE #3========================*/

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.  create a new array of the gameEvent values withoout duplicates

// const events = [...new Set(gameEvents.values())] //putting the values
// //  into a new array with the new keyword and spread operator to unpack the values from the set

// console.log(events); //0:'⚽️ GOAL' 1: '🔁 Substitution' 2: '🔶 Yellow card' 3: '🔴 Red card' 

// //2.

// gameEvents.delete(64); //deleting the key that starts with 64 along with the value from the map with the delete method 

// //3.
// const time = [...gameEvents.keys()].pop(); // this game actaully lasted 92 minutes so we want to be specific 
// //  and use the pop method t get the last minute of the game from the key values 

// console.log(`An event happened on average, every 
// ${time / gameEvents.size} minute`);  //An event happened on average, every 9.2 minutes
// //taking the gameevent map size and dividing it by the total of minutes in the game and passing the information into a nifty string 

//  console.log(time) //92  this is because the last key in the map is 92 which is the real duration of the game 

//  //4. 
//  for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'Second' // this checks if the event either happened in the first or second half of the game 
//   console.log(`${half} Half ${min}: ${event}`) // we pass in the half variable so we can know which half we are in 
//  }

 
/*==========================CODING CHALLENGE #3========================*/

/*==========================CODING CHALLENGE #4========================*/

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement
//   ('textarea'));
// document.body.append(document.createElement
//   ('button'));


// document.querySelector('button').addEventListener
// ('click', function () {
//   const text = document.querySelector('textarea').
//   value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {  //[i, row] destructured so i is the index and row is the element
//     //entries gets the index of the element
//     const [first, second] = row.toLowerCase().trim().split('_'); //split
//     //gets both words and makes them into lower case trims and splits them where they are seperated by _ into two new array objects first, second

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase() // we want to change the first character of the second word into uppercase 
//     )}`; // get both the words for the output variable and make the second words first index be uppercase
//     console.log(`${output.padEnd(20)}${'🦄'.repeat(i + 1)}`) //the padding is always 20
//     //after each iteration the console will print a unicorn with each iteration value starting from 1 (not 0(.repeat(i + 1)))
//     //with the repeat method 
//   } 
// });

/*==========================CODING CHALLENGE #4=======================*/

/* ========================== string method practice ============================== */
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

    //making this string into 4 pieces and making it a lot more legible

    const getCode = str => str.slice(0,3).toUpperCase(); // litle custom function to make the first three characters in a string uppercasse

    for(const flight of flights.split('+')) { // split makes sub arrays from strings for every + occurence
      const [type, from, to, time] = flight.split(';'); //using destructuring to get the diff
      const output = `${type.startsWith('_Delayed') ? '🧚'
       : ''}${type.replaceAll(
        '_'
       ,
        ' '
      )}${getCode(from)} ${getCode(to)} (${time.replace
      (':', 'h')}) `.padStart(36, '✈️🗽'); //makes every string 36 characters long
      console.log(output);
    }

/* ========================== string method practice ============================== */
  const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
  const openingHours = {
    [weekDays[3]]: { 
      open: 12,
      close: 22,
    },// thur: {open: 11, close: 22}
    [weekDays[4]]: {
      open: 11,
      close: 23,
    }, //fri: {open: 11, close: 23} 

    [weekDays[5]]: { //computed property with template literal and new es6 expression for computing object values s
      open: 0, // Open 24 hours
      close: 24, //day-6: {open: 0, close: 24} //doesn't print saturday instead it prints the 
      // day 6 from the object literal and the cool way to destructure object and compute property names
    },
  };
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //method to order food 
  // openingHours: openingHours, // before ES6

  //ehanced object literal >= ES6
  openingHours,

  order(starterIndex, mainIndex){ //easier way to write methods 
    return [this.starterMenu[starterIndex], 
    this.mainMenu[mainIndex]]; //get index position of a property
  },

  
  /* ================================= Object destructuring ================================= */

  orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00', address}) { // doesn't matter what order that we pass the object arguments
    // you can set up default values by assigning the parameters to (strings, index positons, numbers) whatever 
    console.log
    (
      `order received! ${this.starterMenu
      [starterIndex]}
      and ${this.mainMenu
      [mainIndex]}
      will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function(ing1, ing2, ing3) {
    // console.log(`here is your delicious with pasta 
    // ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...
    otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
}; 
/* ======================================== strings and how to work with them pt1-pt3 ============================*/

/* =======================================================PT:3========================================*/

// //split and join methods 
// console.log('a+very+nice+string'.split('+')); //(4) ['a', 'very', 'nice', 'string']
// //everything is split up into array values in a single array and the '+' is what does the writing of the new values from the original string 
// console.log('Tonay woodstank'.split(' ')); //(2) ['Tonay', 'woodstank']

// const [firstName, lastName] = //destructuring 
// 'Tonay woodstank'.split(' ');  //(2) ['Tonay', 'woodstank']
// //creates an array out of the strings 

// //join method basically does the opposite of the split method and makes an element between the iterables  
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ') //in an array because out string was destructured into an array  
// console.log(newName); //Mr. Tonay WOODSTANK

// const capitalizeName = function(name) {
//   const names = name.split(' ');
//   //creates an array out of the arguments 
//   const namesUpper = [];
//   //we make an empty array to return/push the data onto 

//   for (const n of names) {
//      //we use the push method to put all the new iterated data into it's last position in the array 
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1)); //uppercases the first index value 
//      //then slices/ extracts the rest of the values/positions of the strings

//     //that ^ but better
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()
//     )); //replace n at the position of [0] to 
//     // n at the position of [0]  to upperCase this method of doing it is way more solid and human readable 

//   }
//   console.log(namesUpper.join(' ')); // makes spaces in the array values  
// }
// // this function will always give out the expected out put 
// capitalizeName('jessica ann smith davis');
// capitalizeName('tony woodstank');

// //padding to strngs 
// const message = 'Go to gate 23';
// //using padStart method at the beginning of a string
// console.log(message.padStart(20, '+').padEnd(30, '+')); //makes sure that the string is padded 
// // by some an expected length and the extra string element for padding at the beginning and end 
// console.log('Tony'.padStart(20, '+')) //whole string including the letter characters is equal to 20 in length 

// //real world example of padding 

// const maskCreditCard = function(number) {
//   const str = number + ''; // this number now becomes a string when conversion with a plus sign happen, if a string is one of the operands then 
//   // the other type will be converted into a string
//   const last = str.slice(-4); // grab/extract the last 4
//   return last.padStart(str.length, '*'); //get the rest of the string 
// }
// //usually you can only see the last four digits we need to mask any number before the last 4 
// console.log(maskCreditCard(451515156315125)); // arguments can be numbers or strings very imiportant
// console.log(maskCreditCard('45056049878721'));

// //repeat method
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5)); // one big string with the message repeating 5 times 

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈️'.
//   repeat(n)}`) //.repeat is what we += onto the n arg along with the emoji string 
// }
// planesInLine(5);//There are 5 planes in line ✈️✈️✈️✈️✈️
// planesInLine(3);//There are 3 planes in line ✈️✈️✈️
// planesInLine(12);//There are 12 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️

/* =======================================================PT:3========================================*/




/* =======================================================PT:2========================================*/

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());//tap air portugal
// console.log(airline.toUpperCase());//TAP AIR PORTUGAL

// //Fix capitalization in name 
// const passenger = 'jOnas' //Jonas
// const passengerLower = passenger.toLowerCase();//makes everything lower case
// const passengerCorrect = 
// passengerLower[0].toUpperCase() //first letter to uppercase J
// + passengerLower.slice(1); //add the rest of the letters to the string with the slice method starting at [1]/o
// console.log(passengerCorrect); // Jonas

// // comparing user input email 
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@jonas.Io\n';

// // const lowerEmail = loginEmail.toLowerCase(); //makes it all lower case 
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail); //hello@jonas.io

// //that ^ but better 

// const normalizedEmail = loginEmail.toLowerCase().trim(); //we can "chain" methods together like maps and sets with strings
// console.log(normalizedEmail);
// //hello@jonas.io
// console.log(email === normalizedEmail); //true

// //replacing  & with $ 
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.');// replaces the & character with the $ for US curencey
// console.log(priceUS); //288.97$ replaces the comma with the dot for the decimal 

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// //replace door with gate
// console.log(announcement.replaceAll('door', 'gate')); //replace only does the first occurence so replaceAll is every occurence 
// // this is a new ES feature 

// //regular expression solution
// console.log(announcement.replace(/door/g, 'gate')); //the g is for global 

// //booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); //false
// console.log(plane.startsWith('Air')); //true

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) //we can also use endswith method 
// {
//   console.log('Part of the New Airbus Family');
// }

// //practice
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   // const baggage = items;
//   //it's important to change the string to lower case because the following check would be false and print welcome abord for each call 
//   // this is becasue the uppercase knife is different from the lower case knife
//   if(baggage.includes('knife') || baggage.includes('gun')) 
//   {
//     console.log('You are NOT allowed on board')
//   } //
//   else 
//   {
//     console.log('Welcome aboard!');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');//You are NOT allowed on board
// checkBaggage('Socks and camera');//Welcome aboard!
// checkBaggage('Got some snacks and a gun for protection');//You are NOT allowed on board

/* =======================================================PT:2========================================*/



/* =======================================================PT:1========================================*/

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log(plane[2]); //2
// console.log('B737'[0]); // B

// console.log(airline.length); //16
// console.log('B737'.length);
// //string methods similiar to array built-in methods
// console.log(airline.indexOf('r')); //6  this only gives the first occurence 
// console.log(airline.lastIndexOf('r')); //10  this gives us the last occurence 
// console.log(airline.indexOf('Portugal')) //8 

// //extracting parts of a string with the .slice([], []) takes two parameters
// console.log(airline.slice(4)); //Air Portugal  with the begin parameter this is a substring it's just a copy of the original string 
// console.log(airline.slice(4, 7)); // Air the length witll always be te extraction of the (end parameter - begininng parameter)
// // 7 - 4 

// //extracting the first word of a string without knowing the index values

// console.log(airline.slice(0, airline.indexOf(' '))); //TAP 
// //extracting the last word of a string without knowing the index values
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)) //Portugal we have the plus one 
// // it gets rid of the index of where the space was by adding/ finding the next index 
// console.log(airline.slice(-2)); //wiith the negative values it starts exxtracting from the end 

// console.log(airline.slice(1, -1)) 
// // AP Air Portuga  gets everythng past 1 and eveerything before -1 that wasn't specefied 

// const checkMiddleSeat = function(seat) {
//   // B and E are the middle seats for small planes 
//   const s = seat.slice(-1); // use this to check the letter of the seats extracting backwards r -> l
//   if(s === 'B' || s === 'E')
//   console.log('You got the middle seat');
//   else console.log('You got Lucky !!!');
// }
// checkMiddleSeat('11B'); //You got the middle seat
// checkMiddleSeat('23C');//You got lucky !!!
// checkMiddleSeat('3E'); //You got the middle seat
// checkMiddleSeat('35Y');// You got lucky !!!
// //whenever we call a method on to a string javascript changes the string 
// // primitive to a string object behind the scenes then on that object
// //is where the method is called  this is called BOXING
// // const str = 'Tony';
// console.log(new String('Tony')); //Tony

// console.log(typeof new String('Tony')); // Object

// console.log(typeof new String('Tony').slice(1)); // string
// // looks a little more like an object 
// // they get called on a string object but JavaScript returns them once the conversion
// // is done back into their primitive type 

/* =======================================================PT:1========================================*/


/* ======================================== strings and how to work with them ============================*/


/* ====================================== which Data Strucuture to use and when===========================*/

//three sources of data: from the program itself, From the UI, and External sources (api).
//collection of data into datastructures for lists it's arrays or sets 
//key value pair data is stored into Object or Maps
//getting data from a web api usually comes in a data format aka JSON 
//JSON are strings but use the same data format as objects and arrays in JavaScript 
//creating an array of objects is super common in JavaScript
// Developers work with a lot of JSON data 
//other built in: WeakMap and WeakSet

//Array vs Sets 
// use arrays when we need an ordered list of values (may contain duplicates) and when we need to manipulate data
// use sets when we need to work with unique values(non duplicates) and when high performace is really important 
// we uses sets to also remove duplicates from arrays

//objects vs maps 
//objects are the more traditional "key, value" store we have ("abused objects") because of some technical disadvantages
// objects are easier to write and are easily accesible with the . or [] operators also objects are more commonly used

//Maps have better performance, easy to iterate, and easy to compute size. Map keys can be any Data Type

//we use maps to store simple key, value and also when keys are not strings 
// when we need functions as values we really need objects for that to make custom methods 
// and we can use the this keyword to get certain properties of an object
//also when using JSON data we use objects 
//maps are a lot more important and used than sets

/* ====================================== which Data Strucuture to use and when===========================*/

/* ======================================maps fundamentals==================================*/
// //map objects sore each element as a key-value pair which contains a unique key and value mapped to that key 
// // since they are unique there can not be a dupicate pair of elemnts 
// // big difference between objects and maps is that the keys can have any type.
// //objects the keys are usually string data types but in maps that is not the case 

// const rest = new Map();//using the new constructor it's better not to pass anything into the Map();
// rest.set('name', 'Classico Italiano') //set method helps us add new thing to the map kind of like the add method with sets
// rest.set(1, 'Firenze, Italy') //key can be number data type 
// rest.set(2, 'Lisbon, Portugal') //set method returns the updated map 

// rest
//   .set('categories', ['Italian', 'Pizzeria', 
//   'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open ;D')
//   .set(false, 'We are closed :(') //we can chain set methods onto a single variable like we did right here 

//   //grabs the data from the key (in the key value pairs) using the get method
//   console.log(rest.get('name'));//Classico Italiano
//   console.log(rest.get(true));//We are open ;D
//   console.log(rest.get(1));//Firenze, Italy

//   const time = 21; //9:00pm
//   console.log(rest.get(time > rest.get('open') && time 
//   < rest.get('close'))); 
//   //this checks if the time is between 11 - 23(21) and will print either the open string for open or the close
//   //boolean value true for open and false for close 

//   console.log(rest.has('categories'));//true
//   rest.delete(2); // deletes the set with the 2 key(value)
//   // rest.clear();
//   console.log(rest); //prints the rest map(7)
//   console.log(rest.size); //7
  
//   const arr = [1, 2]; //right way to do it then pass it into the next set method 
//   rest.set(arr, 'Test'); //with maps we can have the keys be an array so very unlike objects
//   rest.set(document.querySelector('h1'), 'Heading'); //DOM elements are just fancy objects so we can set them as well 
//   console.log(rest);
//   console.log(rest.size)//8

//   console.log(rest.get(arr));// Test
//   // now it works we can now have the array as the key and still be able to reference it 
//   // console.log(rest.get[1, 2]); // undefined because with how the heap references objects this call will not work

// //calling the set method returns the updated map


/* ====================================map iterations=========================*/

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again']
// ]);
// console.log(question);
// //when creating a new map directly in the code it's cooler to use this method of arrays within arrays 
// //but when we want to to programmitacally add data we want to use the set method 

// //convert an Object to a Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// //changing this openingHours object into a map 
// console.log(hoursMap);

// //quiz app 
// console.log(question.get('question'))
// for (const [key, value] of question) { // [key, value] good case of destructuring
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your Answer')); // need number so that we know the answer is going to be a number
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === 
// answer)); // when we put three into the prompt it references the corect value and the other 3 key(value) with the value of JavaScript

// //Convert map to an array
// console.log([...question]); //use spread operator and put it into a new array

// console.log(question.entries()); // this is the same thing as above but as a map prototype 

// console.log([...question.keys()]);//putting all the keys in the map into an array 

// console.log([...question.values()]); //putting all the values of the map into an array 
/* ====================================map iterations============3=============*/
/* ======================================maps==================================*/


/* =====================================sets==================================*/
//   const ordersSet = new Set([ //sets are similiar to arrays and are iterables/ their differences are that set elements are unique and the order of elements is irrelevant 
//   'Pasta', 
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Tony')); //Set(4) {'T', 'o', 'n', 'y'} strings are itterables and here we have a set with 4 components in the string 
// //sets can also be empty 

// console.log(ordersSet.size); //3 / unique different meals that are in the set .size not length unlike arrays 

// //has method is similiar to includes method with arrays
// console.log(ordersSet.has('Pizza')); //true 
// console.log(ordersSet.has('Bread')); //false

// //add new elements to a set 
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');//deleting rissoto from the set 
// // ordersSet.clear(); //clears an entire set
// console.log(ordersSet); //the garlic bread got added but only one of them because the set needs to be unique and the second one gets ignored
// //we can loop over sets because they are iterables 
// for(const order of ordersSet) console.log(order);

// //main usecase of sets is to remove duplicate values of arrays 
// //example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager',
// 'Chef', 'Waiter']; //we want  this array wthout all the duplicates lets create a set for it
// console.log(staff); //all the duplicate values in the set 
// const staffUnique = [...new Set(staff)]; //we use the spread operator and array values to unpack the set's data and unpack it into a new array 
// console.log(staffUnique);// without duplicate values 
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 
// 'Waiter']).size // good way to get the amount of nonduplicate values without the unique array 
// );

// console.log(new Set(`justchillinrelaxin`).size); //.size counts how many iterations(chars) there are in iterables(in this case strings)
// //conclusion sets are not intended to replace arrays at all when we need to store non duplicate values from a set 
// // we need to use arrays to do the conversion sets have a useful propety of needing to be unique and can manipulate them easily with their very straightforward methods
// // but sets are not as highly focused on as their datastructure cousin arrays just nice to have when we need to manipulate unique data 
/* =====================================sets==================================*/
/* =============================looping over objects==========================*/

//Property NAMES

// const properties = Object.keys(openingHours)
// console.log(properties);  //(3) ['thur', 'fri', 'sat']

// let openStr = `We are open on ${properties.length} days: ` // We are open on 3 days

// for ( const day of Object.keys(openingHours)) {
//   openStr +=  `${day}, ` //attach the for of loop to the string to print the three days with +=
// }
// console.log(openStr);//We are open on 3 days: thur, fri, sat, 

// //property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //entire object not a distinct array 
// const entries = Object.entries(openingHours);
// // console.log(entries);

// //[key, value] for simpler objects 
// for (const [key, {open, close}] of entries) { //key is the day/key 
//   console.log(`On ${key} we open at ${open} and close at ${close}`); //On thur we open at 12 and close at 22 /does this for the two other days as well
// }
/* =============================looping over objects==========================*/
/* ============================= Optional Chaining ========================== */
// //monday test
// if (restaurant.openingHours &&
//   restaurant.openingHours.mon)
//    console.log( //checking for monday and if restaurant has opening hours
//   //  restaurant.openingHours.mon.open
// );
// // console.log(restaurant.openingHours.mon.open); // undefined this property doesnt exist
// // gonna get an error because open isn't a property that is accesible in the restaurant object or in a nested object either 

// //WITH OPTIONAL CHAINING

// console.log(restaurant.openingHours.mon?.open); //the next operation of trying to read open can only work if all the previous properties exist 
// // prints undefined // for checking if a property exists 
// console.log(restaurant.openingHours?.mon?.open); //testing for opening hours and monday if they exist
// //makes it easy to prevent bugs we might not expect

// //real world optional chaining example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 
// 'sat', 'sun'];
// for (const day of days ) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open // getting variable with brackets notation and comes dynamically from the days array
//   ?? 'closed'; //nullish becasue saturday starts with a falsey value 0 so we use this for default values
//   console.log(`On ${day}, we open at ${open}`);
// }

// //mon
// //  On mon, we open at undefined
// // it says undefinied because there is no open property for monday so it's undefined 

// //fri
// // On fri, we open at 11 this value exist becasue this is real data in the object

// //example

// //Methods optional chaining
// console.log(restaurant.order?.(0,1) ?? 
// 'Method does not exist') //(2) ['Focaccia', 'Pasta'] exists

// console.log(restaurant.orderRissotto?.(0,1) ?? 
// 'Method does not exist') //Method does not exist undefined


// //array optional chaining

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }]; //

// console.log(users[0]?.name ?? 'User array empty') //optional chaining checks if the name exists in the users[0]?.name
// //optional chaining almost always uses the nullish coalescing operator to print a default if the optional chaining operator comes out undefined 
// /* ============================= Optional Chaining ========================== */


/* ========================== for of loop =============================== */

// const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //we want the current element of an array

// // for (const item of Menu) console.log(item); // gives us acccess to the current itterated array element 
// // with item variable and puts it the objects into a list 

// //what if we want the current index?

// for (const [i, el] of Menu.entries()) { //destrucutred parameters i and el 
//   console.log(`${i + 1}: ${el}`); // i is the iteration value and el is the string
// };

// console.log([...Menu.entries()]); //expanded with the spread operator and made into an array
// //an array at each postion and contains an element/ string whatever
// //in the original array

/* ========================== for of loop =============================== */
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10; //this is a more concise way of doing the above operation

// rest2.numGuests = rest2.numGuests || 10;//returns 10 because its the first new truthy value
// rest2.numGuests ||= 10; //this is a more concise way of doing the above operation

//logical nullish assignment operator
//assign a value to a variable if that current value is nullish
// rest1.numGuests ??= 10; // 0
// rest2.numGuests ??= 10; //10 

//logical && assignment opeerator

// rest2.owner = rest2.owner && '<ANONYMOUS>';//ANONYMOUS 
//this happens because theo bject already has that truthy value so it finds the next falsey or last true available value
// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined because it doesn't have an owner property

// //assigns a new value to a variable if the parent value was truthy
// rest1.owner &&= '<ANONYMOUS>';// '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>';// '<ANONYMOUS>'

// console.log(rest1);//now has a numguest because of short circuiting
// console.log(rest2);
/*                 nullish collescing operator              */

// restaurant.numGuests = 0; // 0 is a falsey value 
// const guests = restaurant.numGuests || 10; //so we go to the second operand(10)
// console.log(guests);//10

// //better way of getting default value

// //nullish: null and undefined (NOT 0 or '') only these values short circuit the evaluation 
// const guestCorrect = restaurant.numGuests ?? 10; //non nullish
// console.log(guestCorrect);//0



/*==============================SHORT CIRCUITING (&& and ||) ===============================================*/

//USE any data type, return any data type,
//short -circuiting

// console.log('____OR____');

// console.log(3 || 'Jonas'); //3  if the first operand in the value(3) is truthy it won't even look 
// // at the other value ('Jonas)
// console.log(' ' || 'Jonas'); // Jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || 
// null); //Hello because it's the first truthy value in the order of operations l -> r

// //practical example
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza
// ('Mushrooms', 'spinach');


// restaurant.numGuests = 23; //when number of guests are 0 then it's a falsey value and the default value does not work
// //way easier way of setting default values instead of using if else statements
// const guests1 = restaurant.numGuests ? restaurant.numGuests :
// 10;
// console.log(guests1);
// // instead of doing this we can take advantage of the or (||) operator

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("___and____");
// // returns/short circuits when the first falsey value of the operation is looked at. opposite of or
// console.log(0 && 'Jonas');//0
// console.log(7 && 'Jonas');//Jonas returns the last truthy value when there are no falsey

// console.log('Hello' && 23 && null && 'Jonas');//null

// // we pass the properties from an object and can receive that information into a function
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via de sole, 21',
//   starterIndex: 1,
// }); // when this method is object is passed through the method it takes the default values in the 
//   // parameters and the specefied values in the new method as well and prints different values into the above string

  
  
  /*================================ rest until array is part of obj destructuring ================= */
  // const{ name, openingHours, categories } = restaurant;
  // console.log(name, openingHours, categories);
  
  // //want variable name to be different from property names / new variable names  
  // const{
//   name: restaurantName, 
//   openingHours: hours, 
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);
// console.log(restaurant);
// //set default values for property that doesn't exist on the object (a lot of API usage)
// const { menu = ['menu'], starterMenu: starters = []} = 
// restaurant;
// console.log(menu, starters);

// //mutating variables a and b 
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14
// };
// ({a, b} = obj); // (have to wrap object destructuring assignment in parentheses because
// //javaScript expect at least a bracket assignment at the begginging of a line) 
// console.log(a, b);

// //nested objects 

// const { 
  //   fri: {open: o, close: c}
  //  } = openingHours;
  // console.log(o, c);
  
  /*************************************rest pattern and parameters*******************************************/
  //collects elements and condenses them into an array spread operator unpacks structures while the 
  //the rest does the exact opposite by packing into (array/object/string/whatever)
  //DESTRUCTURING

  //SPREAD, becaUSe ... on the RIGHT side of the assignment(=) 
//   const newerArr = [1, 2, ...[3, 4]];

//   //REST, because ... on the left side of the assignment
//   const [a, b, ...others] = [1, 2, 3, 4, 5];
//   console.log(a, b, others); //1 2 > (3) [3, 4, 5]

//   const [pizza, , rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//   console.log(pizza, rissoto, otherFood); //['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
  
//   //OBJECTS

//   const { sat, ...weekdays } = restaurant.openingHours;
//   console.log(weekdays); // fri: {open: 11, close: 23} thu: {open: 12, close:22}

// //FUNCTIONS
// //FIND sum of arrays with rest parameters for compression
// //it can take any amount of arguments once called 
//   const add = function (...numbers) { //where we unpack the valus/arguments
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += 
//     numbers[i]; 
//     console.log(sum);// 5     17     25
//   }
//   add(2, 3); //5
//   add(5, 3, 7, 2); //17
//   add(8, 2, 5, 3, 2, 1, 4);//25
  
//   const x = [23, 5, 7];
  
//   //where we pack the values back into an array
//   add(...x); //takes all numbers of the array and spreads them in the arguments 
  
//   restaurant.orderPizza('mushrooms', 'onion', 'olives',
//   'spinach'); // 'mushrooms was sotred in the mainIngredient argument and the rest was in the 
//   //other ingredients array mushrooms ["onion", "olives", "spinach"]
  
//   restaurant.orderPizza('mushrooms'); //mushroom in main and an empty array for the otherIngredients argument
//   //REST when to use 
//   //Rest parameters help us to pass an infinite number of function arguments.
//   //SPREAD when to use 
//   // Spread operator helps us to expand the strings or array literals or object literals.
//   /********************************** spread operator *********************************/
  
//   const arr = [7, 8, 9];
//   const badNewARR = [1, 2, arr[0], arr[1], arr[2]];
//   // console.log(badNewARR) //[1, 2, 7, 8, 9]
  
//   //better
//   //helps get elements out of arrays
//   //big difference between spread and destructuring is that ..spread cant make new variables
//   // use it places where values are seperated by commas
//   const newArr = [1, 2, ...arr];
//   // console.log(newArr); // [1, 2, 7, 8, 9]
//   // console.log(...newArr);
//   // console.log(1, 2, 7, 8 , 9)
  
//   const newMenu = [...restaurant.mainMenu, 'Gnocci']; // brackets syntax always for new array // basis for this is expanding old array with new array with new string inside
//   // console.log(newMenu);
  
//   //copy array 
//   //easier to use than object.assign
//   const mainMenuCopy = [...restaurant.mainMenu];

//   //join arrays
//   const menu = [...restaurant.starterMenu, ...
//     restaurant.mainMenu];
//     // console.log(menu);

//     //iterables: are arrays, strings, maps, and sets, but not objects
//     const str = 'jonas';
//     const letters = [...str, ' s.'];
//     // console.log(letters);
//     // console.log(...str);
//     // console.log(`${...str} `) spread doesn't work with template literals
    
//     //real world example
//      const ingredients = [prompt('let\s make pasta! Ingredient 1 ?'),
//     // prompt('Ingredient 2?'), prompt('Ingredient 3?'),
//   ];
//     // console.log(ingredients);

//     restaurant.orderPasta(ingredients[0], ingredients[1],
//       ingredients[2]);
//       restaurant.orderPasta(...ingredients);

//       //objects spread
// // SHALLOW COPIES WITH SPREAD AND OBJECTS without overwriting reference data
//       const newRestaurant = { foundIn: 1988, ...
//       restaurant, founder: 'Guiseppe' };
//       // console.log(newRestaurant)

//       const restaurantCopy = {...restaurant};
//       restaurantCopy.name = 'Ristorante Roma';
//       // console.log(restaurantCopy.name)
//       // console.log(restaurant.name)

//     //similiar to how we unpack an array but with a string 
  /*======================================== array destructuring ====================================*/
 
// //W/O destructuring
//   const arr = [2, 3, 4];
//   const a = arr[0];
//   const b = arr[1];
//   const c = arr[2];

//   //with destructuring 
//   const [x, y, z] = arr; //destructuring assignment when the [] is left of the = javascript knows that we are going to do some destructuring
//   console.log(x, y, z); //destructure of array / unpacking information into variables
//   console.log(arr);// not destroying original array so og array still exist

//   let [main, , secondary] = restaurant.categories; //we can use an additonal , between array elements to skip to the index in an array
//   console.log(main, secondary); // Italian Pizzeria

//   //switch position of both variables main & seconday W/O destructur.
//   // const temp = main; //temporary variable
//   // main = secondary; //only writing this line overwrites a the main value we dont want that 
//   // secondary = temp;
//   // console.log(main, secondary);
  
//   //switching variables
//   //with destructuring 
//   [main, secondary] = [secondary, main];
//   console.log(main, secondary);

// //receive two return values from a function
  // const [starter, mainCourse] = restaurant.order(2, 0); // garlic bread pizza
  // console.log(starter, mainCourse);

//   //with nested array destructuring
//   //how can we get the fist value of the first array and the entire second array?
//   const nested = [2, 4, [5, 6]];
//   // const [i, ,j] = nested; //comma seperator is very important
//   // console.log(i, j); // (2) [5,6]

//   const [i, ,[j, k]] = nested;
//   console.log (i, j, k); // 2 5 6

//   //Default values
//   const [p=1, q=1, r=1] = [8, 9];
//   console.log(p, q ,r); 
//   // can be helpful for getting data from an API
