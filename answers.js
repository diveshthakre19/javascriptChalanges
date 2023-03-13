// const name = "Divesh";
// const age = 19;
// let isAlive = true;
// let car = null;
// let something;

// console.log(name, age, isAlive, car, something)
// console.log("type of name is " + typeof name) // type of age is string
// console.log("type of age is " + typeof age) // type of age is number
// console.log("type of isAlive is " + typeof isAlive) // type of isAlive is boolean
// console.log("type of car is " + typeof car) // type of car is object
// console.log("type of something is " + typeof something) // type of something is undefined

// 2. Declare variables to store your first name, last name, country and age and display them using interploation method.

const FirstName = "Divesh";
const LastName = " Thakre";
const country = "India";
let age = 19;
let aboutUser = `hello I am ${FirstName + LastName} age ${age} from ${country}`;
console.log(aboutUser);

// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

let userInput = "javaScript waits for none";
let modifiedString = userInput.toUpperCase();
console.log(modifiedString); // JAVASCRIPT WAITS FOR NONE

// 4. Check if the string contains a word Script using includes() method.

const statement = "In javaScript every thing happens in an execution context";

let containsScript = statement.includes("Script");
console.log(containsScript); // true

// 5. Split the string into an array using split() method
const statement2 = "In javaScript every thing happens in an execution context";
const ArrayOfStatement = statement2.split(" ");
console.log(ArrayOfStatement);

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const ArrayOfCompanies = companies.split(", ");
console.log(ArrayOfCompanies);

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

const statement3 =
  "Javascript is a single threaded language & In javascript every thing happens in an execution context";

const lastOccurence = statement3.lastIndexOf("script");
console.log(lastOccurence); //50

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

let statement4 =
  "You cannot end a sentence with because because because is a conjunction";

let wordPosition = statement4.search("because");
console.log(wordPosition); // 31

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

let statement5 = "   let's remove whitespace      ";
let trimedString = statement5.trim();
console.log(trimedString); // "let's remove whitespace"

/*10. Boolean value is either true or false.

    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
*/
var string = "hello";
let Array = [1, 2, 3, 4];
let boolean = true;
console.log(string && Array && boolean ? true : false);
// falsy value
let a = false;
let b = null;
let c = NaN;
let d = " ";
let e = 0;
console.log(a && b && c && d && e ? true : false);

/* 
11. Figure out the result of the following comparison expression first without using console.log().After you decide the result confirm it using console.log()
*/

4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; //  false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false

// - Find the length of python and jargon and make a falsy comparison statement.

// 12. Use the Date object to do the following activities
const date = new Date();
// - What is the year today?
const year = new Date().getFullYear();
console.log("The year is", year);

// - What is the month today as a number?
const month = date.getMonth() + 1;
console.log("The Month is", month);
// - What is the date today?
const curentDate = date.getDate();
console.log("The Date is", curentDate);

// - What is the day today as a number?
const day = date.getDay();
console.log("The Day is", day);

// - What is the hours now?
const hours = date.getHours();
console.log("The Hours are", hours);

// - What is the minutes now?
const minutes = date.getMinutes();
console.log(minutes);
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = Math.floor(new Date().getTime() / 1000);
console.log(seconds);


// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

function areaofTraingle() {
  let base = prompt("enter base of the traingle")
  let height = prompt("enter height of the triangle")
  let area = (0.5 * base * height)
  return area
}
// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
function findSlope(y1, y2, x1, x2) {
  let m = (y2 - y1) / (x2 - x1)
  console.log("The slope between the points (" + x1 + "," + y1 + ") and (" + x2 + "," + y2 + ") is: " + m);
}

let y1 = 2;
let y2 = 2;
let x1 = 6;
let x2 = 10;

findSlope(y1, y2, x1, x2)



// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2


// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// 17. Create a human readable time format using the Date time object

//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// 20. Write a code which can give grades to students according to theirs scores:

//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
