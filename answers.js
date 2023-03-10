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

let statement4 = "You cannot end a sentence with because because because is a conjunction";

let wordPosition = statement4.search("because");
console.log(wordPosition); // 31

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string. 

let statement5 = "   let's remove whitespace      "
let trimedString = statement5.trim()
console.log(trimedString) // "let's remove whitespace"


/*10. Boolean value is either true or false.

    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value.
*/
var string = "hello"
let Array = [1, 2, 3, 4];
let boolean = true;
console.log((string && Array && boolean) ? true : false)
// falsy value 
let a = false
let b = null
let c = NaN
let d = " "
let e = 0
console.log((a && b && c && d && e) ? true : false)

/* 
11. Figure out the result of the following comparison expression first without using console.log().After you decide the result confirm it using console.log()

    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.
    */