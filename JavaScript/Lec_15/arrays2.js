const marvel_heros = ["thor" , "ironman" , "spiderman"];
const dc_heros = ["superman" , "flash" , "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// note that dc_heros become an element of the marvel_heros

// console.log(marvel_heros[3][1]);

let all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

// push works on existing array while concat returns a new 
// concatened array

// instead of spread we use a spread operator

const all_new_heros = [...marvel_heros , ...dc_heros]
// spread by  ...
console.log(all_new_heros)


const another_array = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [6 , 7 , [4 , 5]]];

const real_another_array = another_array.flat(Infinity);

// flat operation returns a flatted array in a single concatenated array
// argument is the depth of flatness 
// we can write (Infinity)
console.log(real_another_array)


console.log(Array.isArray("Hitesh"));
// returns false

console.log(Array.from("Hitesh"));
// return an array of its characters as elements

console.log(Array.from({name: "hitesh"}));
// gives an empty array because it can not convert the key value pair to the array


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3));

// returns an array of all the values 


