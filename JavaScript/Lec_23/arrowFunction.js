// arrow function and this keyword
// this refer to the current context
const user = {
    username : 'Yogesh',
    price : 999,
    welcomeMessage : function(){
        console.log(`Hello ${this.username}, \nwelcome to website.`);
        console.log(this)

    }

}

// user.welcomeMessage()

// user.username = "Dhanno"
// using this we changed the context i.e., the value of the username will be changed
// user.welcomeMessage()

// console.log(this) // output is same as the inside ocnsole.log
// but the wonder takes place when we try to do console.log witout
// changing the context 


// but browser me console.log(this) ko run karte hai to we get
// the window as object 
// the reason is becase we use this object the most number of
// time that's why it along with the other objects are shown
// because they come uder the context



// function chai(){
//     let username = 'Hitesh'
//     console.log(this.username) // this 'this'
//     //  can not work like this in objects
// }
// chai()



// const chai = function(){
//     let username = 'Hitesh'
//     console.log(this.username) // this 'this'
//     //  can not work like this in objects
// }
// chai() // undefined


// now let us see the arrow function
const chai = () => {
    let username = 'Hitesh'
    console.log(this.username) // this 'this'
    //  can not work like this in objects
}
chai() // undefined


// let us go in details in arrow function

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
console.log(addTwo(3 , 4));

// implicit return use of arrow function

const addTwo = (num1 , num2) => (num1 + num2)
// explicit return : if we use curly braces then we need to use return statement
// implicit return : but if we need to use the ()  then no need to do return statement


// returnning an object

const addTree = (num1 , num2) => ({username: 'hitesh'})



const myArray = [2 , 34 ,245 , 45 , 645 , 432];
myArray.forEach(function (){}) // correct syntax or  more ways



