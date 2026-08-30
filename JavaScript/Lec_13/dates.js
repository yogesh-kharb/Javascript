// let myDate = new Date()
// console.log(typeof myDate) // object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

/*
normal printing :              2026-08-20T10:01:56.004Z
using toString :               Thu Aug 20 2026 15:31:56 GMT+0530 (India Standard Time)
using toDateString :           Thu Aug 20 2026
using toISOString :            2026-08-20T10:01:56.004Z
using toJSON :                 2026-08-20T10:01:56.004Z
using toLocaleDateString :     8/20/2026
using toLocalestring :         8/20/2026, 3:31:56 PM

*/


let myCreatedDate = new Date(2026 , 6 , 21 , 3)
// note that write (month - 1) due to zero based indexing

let d1 = new Date("2026-07-21") // yyyy-mm-dd
let d2 = new Date("07-21-2026") // mm-dd-yyyy
console.log("Dhanno died on :" , myCreatedDate.toString())
console.log("Dhanno died on :" , d1.toString())
console.log("Dhanno died on :" , d2.toString())


// timestamps 

let myTimeStamp = Date.now();
console.log(myCreatedDate.getTime()); // gives the milisecond of time
console.log(Math.floor(Date.now() / 1000));


// some more methods will be discussed here

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getFullYear())


// one more thing that if we want to print the date into
// our format then we can use `${}` this format i.e., string
// in tuputlation

newDate.toLocaleString('default' , {
    weekday: "long",
    
})