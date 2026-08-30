console.log(Math);

console.log(Math.abs(-1234234));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));


console.log(Math.min(4 , 3 ,2 , 234));
console.log(Math.max(4 , 3 ,2 , 234));

 

// math.random

console.log(Math.random());
// range between 0 , 1 including both

// if we want to find the value in the range 1 , 10
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10)) + 1);


const mini = 10
const maxi = 20

console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini)
// here we generalize this formula to find the random number between any 2 numbers