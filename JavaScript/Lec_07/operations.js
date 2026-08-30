// *********************  Operations  ************************

// arithematic operations are very easy that's why we are skipping 

// now let us see how we can join 2 strings using '+'

let str1 = "Hello, ";
let str2 = "Dhapdu";
let str3 = (str1 + str2)
let str4 = "Dhanno";
let str5 = (str1 + str4)
// console.log(str5)
// console.log(str3)


console.log("1" + 2) // => op = 12 string

console.log(1 + "2") // => op = 12 string



console.log("1" + 2 + 3) // note that in this case the output is 123 string

console.log(1 + 2 + "3") // note that here the output is 33 string 

// this means that we are having the left to right operator precedence if the have same priority
// this means first (1 + 2) is processed which is 3 and then 3 + "3" is done which gives the output as "33" string


console.log(true) // give output as true

console.log(+true) // gives output as 1

console.log(-true) // gives output as -1 because once we use an uniray or binary operator with true then it will become the integer

// similar operators are there which i already know so no need to write here in details to waste the time 

