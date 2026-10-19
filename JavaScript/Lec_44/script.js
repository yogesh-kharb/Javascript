/**
 * =========================================================================
 * CHAI AUR CODE - JAVASCRIPT SERIES (HINDI)
 * LECTURE 44: PROMISES IN JAVASCRIPT & FETCH API
 * =========================================================================
 * 
 * Explanation:
 * Promises represent the eventual completion (or failure) of an asynchronous
 * operation and its resulting value. Think of it like ordering Chai—you place 
 * the order (Promise created), wait for it to brew (Pending), and you either 
 * get your Chai (Fulfilled/Resolved) or the machine breaks down (Rejected).
 * 
 * Historically, operations used external libraries like Bluebird or Q. 
 * Modern JavaScript natively handles this. Let's look at 5 different ways 
 * to handle Promises as taught in Lecture 44.
 */

// -------------------------------------------------------------------------
// APPROACH 1: Creating a basic promise and consuming it using .then()
// -------------------------------------------------------------------------
// Step 1: Create the promise instance. It takes a callback with (resolve, reject).
const promiseOne = new Promise(function(resolve, reject) {
    // Simulating an asynchronous task (DB call, cryptography, network req)
    setTimeout(function() {
        console.log('Async task 1 is complete');
        // V.I.P Step: You MUST call resolve() to connect it to the .then() block
        resolve(); 
    }, 1000);
});

// Step 2: Consume the promise
promiseOne.then(function() {
    console.log("Promise 1 consumed successfully.");
});


// -------------------------------------------------------------------------
// APPROACH 2: Consuming a promise directly without storing it in a variable
// -------------------------------------------------------------------------
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 completed");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved.");
});


// -------------------------------------------------------------------------
// APPROACH 3: Passing Data through resolve() to the .then() block
// -------------------------------------------------------------------------
// Often, your async network request returns data. You pass it directly into resolve()
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // Passing an object (or array/string) directly into the resolve function
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    // The data passed into resolve() is automatically caught here as the parameter
    console.log("Promise 3 data received:", user);
});


// -------------------------------------------------------------------------
// APPROACH 4: Error handling with reject() and Promise Chaining (.then().catch().finally())
// -------------------------------------------------------------------------
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false; // Toggle this to true to see how .catch() triggers
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject('ERROR: Something went wrong!');
        }
    }, 1000);
});

// PROMISE CHAINING: Returning a specific value from the first .then() 
// allows you to filter/clean data and pass it into a secondary .then().
promiseFour
    .then((user) => {
        console.log("Promise 4 initial user data:", user);
        return user.username; // This return value gets piped directly into the next .then()
    })
    .then((username) => {
        console.log("Chained .then() received clean username:", username);
    })
    .catch((error) => {
        // Runs cleanly if 'error = true' is handled by reject()
        console.log("Promise 4 Catch block caught:", error);
    })
    .finally(() => {
        // The block that ALWAYS runs, regardless of resolve or reject (good for closing loading states/DB connections)
        console.log("The promise is either resolved or rejected. Done.");
    });


// -------------------------------------------------------------------------
// APPROACH 5: Handling Promises using async/await with try-catch blocks
// -------------------------------------------------------------------------
// async/await is modern syntactic sugar around native promises. It doesn't use .then()
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Simulating a server failure
        if (!error) {
            resolve({ username: "javascript", version: "ES6" });
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

// Since async/await doesn't natively handle exceptions, wrap it in try/catch to prevent terminal crashes
async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Wait until the promise finishes or rejects
        console.log("Promise 5 async/await response:", response);
    } catch (error) {
        console.log("Promise 5 async/await caught an error:", error);
    }
}
consumePromiseFive();


// -------------------------------------------------------------------------
// APPROACH 6: Real-World Use Case — Fetching data from a network API
// -------------------------------------------------------------------------
// Hitesh demonstrates how to fetch from public APIs (like GitHub) using both formats:

// Format A: Using async/await with fetch
async function getAllUsers() {
    try {
        const response = await fetch('https://github.com');
        // IMPORTANT: response.json() also returns a Promise, so you must use 'await' on it!
        const data = await response.json();
        console.log("Async/Await Fetch Data (GitHub followers):", data.followers);
    } catch (error) {
        console.log("Fetch Error:", error);
    }
}
getAllUsers();

// Format B: Same task using the standard .then() mechanism
// Note: In Lecture 44, Hitesh explains that a fetch() request that hits a 404 error 
// still lands in the .then() block, because technically the network request made a round trip successfully!
fetch('https://github.com')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(".then() Fetch Data (GitHub Public Repos):", data.public_repos);
    })
    .catch((error) => {
        console.log("Network level error caught by fetch:", error);
    });
