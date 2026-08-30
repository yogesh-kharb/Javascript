// iife = immediately invoked expression functions

(function chai(){
    console.log('DB CONNECTED');
})();

// chai() // instad of this apply a parenthesis to the function 

// ()() to stop the pollution to global scope we use iife

((dhanno) => {
    console.log(`DB CONNECTED 2 ${dhanno}`);
})("Jhandu");

// problem is that we invoked a function so that we need a semicolon at the back of the iife so that we can stop the scope


// iife can be named and without name
// basicaly the first function chai is a named iife
// while the second one(where we are printing jhandu using dhanno) is a un named