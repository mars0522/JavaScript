/*
 धृतिः शमो दमः शौचं कारुण्यं वागनिष्ठुरा।
  मित्राणाम् चानभिद्रोहः सप्तैताः समिधः श्रियः।।
  अर्थ– धैर्य, मन पर अंकुश, इन्द्रियसंयम, पवित्रता, दया, मधुर वाणी और मित्र से द्रोह न करना ये सात चीजें लक्ष्मी को बढ़ाने वाली हैं। 
*/


/*
   Begining of document comment   


   // Difference between  var and let variables

 for(var i=1;i<6;i++){

    setTimeout(function(){
        console.log(i); // reference of variable i is passing in console.log()
    },i*1000);
 }

//  Note : let and const are not hoisted


 for(let i=1;i<6;i++){
     setTimeout(function(){
         console.log(i);
     },i*1000);
 }

 for(var i=1;i<6;i++){
     function close(i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
     }
     close(i);
 }


// Arrow Function

var getReg = function(){
    return 10;
}
console.log(getReg());

getReg = ()=> 10;

console.log(getReg());

getReg = function (a,b){
    return a+b;
}
console.log(getReg(12,23));

getReg = (a,b)=> a+b;

console.log(getReg(12,23));

getReg = function(a,b){
    console.log(a+b);
    console.log(a-b);
}
getReg(10,20);
getReg = (a,b) => {
    console.log(a+b);
    console.log(a-b);
}
getReg(10,20);

// This Keyword

var employee = {
    id:1,
    greet: function(){
        console.log(this.id);
    }
}

employee.greet(); 

// Note here
employee = {
    id:1,
    greet : function(){
        setTimeout(function(){
            console.log(this.id); // now this is not associated with outer function but inner funtion
        },1000);
    }
}

employee.greet();

// // Note here

employee = {
    id:1,
    greet : function(){
        var self = this; // giving the reference of this to self variable
        setTimeout(function(){
            console.log(self.id);
        },1000);
    }
}

employee.greet();

// // Arrow function does not have its own bindings to this or super, and should not be used as methods.

var emp = {
    id:1,
    greet : function(){
        setTimeout(()=>{console.log(this.id)},1000);
    }
}

emp.greet();


// Default parameters

let getValue = function(value){
    console.log(value);
}

getValue();
                   // Default parameter
getValue = function(value=10){
    console.log(value);
}
getValue();
getValue(20);
                    // Default Parameters
getValue = function(value =10, bonus =20){
    console.log(value,bonus);
}

getValue();
getValue(undefined,34);  // output 10 34

getValue(32,undefined); // 32  20



// Rest Operator in ES6 (Rest parameter represents infinite arguments as an array)
                                        
                                     // this is rest operator, it is declared during function declaration   
let displayColor = function(message, ...colors){
    console.log(message);
    console.log(arguments.length);
    for(let i in colors){
        console.log(colors[i]);
    }
}
 
let message = "Here are the list of colors:";
// displayColor(message,'red');
// displayColor(message,'red','yellow');


// Spread Operators in ES6 (This operator takes the array and splits it into individual elements)

// Spread is opposite to the rest, it takes an array and split into individual arguments

let colorArray = ['Orange','Yellow','Indigo'];

displayColor(message,...colorArray)
                       // this is a spread operator, it is given during function call



// Destructuring the array

let emp = ['varun','sohan','mohan'];

let[emp1,emp2,emp3,emp4]= emp;

console.log(emp1);
console.log(emp2);
console.log(emp3);  
console.log(emp4);

let name = ['varun','pratap','singh'];

let [,,last_name]= name;

console.log(last_name);

let [fname,...lname]= name;
console.log(fname);
console.log(lname);



// Destructuring the objects

let person = {
    fname:'Rahul',
    lname:'Yadav',
    age:'19'
 }

let {fname,lname,age}= person;

console.log(fname);
console.log(lname);
console.log(age);


// for of loop  (It is used to loop over iterables)

let colors = ['red','blue','green'];

for(let i in colors){
    console.log(colors[i]);
}
 
for(let color of colors){
    console.log(color);
}


let  string = "Hey how are you";

for(s of string){
    console.log(s);
}


// Class

// Classes are the functions but unlike functions classes are not hoisted


class Person{

    // type 1 method -> constructor
    constructor(name){
        this.name = name;
        console.log(this.name+ " constructor");

    }

    // type 2 method -> static method
    static staticMethod(){
        console.log("Static Method");
    }

    // type 3 method -> prototype method

    greetPerson(){
        console.log("Welcome "+this.name);
    }

}

// Constructor method is called automatically when an object of class is created
let p = new Person("Varun");
// static method can be called without the refrence of an object , just by using class name

Person.staticMethod();
p.greetPerson();



// Class Inheritance


class A{
    constructor(){
        console.log("Constructor class A");
    }
}

class B extends A{

}

let b = new B();  // If there is no constructor in the derived class, automatically consturctor of parent class will be called

class person {
    constructor(name){
        console.log("Constructor base "+name );
    }

    getID(){
        return 10;
    }
}

class employee extends person{
    constructor(name){

        super(name); // need to explicitely called parent constructor using super (super means parent)
        console.log("Constructor derived "+ name);
        
    }

    getID(){
        return 50;
    }

    ggetID(){
        return super.getID();
    }
}

let e = new employee("Varun"); // If there is a constructor in the derived class then 
// derived class constructor will be called but before leaving derived class
// constructor we need to call parent class constructor using super(), super means
// super class (i.e parent class)

console.log(e.getID()); // 50

let p = new person();
console.log(p.getID()) // 10

console.log(e.ggetID()); // 10



// Primitive data types are passed by value whereas objects and arrays are passed by reference.

// forEach() Method

var arr = [1,2,3,4,5];

arr.forEach(function(element,index,ar){
    console.log(element,index,ar);
});



// Class

class Human {
    constructor(){
        this.gender = "Male";
    }

    printGender(){
        console.log(this.gender);
    }
}
class Person extends Human{
    constructor(){
        super();
        this.name="Varun";
    }

    printName(){
        console.log(this.name);
    }
}

var p = new Person();

p.printName();
p.printGender();



// Modern Syntax of classes without Constructor in the class and with calling super in inherited class

class Human{
    gender ="Male";
    printGender = ()=> console.log(this.gender);
}

class Person extends Human{

    name = "Varun";
    printName = () => console.log(this.name);
}

const p = new Person();

p.printGender();
p.printName();




// forEach Loop

// Accepts the callback function. Calls the function once per element in the array
const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function(n){

    console.log(n*n);
});



// Map 

// Creates a new array with the results of calling a callback functing on every element in the array

const arr = [1,2,3,4,5];

const new_arr = arr.map(function(n){
    return n*2;
});

console.log(new_arr);

 const even = arr.map(function(n){
    if(n%2==0){
        return n;
    }
 })

 console.log(even);

 const obj = arr.map(function(n){

    return (
    {
        value: n,
        IsEven: n%2===0
    })
 });

 console.log(obj);

 // Note: Original Object remains Unchanged



 // Arrow function

 // Syntactically compact alternative to a regular function expressing.

 const square = x => x*x;
 console.log(square(7));


 const mul = (x,y) => x*y;
 console.log(mul(2,4));

 const add = (x,y)=>{
    console.log(`Addition of the ${x} and ${y} is`);
    return x+y;
 }

 console.log(add(7,8));

 const arr = [1,2,3,4,5];
 const new_arr = arr.map(n => n*2);
 console.log(new_arr);


var parityList = arr.map(function(n){
    if(n%2===0) return 'Even';
    else
     return 'Odd';
 })
console.log(parityList);

// Now Converting obove function to Arrow Function
parityList = arr.map(n => n%2===0?'Even':'Odd');
console.log(parityList);



// Find() Method

// Returns the value of the first element in the array that satisfies the provided testing function

var movies = ['The Shawshank Redemption','Forrest Gump','Schindler List','The Godfather','The Green Mile'];

var res = movies.find(el => el.includes('Green'));
console.log(res);

movies = ["The fantastic Mr. fox",
          "Mr. and Mrs. Smith",
          "Mrs. Doubtfire",
          "Mr. Deeds"];

var movie = movies.find(movie => movie.includes("Mrs"));

console.log(movie);

movie = movies.find(movie => movie.indexOf('Mrs')===0);
console.log(movie);


const books = [
                {
                    title:"Good Omens",
                    author:['Terry Protchett','Neil Gaimann'],
                    rating: 4.25
                },
                {
                    title:'Bone:The complete Edition',
                    author:['Jeff Smitch'],
                    rating:4.42
                },
                {
                    title:'American Gods',
                    author:['Neil Gaimann'],
                    rating:4.11
                },
                {
                    title:'A gentle in Moscow',
                    author:['Amar Towles'],
                    rating:4.36
                }
            ]

const goodBook = books.find(b => b.rating >= 4.3);
console.log(goodBook.author);

const neil_book = books.find(b=> b.author.includes('Neil Gaimann'));

console.log(neil_book.title);



// filter() Method

// Creates a new array with all elements that pass the test implemented by the provided function

const arr = [1,2,3,4,5,6,7,8,9];

const even = arr.filter(n => n%2===0);

console.log(even);

const odd = arr.filter(n=>n%2===1);
console.log(odd);

var rem_books = books.filter(b=> b.rating > 4.3);

console.log(rem_books);

rem_books = books.filter(b=> b.author.includes('Neil Gaimann'));
console.log(rem_books);


// Every
// Tests whether all the elements in the array pass the provided function. It returns a boolean value
const words = ['dog','dig','log','bag','wag'];

let res = words.every(w => w.length ===3);
console.log(res);

res = words.every(w => w[0]==='d');
console.log(res);

res = words.every(w => {
    let last_word = w[w.length-1];
    return last_word === 'g'
});

console.log(res);


// Some 
// Similar to the every, but return true if ANY of the array elements pass the test function

const words = ['dog','dig','log','bag','wag'];

let res = words.some(w => w.length ===3);
console.log(res);

res = words.some(w => w[0]==='d');
console.log(res);

res = words.some(w => {
    let last_word = w[w.length-1];
    return last_word === 'g'
});

console.log(res);


const price = [400.50,3000,99.99,35.99,12.00,9500];

price1 = price.slice();
price2 = price.slice();
price3 = price.slice();

price1.sort();
price2.sort((a,b)=>a-b);
price3.sort((a,b)=>b-a);

console.log(price1);
console.log(price2);
console.log(price3);

const books = [
                {
                    title:"Good Omens",
                    author:['Terry Protchett','Neil Gaimann'],
                    rating: 4.25
                },
                {
                    title:'Bone:The complete Edition',
                    author:['Jeff Smitch'],
                    rating:4.42
                },
                {
                    title:'American Gods',
                    author:['Neil Gaimann'],
                    rating:4.11
                },
                {
                    title:'A gentle in Moscow',
                    author:['Amar Towles'],
                    rating:4.36
                }
                ]
            

books.sort((a,b) => a.rating - b.rating);
console.log(books);



// Reduce() Method

// Executes a reducer function on each element of the array,
// resulting in a single value

const nums = [1,2,3,4];

const product = nums.reduce((total,curr) => total*curr);
console.log(product);

let grades = [89,96,58,77,62,93,81,99,73];

const topgrade = grades.reduce((max,currVal) => Math.max(max,currVal));
console.log(topgrade);

const votes = ['y','y','n','y','n','y','n','n','n','y','y'];

const ans = votes.reduce((tally,val)=>{
    if(tally[val])
        tally[val]++;
    else
        tally[val]=1;

    return tally;
},{})

console.log(ans);


const arr = [45,35,90,67];

console.log(Math.max(...arr));

const nums1 = [1,2,3,4];
const nums2= [5,6,7];

console.log([...nums1,...nums2,7,8,9]);


function sumAll(){
    let sum=0;

    for(let i=0;i<arguments.length;i++){
        sum+= arguments[i];
    }

    return sum;
}


console.log(sumAll(1,2,3,4));


// rest operator
function sumAll(...arr){
    // let sum=0;

    // for(let i of arr) sum+=i;

    //     return sum;

    return arr.reduce((acc,curr)=> acc+curr);
}

console.log(sumAll(1,2,3,4,5,6));

// How it works with arrow function

*/

const addAll = (...nums)=> nums.reduce((acc,curr)=> acc+curr);

console.log(addAll(1,2,3,4,5,6));
