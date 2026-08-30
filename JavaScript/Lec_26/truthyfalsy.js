const userEmail = [];
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Do not have user email.");
}

// falsey values : 
// false , 0 , -0 , BigINt : 0n , "" , null , undefined , NaN
// rest all  the values are truthy

// some surprising truthy values : 
// "0" , 'false' , " " , [] , {} , empty function : function(){}


// Nullish Coalescing Operator (??) : null undefined

let val1 ;
val1 = 5 ?? 10;
console.log(val1);

val1 = null ?? 10;
console.log(val1);

val1 = undefined ?? 15;
console.log(val1);

val1 = null ?? 10 ?? 15;
console.log(val1);

// first valid value is which is defined and valid

// ternary operator

// condition ? true : false


// switch case

switch(month){
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("march");
        break;
    default :
    console.log("Nothing matched this ");
    break;
}