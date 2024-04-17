//This is a comment
/*
This is a multi-line comment
*/

//Console messages
/*
console.log("Hello, world!");
console.log("I like pizza!");
*/

//Alert message / Popups
/*
window.alert("This is an alert!");
window.alert("I like pizza!");
*/

document.getElementById("myH1").textContent = "Hello, world!";
document.getElementById("myP").textContent = "Welcome to my website, stranger!";


//Variables
let x1 = 5;
console.log(x1);

//Data types
let y = 5; //Number
let price = 15.99; //Number
let food = "Pizza"; //String
let a = true; //Boolean
let b = null; //Null
let c = undefined; //Undefined

console.log("Your " + food + " costs: " + price);
//or
console.log(`Your ${food} costs: ${price}`);

//Arithmetic operators
let sum1 = 5 + 5;
let difference = 5 - 5;
let product = 5 * 5;
let quotient = 5 / 5;
let remainder = 5 % 5;

//Operator Precedence
/*
1. Parentheses
2. Exponents
3. Multiplication and Division
4. Addition and Subtraction
*/
let result1 = 5 + 5 * (5 + 5) ** 2;//5 + 5 * 10 ** 2 = 5 + 5 * 100 = 5 + 500 = 505

//Increment and Decrement
let x = 5;
x++;//Increment by 1
x--;//Decrement by 1
x += 5;//Increment by 5
x -= 5;//Decrement by 5
x *= 5;//Multiply by 5
x /= 5;//Divide by 5
x **= 5;//Raise to the power of 5
x %= 5;//Modulus by 5

//User input
let username;
//1. Easy Way = window prompt
/*
username = window.prompt("Enter your name:");
console.log(username);
*/
//2. Professional Way = HTML textbox
document.getElementById("mySubmit1").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myP").textContent = "Welcome to my website, " + username + "!";
    console.log(username);
}

//Type conversion
/*
By default, JavaScript is a loosely typed language, which means that it can convert data types automatically.
*/
let num1 = 5;
let num2 = "5";
let sum2 = num1 + num2;//55, because it concatenates the two values as strings
let sum3 = num1 + Number(num2);//10, because it converts the second value to a number
let sum4 = num1 + parseInt(num2);//10, because it converts the second value to an integer
let sum5 = num1 + parseFloat(num2);//10, because it converts the second value to a floating-point number

let pizzaToNum = Number("pizza");
let pizzaToStr = String("pizza");
let pizzaToBool = Boolean("pizza");
console.log(pizzaToNum, typeof pizzaToNum);//output: NaN, number, because "pizza" is not a number
console.log(pizzaToStr, typeof pizzaToStr);//output: pizza, string, because "pizza" is already a string
console.log(pizzaToBool, typeof pizzaToBool);//output: true, boolean, because "pizza" is not an empty string

//Constants
//We use the const keyword to declare a constant variable, which cannot be changed or reassigned.
//It's good practice to use uppercase letters for constants to distinguish them from regular variables.

/*
const PI = 3.14159;
radius = window.prompt("Enter the radius of a circle:");
let circumference = 2 * PI * radius;
console.log(circumference);
*/

//Counter program
const decreaseBtn = document.getElementById("decrButton");
const increaseBtn = document.getElementById("incrButton");
const resetBtn = document.getElementById("resetButton");
const counter = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}

//Math object
let num = -5;
let absNum = Math.abs(num);//5, because it returns the absolute value of a number
let sqrtNum = Math.sqrt(25);//5, because it returns the square root of a number
let powNum = Math.pow(5, 2);//25, because it returns the base to the exponent power
let maxNum = Math.max(5, 10, 15);//15, because it returns the highest value
let e = Math.E;//2.718281828459045, because it returns the base of natural logarithms
let PI = Math.PI;//3.141592653589793, because it returns the ratio of the circumference of a circle to its diameter
let ceil = Math.ceil(5.1);//6, because it rounds a number up to the nearest integer
let floor = Math.floor(5.9);//5, because it rounds a number down to the nearest integer
let round = Math.round(5.5);//6, because it rounds a number to the nearest integer
let random = Math.random();//0.0 to 0.9999999999999999, because it returns a random number between 0 and 1
let randomAlt = Math.floor(Math.random() * 10);//0 to 9, because it returns a random number between 0 and 9
let trunc = Math.trunc(5.9);//5, because it removes the decimal part of a number
//Trigonometry
let sin = Math.sin(0);//0, because it returns the sine of an angle
let cos = Math.cos(0);//1, because it returns the cosine of an angle
let tan = Math.tan(0);//0, because it returns the tangent of an angle
let asin = Math.asin(0);//0, because it returns the arcsine of a number
let acos = Math.acos(1);//0, because it returns the arccosine of a number
let atan = Math.atan(0);//0, because it returns the arctangent of a number
let atan2 = Math.atan2(0, 1);//0, because it returns the arctangent of the quotient of its arguments
//Hyperbolic functions
let sinh = Math.sinh(0);//0, because it returns the hyperbolic sine of a number
let cosh = Math.cosh(0);//1, because it returns the hyperbolic cosine of a number
let tanh = Math.tanh(0);//0, because it returns the hyperbolic tangent of a number
let asinh = Math.asinh(0);//0, because it returns the inverse hyperbolic sine of a number
let acosh = Math.acosh(1);//0, because it returns the inverse hyperbolic cosine of a number
let atanh = Math.atanh(0);//0, because it returns the inverse hyperbolic tangent of a number
//Logarithms
let log = Math.log(1);//0, because it returns the natural logarithm of a number
let log10 = Math.log10(1);//0, because it returns the base 10 logarithm of a number
let log2 = Math.log2(1);//0, because it returns the base 2 logarithm of a number
let exp = Math.exp(0);//1, because it returns the value of E raised to the power of a number

//If statement
let age1 = 18;
if (age1 >= 18) {
    console.log("You are an adult!");
}

//If-else statement
let age2 = 17;
if (age2 >= 18) {
    console.log("You are an adult!");
}
else {
    console.log("You are a minor!");
}

//If-else if-else statement
let age3 = 17;
if (age3 >= 18) {
    console.log("You are an adult!");
}
else if (age3 >= 13) {
    console.log("You are a teenager!");
}
else {
    console.log("You are a child!");
}

//Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday!");
        break;
    case "Tuesday":
        console.log("Today is Tuesday!");
        break;
    case "Wednesday":
        console.log("Today is Wednesday!");
        break;
    case "Thursday":
        console.log("Today is Thursday!");
        break;
    case "Friday":
        console.log("Today is Friday!");
        break;
    case "Saturday":
        console.log("Today is Saturday!");
        break;
    case "Sunday":
        console.log("Today is Sunday!");
        break;
    default:
        console.log("Invalid day!");
}

//For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//Do-while loop
let k = 0;
do {
    console.log(k);
    k++;
}
while (k < 5);

//Break statement
for (let l = 0; l < 5; l++) {
    if (l == 3) {
        break;
    }
    console.log(l);
}

//Continue statement
//The continue statement skips the current iteration of a loop and continues with the next iteration.
for (let m = 0; m < 5; m++) {
    if (m == 3) {
        continue;
    }
    console.log(m);
}

//Functions
function greet1() {
    console.log("Hello, world!");
}

greet1();

function greet2(name) {
    console.log("Hello, " + name + "!");
}

greet2("Alice");

function add(a, b) {
    return a + b;
}

let sum6 = add(5, 5);
console.log(sum6);

//Function expressions
//A function expression is a function that is assigned to a variable.
let greet3 = function () {
    console.log("Hello, world!");
}
greet3();

//Arrow functions
//An arrow function is a shorter way to write a function expression.
let greet = () => {
    console.log("Hello, world!");
}
greet();

//Objects
let person1 = {
    name: "Alice",
    age: 18
}

console.log(person1.name);
console.log(person1.age);

//Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


//Loops
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//forEach method
fruits.forEach(function (fruit) {
    console.log(fruit);
});

//map method
let numbers1 = [1, 2, 3, 4, 5];
let squares = numbers1.map(function (number) {
    return number * number;
});
console.log(squares);

//filter method
let evenNumbers = numbers1.filter(function (number) {
    return number % 2 == 0;
});
console.log(evenNumbers);

//reduce method
//same as fold in Haskell
let sum = numbers1.reduce(function (total, number) {
    return total + number;
}, 0);
console.log(sum);

//sort method
//sorts an array alphabetically
fruits.sort();
console.log(fruits); //output: ["Apple", "Banana", "Cherry"]

//sort method with compare function
//sorts an array numerically
let numbers = [3, 1, 2, 5, 4];
//ascending order
numbers.sort(function (a, b) {
    return a - b; //ascending order
});
console.log(numbers); //output: [1, 2, 3, 4, 5]

//descending order
numbers.sort(function (a, b) {
    return b - a; //descending order
});
console.log(numbers); //output: [5, 4, 3, 2, 1]

//Date object
let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getTimezoneOffset());

//String object
let str = "Hello, world!";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.indexOf("world"));
console.log(str.lastIndexOf("world"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("world!"));
console.log(str.includes("world"));
console.log(str.slice(0, 5)); //substring of a string from start to end
console.log(str.substring(0, 5)); //substring of a string from start to end
console.log(str.substr(0, 5));//substring of a string from start with length

//Template literals
let name = "Alice";
let age = 18;
console.log(`Hello, ${name}! You are ${age} years old.`);
console.log("Hello, " + name + "! You are " + age + " years old.");

//Regular expressions
let pattern = /world/;
let result = pattern.test(str); //this returns true if the pattern is found in the string
console.log(result); //output: true


//Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

let person = new Person("Alice", 18);
person.greet();//output: Hello, Alice!

//Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`Study hard, ${this.name}!`);
    }
}

let student = new Student("Bob", 16, 10);
student.greet();//output: Hello, Bob!
student.study();//output: Study hard, Bob!

//Modules
//Modules are reusable pieces of code that can be exported from one program and imported into another program.
//export.js
/*
export function greet() {
    console.log("Hello, world!");
}

//import.js
import { greet } from "./export.js";
greet();//output: Hello, world!
*/

//Promises
//A promise is an object that represents the eventual completion or failure of an asynchronous operation.
/*
let promise = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
        resolve("Success!");
    }
    else {
        reject("Error!");
    }
});

promise.then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});
*/

//Async/await
//Async/await is a modern way to handle asynchronous operations in JavaScript.
/*
async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
}
getData();
*/

//Error handling
/*
try {
    throw new Error("An error occurred!");
}
catch (error) {
    console.log(error);
}
*/
/*
//Event listeners
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});

//Event object
document.getElementById("myButton").addEventListener("click", function (event) {
    console.log(event.target);
});

//Event propagation
//Event propagation is the process of capturing and bubbling events in the DOM.
//Event capturing
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
}, true);

//Event bubbling
document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
}, false);

//Event delegation
//Event delegation is the process of using a single event listener to handle multiple events.
document.getElementById("myDiv").addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        console.log("Button clicked!");
    }
});
*/

//.checked
//The checked property returns true if a radio button or checkbox is checked, otherwise it returns false.
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = "You have subscribed to our newsletter!";
    }
    else {
        subResult.textContent = "Please subscribe to our newsletter!";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa!";
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = "You have selected Mastercard!";
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = "You have selected Paypal!";
    }
    else {
        paymentResult.textContent = "Please select a payment method!";
    }
}



//Method chaining
//--No method chaining--
let userid1 = window.prompt("Enter your user ID:");
userid1 = userid1.trim();
let letter = userid1.charAt(0);
letter = letter.toUpperCase();
let extrachars = userid1.slice(1);
extrachars = extrachars.toLowerCase();
userid1 = letter + extrachars;
console.log(userid1);

//--Method chaining--
let userid2 = userid1.trim().charAt(0).toUpperCase() + userid1.slice(1).toLowerCase();
console.log(userid2);

//Boolean operators
let a1 = true;
let b1 = false;
let c1 = a1 && b1; //false, because both operands are false
let d1 = a1 || b1; //true, because one operand is true
let e1 = !a1; //false, because the operand is true

//Comparison operators
let x2 = 5;
let y2 = 5;
let z2 = x2 == y2; //true, because the values are equal
//strict equality is used to compare both the values and types of the operands
let w2 = x2 === y2; //true, because the values and types are equal
let p2 = x2 != y2; //false, because the values are equal
let q2 = x2 !== y2; //false, because the values and types are equal
let r2 = x2 > y2; //false, because the values are equal
let s2 = x2 >= y2; //true, because the values are equal
let t2 = x2 < y2; //false, because the values are equal
let u2 = x2 <= y2; //true, because the values are equal
//Note
let piStr = "3.14159";
let piNum = 3.14159;
piStr == piNum; //true, because the values are equal
piStr === piNum; //false, because the types are different

//Variable scope
//Global scope
let globalVar = 5;
function myFunction() {
    //Local scope
    let localVar = 10;
    console.log(globalVar);
    console.log(localVar);
}
myFunction();
console.log(globalVar);
//console.log(localVar); //ReferenceError: localVar is not defined
//In case of conflicts, local variables take precedence over global variables.

//Spread operator
//The spread operator is used to expand an array or object into individual elements.
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2); //output: [1, 2, 3, 4, 5, 6]

//Rest parameter
//The rest parameter is used to represent an indefinite number of arguments as an array.
//While spread operator is used to expand an array, rest parameter is used to collect an indefinite number of arguments into an array.
function sum7(...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}

//Callback functions
//A callback function is a function that is passed as an argument to another function.
//Callback functions are used to handle asynchronous operations in JavaScript.
//In the example below, the greet4 function takes a name and a callback function as arguments.
//The callback function is then called with the name as an argument.
hello(goodbye)

//"Hey, when your're done, call this function"
function hello(callback) {
    console.log("Hello, world!");
    callback();
}

function goodbye() {
    console.log("Goodbye, world!");
}

//This keyword
//The this keyword refers to the object that is calling the function.
//In the example below, the greet5 method is called by the person object, so this refers to the person object.
let person2 = {
    name: "Alice",
    greet5: function () {
        console.log(`Hello, ${this.name}!`);
    }
}

//Static keyword
//The static keyword is used to define a static property or method for a class.
//Static methods are called on the class itself, not on an instance of the class.
//In the example below, the add method is a static method of the Math2 class.
class Math2 {
    static add(a, b) { //static method
        return a + b;
    }
}
console.log(Math2.add(5, 5)); //output: 10

class User {
    static userCount = 0;//static property
    constructor(name, age) {
        this.name = name;
        this.age = age;
        User.userCount++;//increment the user count
    }
}

//Super keyword
//The super keyword is used to call the constructor of the parent class.
//In the example below, the constructor of the Person3 class is called by the constructor of the Student2 class using the super keyword.
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet6() {
        console.log(`Hello, ${this.name}!`);
    }
}

class Student2 extends Person3 {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        super.greet6();//call the greet method of the parent class
        console.log(`Study hard, ${this.name}!`);
    }

}

//Getters and setters
//Getters and setters are used to get and set the values of an object's properties.
//In the example below, the name property is accessed using the getName method and set using the setName method.
class Person4 {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
//This is good practice because it allows you to control how the property is accessed and modified.

//Destructuring
//Array Destructuring
let numbers3 = [1, 2, 3];
let [a2, b2, c2] = numbers3;
console.log(a2); //output: 1
console.log(b2); //output: 2
console.log(c2); //output: 3

//Object Destructuring
let person3 = {
    name: "Alice",
    age: 18
}
displayPerson(person3);
function displayPerson({ name, age }) { //object destructuring
    console.log(name);
    console.log(age);
}

//Nested object
//In the example below, the person object contains an address object.
//The address object contains a city property.
//The city property is accessed using nested object destructuring.
let person4 = {
    name: "Alice",
    age: 18,
    address: {
        city: "New York" //
    }
}

//Closure
//A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//In the example below, the outer function returns the inner function, which has access to the outer function's scope.
function outer() {
    let message = "Hello, world!";
    function inner() {
        console.log(message);
    }
    return inner;
}

//setTimeout
//The setTimeout method is used to execute a function after a specified number of milliseconds.
setTimeout(function () {
    console.log("Hello, world!");
}, 1000);

//ES6 modules
//ES6 modules are used to export and import modules in JavaScript.
//In the example below, the greet function is exported from the export.js file and imported into the import.js file.
//import { greet } from "./export.js";
//greet();//output: Hello, world!

//Synchrounous vs Asynchronous
//Synchronous code is executed sequentially from top to bottom.
//Asynchronous code is executed concurrently, allowing multiple tasks to be performed at the same time.
//Usually used for things which can take an indefinite amount of time, such as reading a file or making a network request.
//In the example below, the setTimeout method is used to simulate an asynchronous operation.
setTimeout(function () {
    console.log("Task 1");
}, 1000);
console.log("Task 2");
//Task 2 is executed first, followed by Task 1 after 1 second.
//Other async concepts include Promises, Callbacks, and Async/Await.
function func1(callback) {
    setTimeout(function () {
        console.log("NewTask 1");
        callback();
    }, 1000);
}

function func2() {
    console.log("NewTask 2");
}

func1(func2); //output: NewTask 1, NewTask 2, so func2 is called after func1 finishes

//Error handling
//Error handling is used to catch and handle errors in JavaScript.
//In the example below, the try block is used to catch errors, while the catch block is used to handle errors.
try {
    throw new Error("An error occurred!");
}
catch (error) {
    console.log(error);
}
//Finally block
//The finally block is used to execute code after the try and catch blocks, regardless of whether an error occurred.
try {
    throw new Error("An error occurred!");
}
catch (error) {
    console.log(error);
}
finally {
    console.log("Finally block executed!");
    //usually used for cleanup tasks, such as closing a file or database connection
}

console.log("You've reached the end!");
/*
//What is DOM?
//The Document Object Model (DOM) is a programming interface for web documents.
//It represents the structure of a document as a tree of nodes.
//Each node represents an element, attribute, or text in the document.
//The DOM allows you to manipulate the content, structure, and style of a document using JavaScript.
//In the example below, the getElementById method is used to access an element in the document.
let element = document.getElementById("myElement");
element.textContent = "Hello, world!";
//The textContent property is used to set the text content of an element.
console.log(document);//output: the entire document object
console.dir(document);//output: the document object in a tree-like structure

//DOM methods
//The DOM provides methods to access and manipulate elements in a document.
//In the example below, the getElementById method is used to access an element by its ID.
let element1 = document.getElementById("myElement");
element1.textContent = "Hello, world!";
//The textContent property is used to set the text content of an element.
let element2 = document.createElement("div");
element2.textContent = "Hello, world!";
document.body.appendChild(element2);
//The createElement method is used to create a new element, and the appendChild method is used to add the element to the document.
let element3 = document.getElementById("myElement");
element3.style.color = "red";
element3.style.fontSize = "24px";
//The style property is used to set the CSS styles of an element.
let element4 = document.getElementById("myElement");
element4.classList.add("highlight");
element4.classList.remove("highlight");
element4.classList.toggle("highlight");
element4.classList.contains("highlight");
//The classList property is used to add, remove, toggle, and check for classes in an element.
//getelementbytagname
// Example for getElementByTagName
let elements = document.getElementsByTagName("p");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
}
// Example for getElementByClassName
elements = document.getElementsByClassName("highlight");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "yellow";
}
// Example for querySelector
//returns first element or null
element = document.querySelector("#myElement");
element.textContent = "Hello, world!";
// Example for querySelectorAll
//returns all lists in the form of a node list or empty list
elements = document.querySelectorAll(".highlight");
elements.forEach((element) => {
    element.style.fontWeight = "bold";
});

//DOM navigation
//The DOM provides methods to navigate the structure of a document.
//firstElementChild, lastElementChild, nextElementSibling, previousElementSibling, parentElement, children
let parent = document.getElementById("parent");
let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;
let nextSibling = firstChild.nextElementSibling;
let previousSibling = lastChild.previousElementSibling;
let grandparent = parent.parentElement;
let children = parent.children;
*/

//Event listeners
//Event listeners are used to handle events in JavaScript.
// Examples of events include mouse clicks, key presses, and form submissions.
//In the example below, the addEventListener method is used to listen for a click event on a button.
//When the button is clicked, the color of the button will change to red.

function changeButtonColor(event) {
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Clicked! 😖";
    console.log(event)
};

document.getElementById("myEventButton").addEventListener("click", changeButtonColor);

document.getElementById("myEventButton").addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Hovered! 🤨";
    console.log(event)
});

document.getElementById("myEventButton").addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "Mouseout! 😊";
    console.log(event)
});

//Event object
//The event object is passed as an argument to event listeners.
//It contains information about the event, such as the target element and event type.

//Key events
//Key events are used to handle keyboard input in JavaScript.
//Examples of key events include keydown, keyup, and keypress.
//In the example below, the keydown event is used to listen for a key press on the document.
//When a key is pressed, the key code and key value are logged to the console.
const myEmoji = document.getElementById("floatingEmoji");
console.log(myEmoji);

//be careful, you have to call addevent listener on the document, not the element
document.addEventListener("keydown", event => {
    //change to rain emoji
    console.log(event);
    if (event.key === "r") {
        myEmoji.textContent = "🌧️";
    }
});

//be careful, you have to call addevent listener on the document, not the element
document.addEventListener("keyup", event => {
    console.log(event);
    //change back to party emoji
    myEmoji.textContent = "🎉";
});

//Nodelist
//A NodeList is an array-like collection of nodes.
//It is returned by methods such as getElementsByTagName and querySelectorAll.
//In the example below, the forEach method is used to iterate over a NodeList.
let elements = document.querySelectorAll("p");
elements.forEach((element) => {
    element.style.color = "blue";
});

//Callback hell
//Callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain.
//In the example below, the setTimeout method is used to simulate asynchronous operations.
//The code is difficult to read and maintain due to the nested callbacks.
setTimeout(function () {
    console.log("Task 1");
    setTimeout(function () {
        console.log("Task 2");
        setTimeout(function () {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);
//use promises or async/await to avoid callback hell
//the above example can be rewritten using promises as follows
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Task 1");
        resolve();
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Task 2");
        resolve();
    }, 1000);
});

let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Task 3");
        resolve();
    }, 1000);
});

promise1.then(function () { return promise2; })
    .then(function () { return promise3; });

//with async/await the above example can be rewritten as follows
async function tasks() {
    await new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Task 1");
            resolve();
        }, 1000);
    });

    await new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Task 2");
            resolve();
        }, 1000);
    });

    await new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Task 3");
            resolve();
        }, 1000);
    });
}

tasks();

//JSON
//JSON (JavaScript Object Notation) is a lightweight data interchange format.
//It is used to store and exchange data between a server and a client.
//Usually as a key-value pair or an array of values.
//JSON.stringify() is used to convert an object to a JSON string.
//JSON.parse() is used to convert a JSON string to an object.

//Fetch
//The fetch API is used to make HTTP requests in JavaScript.
//It is a modern alternative to XMLHttpRequest.
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

//Using fetch with API
//Use fetch with APIs to retrieve and send data asynchronously over the web.
//Fetch can be used with method: GET, POST, PUT, DELETE
//In the example below, the fetch method is used to retrieve pokemon images from the PokeAPI.
fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

function fetchData() {

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemonName)
        .then(response => response.json())
        .then(data => displayPokemonImg(data))
}

function displayPokemonImg(data){
    const pokemonSprite = data.sprites.front_default;
    document.getElementById("pokemonSprite").src = pokemonSprite;
}

fetchData();

