// console.log('My name is Barokah Oyindamola');
// console.log('Hiiii, I think today is going to be a great day!')
// console.log('Java')
// console.log('Barokah')
// console.log("Barokah Oyin")
// console.log(`Barokah Oyindamola`);
// console.log(`Yo, what's today's date?`);
// console.log('I\'m tired')
// console.log(typeof(`what's up?`));
// console.log(typeof(2.5));
// console.log(typeof(false));
// console.log(typeof(null));
// console.log(2.5 + 7.3)
// console.log('Barokah' + ' Oyindamola')
// console.log(2**10)
// console.log(3%2)
// console.log(2%5)
// console.log((3 + 1) * 2)


// console.log(true && true)  // true
// console.log(true && false);  // false
// console.log(false && true);  // false
// console.log(false && false); // false
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log(!true) // false
// console.log(!false); // true

// DAY THREE: COMPARATIVE OPERATORS, ASSIGNMENT OPERATORS, TERNARY OPERATORS, VARIABLES
// console.log(5 > 2);
// console.log(5 >= 5);
// console.log(5 == '5');
// console.log(5 === "5");
// console.log("5" === "5");
// console.log(5 != "5");
// console.log("5" !== "5");

// (5 < 2) ? console.log('5 is less than 2') : console.log('5 is greater than 2');

// VARIABLES
// let firstName
// console.log(firstName);
// console.log(typeof(firstName));
// firstName = 'Barokah';
// console.log(firstName);


// let firstName = 'Barokah';
// console.log(firstName);
// const lastName = 'Alimi';
// console.log(lastName)

// Variable Reassignment
// firstName = 'Oyindamola';
// console.log(firstName);

// ASSIGNMENT: VARIABLES + OPERATORS
// const a = 50;
// const b = 30;
// const c = 20;
// console.log((a == b) || (a == (b + c)));
// console.log((a == b) && (a == (b + c)));
// console.log((a + b) / c);
// console.log(b > a);
// console.log(a == (b + c));
// console.log(a !== (b + c));
// console.log(a !== b + c);

// let myName = 'Barokah';
// let age = 20;
// (myName == 'Barokah') ? console.log(`My name is Barokah`) : console.log(`Sorry, my name is not Barokah, I'm Oyindamola`);

// (age < 18) ? console.log('Barokah is an underage') : console.log(`Barokah is an adult, not an underage.`);

// let birthYear = 2005;
// birthYear = 2004;
// console.log(birthYear);
// const newAge = 2025 - birthYear;
// console.log(newAge + age);



// DAY FOUR: FUNCTION
// function greet () {
//     console.log('Good Morning')
// };
// greet();

// function sum () {
//     var x = 2;
//     const y = 3;
//     return (x + y);
// }

// console.log(sum());

// const x = 2;
// const y = 3;

// function sum() {
//     console.log(x);
//     console.log(y);
// }

// sum();

// const multiply = function () {
//     return 2 * 3;
// }
// console.log(multiply ());

// const subtraction = () => {
//     return 5 - 3;
// }

// console.log(subtraction());



// DAY FIVE: PARAMETERS AND ARGUMENTS
// function modulus(num1, num2) {
//     return num1 % num2;
// }

// console.log(modulus(5,2));
// console.log(modulus(7,4)); 

// function negateValue(negate) {
//     return !negate;
// }

// console.log(negateValue (true));

// REST OPERATORS
// function greetPeople(greeting, ...people) {
//     return people.map((person) => greeting + ' ' + person );
// }
// console.log(greetPeople('Good Morning','Praise', 'Precious', 'Achiever', 'Barokah'));

// TEMPLATE LITERALS
// function hiFriends(greet, surname, ...friends) {
//     return friends.map((friend) => `${greet} ${friend} ${surname}`)
// }
// console.log(hiFriends('Hello','Ajanlekoko', 'Zephyr', 'Roqxy', 'Barrybee', 'Nayillah'));

// ASSIGNMENT: FUNCTION AND COMPARATIVE OPERATORS
// function dontKnow() {
//     const divFunc1 = 15 / 3;
//     const divFunc2 = 15 / 5;
//     if (divFunc1 !== divFunc2) 
//         return (`Don't know is true`);
//     else (`Don't know is false`);
// }

// function dontKnow() {
//   const divFunc1 = 15 / 3;
//   const divFunc2 = 15 / 5;
//   return (divFunc1 == divFunc2); 
// }

// console.log(dontKnow());

// function myRealAge () {
//     const realAge = 23;
//     return realAge != 25;
// }
// console.log(myRealAge())

// function friendHangout(bestFriend, ...others) {
//     return others.map((friend) => bestFriend + ' ' + friend);
// };
// console.log(friendHangout("Zephyr", "Roqxy", "Barrybee", "Nayillah"));

// function greaterThan() {
//     const bigNum = 57;
//     const smallNum = 20;

//     return bigNum > smallNum;
// }
// console.log(greaterThan());

// function glasses(medicated, ...others) {

// }

// document.writeln('Hello World');



// DAY SIX: OBJECTS: a container that holds multiple key value pairs that are related properties of data.
// const human = {
//     Name: 'Barokah',
//     complexion: 'Light skinned',
//     height: '153cm',
//     IsTall: !true
// }

// console.log(human.Name); // assessing an an object key value using the dot notation
// console.log(human['complexion']); // assessing an object key value using the square bracket 
// console.log(`My name is ${human.Name}, I am ${human.complexion}, and ${human['height']} tall.`)

// const { Name, complexion, height } = human; // assesing an object key value using the object destructuring method
// console.log(Name);
// console.log(
//   `My name is ${Name}, I am ${height} tall, and ${complexion} in complexion.`
// );

// OBJECT MODIFICATION
// human.Name = 'Oyindamola'
// human.IsShort = true;  // addition of a new key to an object:you select the name of the object dot the key to be added.
// console.log(human);
// delete human.complexion // deleting a key within an object


// console.log(human);
// console.log(human.IsTall);

// CLASSWORK
// function calcAreaOfaTriangle(base, height) {
//     let a = base;
//     let b = height;
//     return (a / 2) * b;
// }

// console.log(calcAreaOfaTriangle(6, 4));
// console.log(calcAreaOfaTriangle(5, 2));
// console.log(calcAreaOfaTriangle(10, 7));
// console.log(calcAreaOfaTriangle(4, 1));



// DAY 7: NESTED OBJECTS
// const tertiaryInstitution = {
//     School: 'FUNAAB',
//     Department: {
//         department:'Nutrition and Dietetics',
//         department2: 'Botany',
//         faculty: 'COLBIOS'
//     },
//     Uniform: 'Scrub',
//     College: 'COLFHEC',
//     Cafeteria: 'Hand of God'
// }
// console.log(tertiaryInstitution.Department.faculty); // assessing a nested object using the dot notation method.
// const {School, Department, Uniform, College, Cafeteria} = tertiaryInstitution;
// const {Department: {department, department2, faculty}, School, Uniform} = tertiaryInstitution;
// const {Department: {department, department2, faculty}, Uniform, College} = tertiaryInstitution; // assessing a nested obeject using the nested object destructuring method; the synthax.
// const {School, Department, Department:{department, department2, faculty}, Uniform, College, Cafeteria} = tertiaryInstitution
// console.log(department2);
// console.log(School);

// CLONING AN OBJCETS
// const goat = {
//     color: 'brown',
//     gender: 'male',
//     size: 'big'
// }

// const goat2 = {
//     color: 'black',
//     gender: 'female',
//     size: 'small'
// }

// const newGoat = Object.assign(goat, { breed: "Niger breed" }); //cloning an obeject using the .assign method, which provides an opportuning to add new key values.
// console.log(newGoat);
// const anotherNewGoat = {...goat , goat2} // cloning an object using the spread operator, it deosn't allow the addition of new key values, but it allows one to clone more than one object.
// console.log(anotherNewGoat);

// METHOD: a function property in an object, i.e your object is carrying a function.
// const get = {
//     firstName: 'Barokah',
//     lastName: 'Alimi',
//     qualification: 'BSc. Nutrition and Dietetics',
//     tribe: 'Yoruba',
//     religion: 'Muslim',
//     myIntro: function(){return `My name is ${this.firstName} ${this.lastName}, a recent graduate with ${this.qualification}, who originated from the ${this.tribe} tribe, and a ${this.religion} by religion`}
// }

// get.firstName = 'Oyindamola'

// console.log(get.myIntro());




// DAY EIGHT: PATTERN OF CREATING AN OBJECT: An object can take multiple key values
// 1. Factory function:the object will be enmbedded in a function, i.e the function will be the carrier of the object
// SYNTHAX: const subjectName = function(firstName, age) { return { Name: firstName, Age: age }}
// console.log(subjectName('Barokah', 23).Name);
// const info = function (firstName, skinColor, height) {
//     return {
//         Name: firstName,
//         complexion: skinColor,
//         Height: height,
//     }
// }
// const fullDetails = info('Barokah', 'light-skinned', 153);
// console.log(`My name is ${fullDetails.Name}, I'm ${fullDetails.complexion}, and ${fullDetails.Height} tall.`)
// 2. Constructor function: just like factory function, it also requires a function to hold the object, but the name casing is part of what makes it a constructor function, the casing has to be PascalCasing/capitalized, also the 'this' keyword makes it a constructor function. 
//  const ConstructText = function(param1, param2) {
//     this.Name = param1;
//     this.others = param2;
//     return this;
// }
// const newConstruct = new ConstructText('Barokah', 'Alimi');
// console.log(newConstruct.Name);


// GLOBAL SCOPE EXAMPLE
// let foodsss = 'rice';
// function assessfood() {
//     let a = foodsss;
//     return foodsss
// }
// console.log(assessfood());

// FUNCTION/LOCAL SCOPE EXAMPLE
// const newLocal = () => {
//     const newFood = 'Jollof rice';
//     let food = newFood;
//     return food;
// }
// console.log(newLocal());
// let oldFood = food;
// console.log(food);

// HOISTING EXAMPLE
// console.log(titi)
// let titi = 'aName' //not hoisted
// var titi = "aName"

// console.log(titi());
// function titi() {
//     console.log('Hello');
// } // it is hoisted

// Assignment: Add a method to a factory function and constructor function
// FACTORY FUNCTION
// const metFactFunc = function (firstSentence, secondSetence, ...others) {
//     return {
//     dontKnow: firstSentence,
//     iKnow: secondSetence,
//     IsKnown: true,
//     IsUnknown: false,
//     isEitherKnownOrUnknown: function() {
//         return `Sometimes you dont know something, and when days like this come, it is said to be ${this.dontKnow}, ortherwise, it will be ${this.iKnow}, if you're stuck between the two, it is "Either known, or unkown.`
//     }
//     };
// }

// const completeSentence =  metFactFunc("Something that is not known", "Something that is known", true, false);
// console.log(completeSentence.isEitherKnownOrUnknown());
// console.log(completeSentence.IsUnknown);

// // CONSTRUCTOR FUNCTION
// const AnythingThatComes = function (firstThing, secondThing, ...well) {
//         this.numberOne = firstThing,
//         this.numberTwo = secondThing,
//         this.numberThree = thirdThing,
//         this.IsNothing = true,
//         this.otherThings = function() {
//             return `I don't know what to write nor denotes all these keys and paramaters, so I'd just move with the flow, even tho there is no flow, ${this.numberOne}, and ${this.numberTwo}, also ${this.numberThree}, thank you.`
//         }
//     return this;
// }

// const anywaysItsOver = new AnythingThatComes ('first things first', 'sencond things second', 'third thing the last', true);
// console.log(anywaysItsOver.otherThings());

// DAY NINE: BUILT IN OBJECTS - Objects that comes with Js; String, Math, and Date Objects.
// const myName = 'Hellowwww, my name is Barokah';
// console.log(myName.length);

// DAY TEN: STRING OBJECTS 
// const greeting = 'Good Morning'
// console.log(greeting.split(''));

// MATH OBJECTS : they are objects used to calculate or perform mathematical expression Math.
// console.log(Math.abs(255));
// console.log(Math.abs(-255));
// console.log(Math.sign(-255));
// console.log(Math.PI);
// console.log(Math.sqrt(9)); // Sqaure root
// console.log(Math.pow(4, 2)); // power
// console.log(Math.random()) // Random returns numbers between 0 and 1, it can be used to generate random numbers, it return decimal numbers
// console.log(Math.round(3.5)) // It round up a decimal number to a whole number
// console.log(Math.ceil(20.1)) // It rounds up a decimal number to the next whole number irrespective of the figure after the decimal point.
// console.log(Math.floor(20.6)) // Floor is the reverse of ceil 
// console.log(Math.exp())
// console.log(Math.max(10, 11, 30, 200)) // It returns the heighest number
// console.log(Math.min(10, 11, 30, 200)); // it returns the lowest number

// DATE OBJECTS: 
// const date = new Date()
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getMilliseconds());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());


// Write a Function that calculates the area of a circle, and the circumference of a circle
// const areaOfACircle = function(pi, r = 5) {
//     return pi * Math.pow(r, 2);
// }
// console.log(areaOfACircle(Math.PI, 4));
// console.log(areaOfACircle(Math.PI, 5));
//  A better way: 
// function AOC (r = 5) {
//     return Math.PI * Math.pow(r, 2);
// }
// console.log(AOC());
// console.log(AOC(10))

// Circumference of a Circle
// const circumofaCircle = function (pi, R=5) {
//     return 2 * pi * R;
// }
// console.log(circumofaCircle(Math.PI, 7));
// console.log(circumofaCircle(Math.PI, 10));

//  A better way: 
// function COC (R = 5) {
//     return 2 * Math.PI * R;
// }
// console.log(AOC());
// console.log(AOC(10));

// GENERATE RANDOM NUMBERS
// console.log(Math.floor(Math.random() * (Math.pow(10, 10))))

// A better way:
// function randNumb() {
//     return Math.floor(Math.random() * Math.pow(10, 10));
// }
// console.log(randNumb());

// DAY ELEVEN: ARRAYS - Are list of data types; Synthax: const arrayName = []
// String Array: collection of strings; const studentName = ['']
// const studentName = ['Precious', 'Barokah', 'Achiever']

// Addition of Data to an Array
// studentName.push('Khadijah') // Addition of a data (at the back) to an array list
// console.log(studentName);
// studentName.unshift(3, 'Lightside') // Addition of a data (at the front) to an array list
// console.log(studentName);
// studentName.splice(3, 0, 'Oyin') // Addition of a data (at the middle/ in between a list of an array) to an array list, the position needs to be specified
// console.log(studentName)

// Removal of Data from an Array
// studentName.pop() // Removes data from the back of an array list 
// console.log(studentName);
// studentName.shift() // Removes data from the front of an array list 
// console.log(studentName);
// studentName.splice(2, 1); // Removes data from the middle of an array list by specifying its position
// console.log(studentName);

// Findind element within an Array: Index - is the specific position within an array
// const studentName = ['Barokah', 'Oyinda', 'Dolapo'];
// console.log(studentName[2]);
// const animals = ['goat', 'dog', 'dog', 'cat', 'hen', 'turkey']
// console.log(animals[0])
// console.log(animals.indexOf('cat')) // to find the position of cat in the array list
// console.log(animals.indexOf('dog')) // to find the position of dog in the array list; since there are two dogs on the list, Js returns the index of the first dog it encounters first.
// console.log(animals.lastIndexOf('dog'))// to find the position of dog in the array list; since there are two dogs on the list, Js returns the index of the last dog it encounters first.

// Combining arrays together:
// 1. cocat method 'string concatenation' (slow/long)
// const nums = [2, 4, 6, 8];
// const phones = ['iphone', 'android'];
// const combine = nums.concat(phones);
// console.log(combine);

// 2. spread combination method 
// const spreadCombine = [...nums, ...phones];
// console.log(spreadCombine)

// ASSIGNMENT