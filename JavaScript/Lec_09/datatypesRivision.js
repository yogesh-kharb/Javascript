// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


// reference (non primitive)

// Array , objects , functions


// Ques : is js a dynamically typed language or statically typed language ?


/*

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/


// note that if we want to use the bigInt datatype then write n at the n of the number

// Object is like a dictioary of python
let myObj = {
    "Name" : "Dhanno", 
    "Age" : 9 ,
    "Birth" : 2017 ,
    "Death" : "21 July 2026"
}
console.table([myObj])


const myFunc = function(){
    console.log("Hello World")
}

// note agar ham BigInt ka typeof se print karyange then we will get undefined

// datatype of all the non primitive is Function and the datatype of function is called as object function