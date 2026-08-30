// not that i will be writing those only which i dont know and rest of them i will not be writting


// note that we will discuss different data types comparison here
console.log("3" > 1)
// here also the same thing of datatype conversion takes place
// which is then compared after the conversions
console.log("02" > 1)


// now let us compare null with other datatypes

console.log(null > 0)
console.log(null < 0)
console.log(null == 0)
console.log(null === 0)


console.log(null >= 0) 
console.log(null <= 0)
// true here in these 2 above 2 cases
// note that javascript convert null to zero in case of comparison operator and convert it to NaN when it is equality check



// now let us compare undefined

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined === 0)


console.log(undefined >= 0) 
console.log(undefined <= 0)
// here the js convert this one to NaN i think so it is not to be compared and always false


// note that equality check and comparison are 2 different things in javascript


// strict equal means ===  this also check the datatypes also

