// arrays

const myArr = [0 , 1 , 2 , 3 , 4 , 5 , true , 'Yogesh']
// can contain different datatypes

// javascript arrays are resizable

// array elements can not be accessed using arbitrary strings
console.log(myArr[0]) // add the index

// zero based indexing
// make shallow copies of array if we make it copy
// same reference and changed are made in the original arrays

const myHeros = ["shaktiman" , "nagraj"]
const newArr = new Array(1 , 2 , 3 , 4)
// array .length()  to get the length of the array

// console.log(myArray[1]);

// Array methods

// console.log(myArr);
// myArr.push(6)
// console.log(myArr);

// aso a pop method exist in the array

// one unshift operation also exist where we add 1 new element at the start of the array
// while shift operation delete the first element of the array

// boolean functions
// array_name.include(ele_val)
// array_name.index(ele_val) returns the index acc to 0 based
// if ele is absent then return -1
const arr = [1 ,3 , 4 ,6];
const brr = arr.join()
console.log(arr)
console.log(brr)

console.log(typeof arr)
console.log(typeof brr)

// slicing and splicing
console.log("A " , arr);
const a1 = arr.slice(1 , 3);
// arr.slice(a , b) gives from index a to b - 1
console.log(a1);
console.log("B " , arr); // no change in the original array
const a2 = arr.splice(1 , 3);
// arr.splice(a , b) gives from index a to b
console.log(a2);
console.group(a2);
console.group("C " , arr);
// but in splicing the spliced array of the elements is removed 
// from it

