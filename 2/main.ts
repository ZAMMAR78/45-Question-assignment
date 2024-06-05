//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName: string = 'Ammar Munan';
console.log(`Hello ${personName}, would you like to learn some Python today?`);

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName:string = 'Ammar Munan';
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote:string ="Veni, Vidi, Vici";
let author:string ="Julius Caesar";
console.log(`${author} once said, "${quote}"`);

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousPerson: string = "Julius Caesar";
let quote:string = "Veni, Vidi, Vici";
let message:string = `${famousPerson} once said, "${quote}"`;
console.log(message);

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
let nameWithWhitespace:string = "\n\t Ammar Munan \t\n";
console.log(nameWithWhitespace);
let nameWithoutWhitespace:string = nameWithWhitespace.trim();
console.log(nameWithoutWhitespace);

//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(`Addition: ${5 + 3}`);
console.log(`Subtraction: ${10 - 2}`);
console.log(`Multiplication: ${4 * 2}`);
console.log(`Division: ${16 / 2}`);

//Greeting: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names: string[] = ["Waqas", "Babar", "Ali"];
for (let name of names) {
    console.log(`Hello, ${name}!`);
}

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let dinnerGuests: string[] = ["Athen", "Akash", "Rashid"];
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let dinnerGuests: string[] = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie"];
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
console.log(`${dinnerGuests.pop()} can't make it to the dinner.`);

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one ne
let dinnerGuests: string[] = ["Abbas", "Akash", "Rashid"];
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("Isaac Newton");
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "Galileo Galilei");
dinnerGuests.push("Ada Lovelace");
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let dinnerGuests: string[] = ["Abbas", "Akash", "Rashid"];
console.log("Unfortunately, we can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let guest of dinnerGuests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

//Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
// Show that your array is still in its original order by printing it.
// Print your array in reverse alphabetical order without changing the order of the original list.
// Show that your array is still in its original order by printing it again
// Reverse the order of your list. Print the array to show that its order has changed.
// Reverse the order of your list again. Print the list to show it’s back to its original order.
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placesToVisit: string[] = ["Tokyo", "Athen", "Rome", "Kabul", "Delhi"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("Alphabetical Order:");
console.log(placesToVisit.slice().sort());
console.log("Original Order Again:");
console.log(placesToVisit);
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("Original Order Again:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Original Order Again:");
console.log(placesToVisit);
placesToVisit.sort();
console.log("Alphabetical Order:");
console.log(placesToVisit);
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit);



//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let dinnerGuests: string[] = ["Abbas", "Akash", "Rashid"];

console.log(`We are inviting ${dinnerGuests.length} people to dinner.`);


//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let favoriteColors: string[] = ["blue", "green", "red", "purple"];


//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names: string[] = ["Waqas", "Babar", "Ali"];

for (let name of names) {
    console.log(name);
}

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let favoriteThings: { [key: string]: string } = {
    mountain: "Everest",
    river: "Amazon",
    country: "Japan",
    city: "Paris",
    language: "French"
};

//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let favoriteThings: { [key: string]: string } = {
    mountain: "Everest",
    river: "Amazon",
    country: "Japan",
    city: "Paris",
    language: "French"
};

//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings

// Tests using the lower case function

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//Tests using "and" and "or" operators

//Test whether an item is in a array

//Test whether an item is not in a array
const string1: string = "apple";
const string2: string = "orange";

console.log("Equality test:", string1 === string2); // false
console.log("Inequality test:", string1 !== string2); // true

// Tests using the lower case function
const mixedCaseString: string = "TeStStRiNg";
const lowerCaseString: string = mixedCaseString.toLowerCase();

console.log("Lower case test:", lowerCaseString === mixedCaseString.toLowerCase()); // true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log("Equality test:", num1 === num2); // false
console.log("Inequality test:", num1 !== num2); // true
console.log("Greater than test:", num1 > num2); // true
console.log("Less than test:", num1 < num2); // false
console.log("Greater than or equal to test:", num1 >= num2); // true
console.log("Less than or equal to test:", num1 <= num2); // false

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log("AND operator test:", condition1 && condition2); // false
console.log("OR operator test:", condition1 || condition2); // true

// Test whether an item is in an array
const array: string[] = ["apple", "banana", "orange"];

console.log("In array test:", array.includes("banana")); // true

// Test whether an item is not in an array
console.log("Not in array test:", !array.includes("grape")); // true

//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}

//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// Write one version of this program that runs the if block and another that runs the else block.
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points for shooting the alien.");
} else {
    console.log("Player earned 10 points.");
}


//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.

// If the alien is yellow, print a message that the player earned 10 points.

//If the alien is red, print a message that the player earned 15 points.

// Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}


//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.

// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// If the person is age 65 or older, print a message that the person is an elder.

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.

//Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["banana", "apple", "kiwi"];

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}


//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.

const users: string[] = ["Alice", "Bob", "Charlie"];

if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    console.log("Users found!");
}

users.length = 0; // Remove all usernames

//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Checking Usernames
const current_users: string[] = ["John", "Alice", "Bob", "Charlie", "Eve"];
const new_users: string[] = ["john", "Eve", "Mallory", "Trudy", "Carol"];

for (const new_user of new_users) {
    const isUsed = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (isUsed) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}

//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
//Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const animals: string[] = ["Dog", "Cat", "Rabbit"];

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string = "Large", message: string = "I love Burgers") {
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt();
make_shirt("small");
make_shirt("Small", "I prefer pizza");

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt();
make_shirt("Medium");
make_shirt("Small", "I prefer Python");

//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "UK");

//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Sydney", "Australia"));


//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2", 10));

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicians: string[] = ["Abbas", "kashan", "Asad"];

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);

//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller"];

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

const great_magicians = make_great(magicians.slice());
show_magicians(great_magicians);

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller"];

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

show_magicians(magicians);

function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

let great_magicians = make_great(magicians.slice());
show_magicians(great_magicians);
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

let great_magicians = make_great(magicians.slice());
show_magicians(great_magicians);

// Unchanged Magicians
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

let original_magicians = magicians.slice();
let great_magicians = make_great(original_magicians.slice());
show_magicians(original_magicians);
show_magicians(great_magicians);



//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function store_car(manufacturer: string, model: string, ...extras: [string, any][]): Car {
   let car: Car = { manufacturer, model };
    for (let [key, value] of extras) {
        car[key] = value;
    }
    return car;
}

let car1 = store_car("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(car1);