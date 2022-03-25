// // JavaScript Tutorial

// // 1. Ways to print in JavaScript
// console.log("Hellow World");
// //document.write("This is document write");
// //alert("me");

// 2. JavaScript console API
console.log("Hellow World");
console.warn("This is warning");
console.error("This is an error");

// /*
// This is a
// multiline comment
// */

// 3. JavaScript variables
var n1 = 34;  // var has a global scope
var n2 = 35;
console.log(n1 + n2);

// 4. Data types in JavaScript

// Numbers
var x = 36;
var y = 89;

console.log(x, y);

// string 
var s1 = "This is string 1";
var s2 = 'This is string 2';
console.log(s1);
console.log(s2);

// Objects
var marks = {
    ravi: 57,
    shubham: 69,
    varun: 100
}
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a);
console.log(b);

// Undefined
var p = undefined;
var q;
console.log(p);
console.log(q);

// Null
var i = null;
console.log(i);

/* At a very high level there are two types of data types
    1) Primitive data types : undefined , null, number, string, boolean, symbol
    2) Reference data types : arrays and objects
*/

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 'varun', 45.3, 8];

console.log(arr1);
console.log(arr2);
console.log(arr1[0]);
console.log(arr2[3]);

// 5. Operators in JavaScript

//a) Arithmetic

var r = 34;
var s = 56;
console.log("The value of a+b is: ", r + s);
console.log("The value of a-b is: ", r - s);
console.log("The value of a*b is: ", r * s);
console.log("The value of a/b is: ", r / s);

// b) Assignmnet

var c = r;
console.log(c);
c -= 2;
console.log(c);
c += 2;
console.log(c);
c *= 2;
console.log(c);
c /= 2;
console.log(c);

// c) Comparison 
var j = 34;
var k = 56;

console.log(j == k);
console.log(j >= k);
console.log(j <= k);
console.log(j > k);
console.log(j < k);
console.log(j != k);

// d) Logical
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);

// 6.Function

function avg(a, b) {
    return (a + b) / 2;
}

var c1 = avg(4, 2);
console.log(c1);
var c2 = avg(14, 57);
console.log(c2);

// 7. Conditional in JavaScript
var age = 18;

// Single if statement
if (age > 18) {
    console.log("You can drink");
}

// if-else statement
if (age >= 18) {
    console.log("You can cast vote");
} else {
    console.log("You can not cast vote");
}

// if-else ladder
if (age < 13) {
    console.log("You are a kid");
} else if (age > 13 && age < 19) {
    console.log("You are a teenager");
} else {
    console.log("You are an adult");
}

// 8. Loop in JavaScript
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}


// Some Very Important concepts to be Noted Down Here
console.log("4" + "5");
console.log("4" + 5);
console.log(4 + 5);
console.log("1" == 1);
console.log("1" === 1);
console.log('1' - 1);
console.log('1' + 1);
console.log("hello" - 1);

// Very Important thing to Notice
function add(one, two, three) {
    return one + two + three;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4));

// Default Parameters in Function
function add(first = 0, second = 0, third = 0) {
    return first + second + third;
}

console.log(add(4, 5));
console.log(add(5));
console.log(add(4, 5, 6));
console.log(add());

// Rest Parameters in Function
function add(one, two, ...num) {
    var sum = one + two;
    for (var i = 0; i < num.length; i++) {
        sum += num[i];
    }

    return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));

// Function hoisting
console.log(cube(4));

function cube(x) {
    return x * x * x;
}

// Function expression
var f = function add(x, y) {
    return x + y;
}
console.log(f(3, 4));

// Anonymous Function
var f = function(x, y) {
    return x + y;
}

console.log(f(8, 9));

// Passing Function as an argument to another function (CallBack function)
function fun(a, b, compute) {
    compute(a, b);
}

function add(a, b) {
    console.log(a + b);
}

function multiply(a, b) {
    console.log(a * b);
}

fun(3, 4, add);
fun(4, 3, multiply);

// Arrow Function
// If the function has only one statement, and the statement returns the value, you can remove the brackets and the return keyword
// Note: This works only if the function has only one statement.
x = () => "Welcome to the coding Word";
console.log(x());
sum = (a, b) => a + b;
console.log(sum(4, 6));

Arrays
There are two ways of creating an array
1) Using Square brackets
var arr1 = []; // Empty array
var arr2 = [1, 2, 3, 4]; // Initialising the array
//2) Using Array Object
var a = new Array(); // Creating empty array
var b = new Array(5); // Creating an array of size 5
var c = new Array(1, 2, 3, 4); // same as var c = [1,2,3,4]

// Array inside array
var arr = [1, 2, [3, 4]];
console.log(arr[2]);
console.log(arr[5]);
console.log(arr[-1]);

// Heterogenous Array
arr = [1, 2, 'varun', 5.6];
console.log(arr);

Functions on arrays
arr = [1, 2, 3, 4, 5, 6, 7, 8];

/*
1) Push Method : The push() method adds one or more elements to the end of the array and returns the new length of the array.
                 It uses the length property to add elements.
*/

arr.push(5);
console.log(arr);
arr.push(6, 7);
console.log(arr);

2) Push Method: The pop() methods removes the last element from the array and return it. It also reduces the size of the array by 1.

var x = arr.pop();
console.log(arr);
console.log(x);


// 3) Shift Method: The shift( ) method is used to remove the first element from an array and return that element. If the length property is 0, 
//                  i.e. empty array, then undefined is returned.

x = arr.shift();
console.log(arr);
console.log(x);

/*
4. unshift Method : The unshift( ) method is used to add one or more elements to the beginning of the array and returns the new length of array.
                    In case, you are adding multiple elements, separate them using a comma(,)
*/

x = arr.unshift(0, 1);
console.log(arr);
console.log(x);

/*
5. indexOf Method : The indexOf( ) method is used to return the first index at which the given element is found in the array.
                    If the element is not found, then -1 is returned.
*/
console.log(arr.indexOf(5));
console.log(arr.indexOf(10));

/*
6. splice Method : The splice( ) method is used to remove or replace or add elements to an array. If an element is removed, 
                   it returns the array of deleted elements. If no elements are removed, an empty array is returned.

                   Syntax: arr.splice(start, deleteCount, item1,...,itemN);
*/

console.log(arr);
var ret_res = arr.splice(2, 3, "HI");
console.log(ret_res);
console.log(arr);

/* 7. reverse Method : The reverse method is used to reverse the content of the array and return the new reversed array.
                       This means that the first element becomes last and vice-versa.
*/

arr.reverse();
console.log(arr);

/* 8. sort Method : The sort( ) method is used to sort the elements of an array and return the sorted
                    array. The sort is done by converting the elements to string and then comparing them.
*/

arr = [2, 11, 89, 23, 0, -34];
arr.sort()
console.log(arr);

/* 9. Join Method: The join method is used to concatenate all the elements in an array and return a new string.
                   They are seperated by comma(,) by default, but you can also provide your seperator as a string. It is optional to provide a
                   seperator.

                   Note: If an element in the array in undefined or null, it is converted into empty string.

*/
var str = arr.join(',');
console.log(str);
var str = arr.join(':');
console.log(str);
arr = [1, 2, 'coding world'];
str = arr.join(':');
console.log(str);

arr = [1, 2, null, 'world'];
str = arr.join(',');
console.log(str);

/*
    10.toString Method: The toString( ) method is used to return the array in the form of a string. The string contains all the elements 
    separated by a comma. We do not need to provide the separator as a parameter as we did in the join method.
*/

var arr = [1, 2, 3, 'Coding Ninjas'];
var str = arr.toString(); // returns 1,2,3,Coding Ninjas as a String
console.log(str);
console.log(typeof(str));

/*
    11.Slice: This method is used to slice a particular range elements of an array.

    Syntax: arr.slice(start_index, end_index)
    start_index is inclusive and end_index is not inclusive
*/
//console.log(arr.slice(1, 4));


// ITERATING OVER ARRAYS
1. for loop: It is used commonly to iterate over all the values of the array.
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);

}

// 2.forEach Method: The forEach Method calls the function once for each array element

// 1) Using anonymous function

arr.forEach(function(e) {
    console.log(e * 2);
});

// 2) Using arrow function

arr.forEach((e) => console.log(e * e));

//   STRINGS IN JAVA SCRIPT

/*  The String object is used to represent and manipulate a sequence of characters.
    It could be written with both single and double quotes.
*/

//    1) Creating Strings
//    Strings are primitive data types created from literals.

let str = "Hello World";
console.log(typeof(str)); // gives string

// Strings can also be defined as Objects with a keyword new as we did with array

/* NOTE: Don't create strings as objects. It slows down execution speed.The new keyword complicates the code. 
         This can produce some unexpected results too
*/

str = new String("Hello World");
console.log(typeof(str));

COMPARING THE STRINGS
using == operator
let s1 = "Hello World";
let s2 = new String("Hello World");

console.log(s1 == s2); // true because only values are checked but not the data types

// using === operator
console.log(s1 === s2); // false because not only values and checked but also the data types

let s1 = new String("Hello");
let s2 = new String("Hello");
console.log(s1 === s2); // false because  Objects can not be compared

//     STRING METHODS
//   1. Substring(): It is used to find contiguous sequence of characters within a string using indexs.
let s = "Hello World";
first argument is starting index inclusive and second argument is ending index not inclusive
console.log(s.substring(1));
console.log(s.substring(1, 6));

//  2. substr() : It is same as substring, the only difference is the second argument which tells the length of the substring extracted for the parent
console.log(s.substr(2, 4));

/* 3. replace(): It replaces the specified value with another value in the string. But it does not affect the original string rather it makes another
                 string and return the result 
*/

let str = "Hello World";
var res = str.replace("Hello", "Bye");

console.log(str);
console.log(res);

/*
   4. toUpperCase( ) & toLowerCase( ) : toUpperCase( ) Converts the characters of string to uppercase characters and vice-versa for toLowerCase( )
*/
let s = "Hello world";
console.log(s.toLowerCase()); //  hello world
console.log(s.toUpperCase()); //  HELLO WORLD

// 5. trim(): This  method removes the  white space from  both sides of a string

let str = "    hello   ";
let s = str.trim(); // hello

//                SEARCHING METHODS IN A STRINGS  (Note: These Methods are case sensitive)
/*
    1. indexOf( ) : This method returns the index of (the position of) the first occurrence of a specified character/text in a string
*/
var str = "Coding Ninjas";
console.log(str.indexOf('Coding')); // 0
console.log(str.indexOf('Ninjas')); // 7
console.log(str.indexOf('ninjas')); // -1

/*
    2. lastIndexOf( ) : This method returns the index of the last occurrence of a specified character/text in a string.
*/
var str = "coding ninjas";
console.log(str.lastIndexOf('n')); // 9
console.log(str.lastIndexOf('i')); // 8

/*
  3. includes( ) : This method returns true if a string contains a specified text
*/

console.log(str.includes('ninjas'));
console.log(str.includes('Ninjas'));

/*         OBJECTS IN THE JAVA SCRIPT

     Objects Overview:
     JavaScript objects are a collection of properties in a key-value pair.
     Some important points about objects are -
     ● Object contains properties separated with a comma( , ).
     ● Each property is represented in a key-value pair.
     ● Key and value are separated using a colon( : ).
     ● The key can be a string or variable name that does not contain special characters, except underscore( _ ).
     ● The value can contain any type of data - primitive, non-primitive and even a function.
     ● The objects are passed by reference to a function.

     Example : var obj = {
    key1: "value1",
    key2: 12345,
    "key3": true,
    key4: function( ) {
      }
    }
*/

//  CREATING  AN  OBJECTS
//  1) Using Curly backets

var obj = {}; // creates empty object
var obj2 = { name: "varun", age: 24, Profession: "Engineering" }; // object  initialization

console.log(obj2);

2) Using New Operator

var obj1 = new Object(); // Creates empty object
console.log(typeof(obj1));

var obj2 = new Object({ name: "Varun", age: "24", profession: "Engineering" }); // object initialization
console.log(obj2);


//  CREATING AND ACCESSING PROPERTIES

// NOTE: If you access a property that has not been defined, then undefined is returned.
/*  You can also set function as the value to the key. So the key then becomes the method name and need 
parentheses to execute.
*/

var ball = {
    sport: "cricket",
    color: "blue",
    radius: 3,
    print: function() {
        console.log("Hey man, this is a game of cricket");
    }
}

console.log(ball.sport); // cricket
console.log(ball['color']); // blue
ball.print(); // hey man, this is a game of cricket

// DELETING THE PROPERTY
/* You can remove property of object using delete operator followed by the property
   name. You can either use dot operator or square bracket notation.
*/
delete ball.radius;
console.log(ball.radius); // undefined

// HOW OBJECTS ARE STORED

/*   Objects are stored in a heap and objects are referece type  */

var obj1 = { name: "sohan", age: 23 };
var obj2 = { name: "sohan", age: 23 };

console.log(obj1 == obj2, obj1 === obj2);

obj2 = obj1; // Now obj1 and obj2 are pointing to the same object
console.log(obj1 == obj2, obj1 === obj2);

// ITERATING OBJECTS    

/* JavaScript provides a special form of loop to traverse all the keys of an object. This loop is called 'for...in' loop. */

for (key in ball) {
    console.log(key, ":", ball[key]);
}

var arr = [1, 2, 3, 4, 5, 6, 7];

for (var i in arr) {
    console.log(i, ":", arr[i]);
}

// This keyword

var user = {
    fname: "Varun",
    lname: "Singh",
    age: 24,
    getfullname: function() {
        return this.fname + " " + this.lname;
    }
};

console.log(user.getfullname());

//    TYPE CONVERSION
/*    JavaScript is a loosely typed language, and most of the time, operators automatically convert a value to the right type.
      Still, there are also cases when we need to do type conversions explicitly.
     ● Converting Strings to Numbers
     ● Converting Numbers to Strings
     ● Converting Booleans to Numbers
     ● Converting Numbers to Boolean
*/

//  Converting Strings to Numbers

// 1. Number( )
console.log(Number('22.3')); // Returns 22.3
console.log(Number('')); //Returns 0
console.log(Number('Coding Ninjas')); // Returns NaN

// 2. parseInt()
console.log(parseInt('22.3')); // returns 22

// 3. parseFloat()
console.log(parseFloat('22.3')); // returns 22.3
console.log(parseFloat(22)); // returns 22

// Converting Numbers to Strings

// The String ( ) and toString( ) method can convert numbers to strings.

console.log(String(22.3)); // returns "22.3"
console.log(String(22 + 11)); // returns "33"
console.log((12.3).toString()); // returns "12.3"

// Converting done by + operator

   "10" + 5 ; // returns "15" as a String
   "10" - 5 ; // returns 5 as a Number
    10 + null ; // returns 10 because null is converted to 0
   "10" + null ; // returns "10null" as a String
   “10” + undefined ; // returns “10undefined” as a String
   "10" * "5" ; // returns 50 as a Number


//    CLASSES  AND  CONSTRUCTORS
/*
   JavaScript provides a function constructor. The constructor provides a blueprint/structure for objects. You use this same
   structure to create multiple objects.
   Constructors are technically a regular functions. There is one convention to constructor
                                                    -The  first letter of the function is Capital
    Objects can be created by calling the constructor function with the new keyword.
    It is important always to use the new keyword when invoking the constructor.

    The new keyword is the one that is converting the function call into constructor call, and the following things happen -
    1. A brand new empty object gets created.
    2. The empty object gets bound as this keyword for the execution context of that function call.
    3. If that function does not return anything, then it implicitly returns this object.
    NOTE: this referred in the constructor bound to the new object being constructed.
*/

Function constructor
function Student(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

var stud1 = new Student("Varun", "Singh", 24);
var stud2 = new Student("Sagar", "Verma", 23);

console.log(stud1);

// Classes
/*
Classes are introduced in ECMAScript 2015. These are special functions that allow one to define prototype-based classes with a clean, 
nice-looking syntax. It also introduces great new features which are useful for object-oriented programming.
NOTE: The type of the class is a function.
*/

class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

}

let p = new Person("Rakesh", "Kumar");
console.log(p);
console.log(typeof(p));

// Getters and Setters
/*
You can also have a getter/setter to get the property value or set the property values respectively. You have to use the get 
and set methods to create a getter and setter, respectively.
*/

class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    // methods using set and set 
    get fullName() {
        return `${this.fname} ${this.lname} is my full name`;
    }
    set setName(value) {
        const arr = value.split(' ');
        this.fname = arr[0];
        this.lname = arr[1];
    }

//     // methods withod using get and set
//     // In class no need to specify function keyword for making methods 

    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }

}

// NOTE: Class declarations are not hoisted. If you try to use hoisting, it will return not defined error.

var p = new Person('Varun', 'Singh', 24);
p.setName = 'Varun Singh'; // set is invoked
console.log(p.fullName); // get is invoked

console.log(p.getAge());
p.setAge(12);
console.log(p.getAge());


// JSON 
/*

Overview
The JavaScript JSON is an acronym for JavaScript Object Notation. It provides a format
for storing and transporting data. It is a lightweight, human-readable collection of data
that can be accessed logically.
● It generates and stores the data from user input.
● It can transport the data from the server to the client, client to server, and server
to server.
● It can also build and verifying the data.
❖ JSON is often used when data is sent from a server to a web page.

JSON Object: The {(Curly brace) represents the JSON Object
{
   "student": {
   "name": "Sam",
   "fees": 56000,
   "institution": “Coding Ninjas”
   }
}

JSON Array : The [ (Square bracket) represents the JSON array. A JSON array can have values and objects

[
    {"name":"Sam", "email":"Sam@gmail.com"},
    {"name":"Yash", "email":"Yash@gmail.com"}
]


JSON Syntax Rules
● Data is in name/value pairs
● Data is separated by commas
● Curly braces hold objects
● Square brackets hold arrays

Purpose of using JSON:
The JSON format is syntactically similar to the JavaScript objects. Because of this, a JavaScript program can easily convert 
JSON data into JavaScript objects.

*/

/*
JSON.parse( ):
JSON is used to exchange data to/from a web server. When receiving data from a web server, the data is always a string.
Data is parsed with JSON.parse( ), and the data becomes a JavaScript object.
Syntax : JSON.parse( text ) ;
*/

var text = '{ "name": "Sam", "fees": 56000, "institution" : "coding ninjas"}';

console.log(typeof(text));
var json = JSON.parse(text);

console.log(typeof(json));
console.log(json.name); // Returns Sam
console.log(json.fees); //Returns 56000
console.log(json.institution); // Returns coding ninjas

/*
JSON.stringify( ):
JavaScript JSON.stringify( ) method converts a JavaScript Object to a JSON string.
Syntax : Json.stringify( value ) ;
*/

var obj = {
    "name": "Sam",
    "fees": 56000,
    "institution": "Coding Ninjas"
}
var json = JSON.stringify(obj);

//  json is now a string and ready to be sent to a server
console.log(typeof(json));
console.log(json); //  Returns : {"name":"Sam","fees":56000,"institution":"Coding Ninjas"}

// DOM (Document Object Manipulation)
/*
A document object represents the HTML code that is displayed inside a browser window. The 'document' object has various properties 
that refer to other objects that allow accessing and modifying the web page’s content.
If you want to access any element in an HTML page, you always start with accessing the document object.

You can access elements from the following selectors -
● document.getElementById
● document.getElementsByTagName
● document.getElementsByClassName
● document.querySelectorAll
● document.querySelector
*/

let a = window.document;
console.log(a);

alert("Hey you got virus in this site");

a = prompt("Hey who the hell are you?, type your name here");
console.log(a);

a = confirm("Are you confirm that you want to delete this file?");
console.log(a);

 window is a global object
a = window.innerHeight;
a = innerHeight;
console.log(a);

a = window.innerWidth;
a = innerWidth;
a = location;
console.log(a);


getting all elements from the global element window
a = document.all;
Array.from(a).forEach(function(element) {
    console.log(a);
});

getting all the links from the document
a = document.links;
console.log(a[0]);
console.log(a[1]);



a = document.images;

Converting a  list of  image elements into an array then accessing them
Array.from(a).forEach(function(element) {
    console.log(element);
});

Single Element selector

let element = document.getElementById('first');
element = element.className;
element = element.childNodes;
element = element.parentNode;
element.style.color = "green";
element.innerText = "Varun is a Hard Working boy";
element.innerHTML = '<b> Varun Is a Hard Working Guy </b>';
console.log(element);

/* Query Selector 




To be done later






*/

// Multi Element selector

let element = document.getElementsByClassName('child');
element = element[1];
element = document.getElementsByTagName('div');

Array.from(element).forEach(element => {
    console.log(element);
    element.style.color = "green";
});

   OR

for (let ele = 0; ele < element.length; ele++) {
    console.log(ele);
    element[ele].style.color = "orange";
}
console.log(element);

let element = document.querySelector('.container');

new line , comments , text is considered by childNodes
console.log(element.childNodes);
new line, comments, text is not considered by children
console.log(element.children);
let nodeName = element.childNodes[1].nodeName;
console.log(nodeName);
let nodeType = element.childNodes[2].nodeType;
console.log(nodeType);

/* Node types 
1. element
2. attribute
3. text node
8. comment
9. document
10. doctype
*/

let cont = document.querySelector('.container');
console.log(cont.children[1].children[0].children);
console.log(cont.firstChild);
console.log(cont.firstElementChild);
console.log(cont.lastChild);
console.log(cont.lastElementChild);
console.log(cont.childElementCount); // count of child elements
console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.nextElementSibling);

creating element using JS function
let element = document.createElement('li');
// creating TextNode using JS function
let textNode = document.createTextNode('Hello I am a text node');


// // adding class name and class id to the element li using JS function
element.className = 'childul';
element.id = 'created';

// // setting attributes to the element using JS function
element.setAttribute('title', 'mytitle');
element.innerHTML = '<b>This is done with the help of JavaScript </b>';

// Grabbing the targetted element 
let ul = document.querySelector('ul.this');

// Appending the elements to the target location
ul.appendChild(element);
ul.appendChild(textNode);

// // creating another node and  replacing it with some existing element
let elem2 = document.createElement('h3');
elem2.setAttribute('id', 'elem2');
elem2.setAttribute('class', 'elem2');
elem2.innerHTML = 'This is heading level 3';

// Replacing the one element with the other one
console.log(ul.firstChild);
console.log(element);

element.replaceWith(textNode);


// Replacing the child of element whose id is 'ui'
let ui = document.getElementById('ui');
ui.replaceChild(elem2 /* new element*/ , document.getElementById('fui') /*element to be replaced and must be child node*/ );
ui.replaceChild(textNode, document.getElementById('lui'));

// fetching and removing attributes
let att_id = elem2.getAttribute('id');
let att_class = elem2.getAttribute('class');
console.log(att_id);
console.log(att_class);
elem2.removeAttribute('class');
console.log(elem2.getAttribute('class'));

let link = document.createElement('a');
link.innerHTML = "LinkedIn";
link.setAttribute('href', 'https://www.linkedin.com/mynetwork/');
content.appendChild(link);

