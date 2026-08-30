let score = "342";
console.log(typeof score)
let val = Number(score)
console.log(typeof val)


// !!! Alert
score = "23df"
console.log(typeof score)
val = Number(score)
console.log(val)
console.log(typeof val)

// one more thing
let x = null
console.log(x)
let numx = Number(x)
console.log(numx) // important this gives 0 which can be hazardous in some cases when the type of data is strictly to eb same


// "33" => 33
// "3a" => NaN
// true => 1 , false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// empty string , 0 , empty gives false on conversion to  boolean
// rest of them gives true




// also number can be converted to string 


// some more things are possible like object conversions
