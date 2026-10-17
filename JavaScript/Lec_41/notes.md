# JavaScript (Chai aur Code) - Lecture 41 Notes: Promises & Fetch

## 1. Introduction to Promises
In JavaScript, a **Promise** is an object representing the eventual completion or failure of an asynchronous operation. Historically, JavaScript relied heavily on callbacks to handle async tasks (like API requests, reading files, or database queries). However, deep nesting of callbacks led to a structured mess known as **Callback Hell** or the **Pyramid of Doom**. 

Promises provide a cleaner, more readable alternative to handle asynchronous control flow.

---

## 2. Promise States
A promise inherently exists in one of three mutually exclusive states:
* **Pending**: The initial state; the async operation is still processing.
* **Fulfilled (Resolved)**: The operation completed successfully, returning a value.
* **Rejected**: The operation failed, returning an error or reason for failure.

---

## 3. Creating a Promise
A promise is instantiated using the `new Promise()` constructor. It takes an executor function as an argument, which receives two callback functions: `resolve` and `reject`.

### Step 1: Consuming a Promise via `.then()` and `.catch()`
```javascript
const promiseOne = new Promise(function(resolve, reject){
    // Simulate an async task (e.g., DB call, cryptography, network)
    setTimeout(function(){
        console.log('Async task 1 is complete');
        resolve(); // Connects the creation to consumption
    }, 1000);
});

// Consumption
promiseOne.then(function(){
    console.log("Promise consumed successfully!");
});
```

### Step 2: Creating a Promise without storing it in a variable
You can directly chain `.then()` immediately after the definition block:
```javascript
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
});
```

---

## 4. Passing Data through `resolve()`
Any argument or payload passed into `resolve()` is directly accessible within the `.then()` callback function (often an object fetched from a network or database).

```javascript
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // Passing an object back
        resolve({username: "Chai", email: "chai@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user); // Outputs: {username: "Chai", email: "chai@example.com"}
});
```

---

## 5. Handling Errors via `reject()` & Chaining
When something goes wrong, we use `reject()`. To handle specific pieces of returned data or catch subsequent exceptions, we use **Promise Chaining**.

```javascript
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulating condition
        if (!error) {
            resolve({username: "hitesh", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username; // This value is passed down to the next .then()
})
.then((username) => {
    console.log(username); // Outputs: hitesh
})
.catch((error) => {
    console.log(error); // Catches the rejection error message
})
.finally(() => {
    // This block always runs regardless of fulfillment or rejection
    console.log("The promise is either resolved or rejected.");
});
```

---

## 6. Alternative Consumption: `async / await`
Instead of using `.then()` and `.catch()`, you can consume promises cleanly using `async` and `await`. 
* `await` stops execution locally within the async function until the promise settles.
* Because `async/await` doesn't natively intercept rejections like a `.catch()` block does, you must wrap your statements inside a `try...catch` block to avoid unhandled promise rejection crashes.

```javascript
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error); // Logs: ERROR: JS went wrong
    }
}

consumePromiseFive();
```

---

## 7. Real-world API Fetching Matrix

### Method A: Fetching data with `async / await`
```javascript
async function getAllUsers(){
    try {
        const response = await fetch('https://github.com');
        
        // response.json() also takes time and returns a promise! Always await it.
        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers();
```

### Method B: Fetching data with `.then() / .catch()`
```javascript
fetch('https://github.com')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
```

---

## 8. Crucial Interview Conception: How `fetch()` works
A common question in interview settings is: **"If an API request returns a 404 error code, does it trigger a resolve or a reject in `fetch()`?"**

* **Answer:** It triggers a **resolve** (`.then()`). 
* **Reason:** The `fetch()` promise will only reject (`.catch()`) if the browser fails to make the network request entirely (e.g., total network disconnect, DNS lookup failure, or request blocking). A response code of `404` or `500` means the request reached the server and returned a response, so it is evaluated as a successful network completion.

### Under the Hood Architecture of `fetch()`
When a `fetch()` operation initiates, it handles memory allocations through two primary structural vectors:
1. **Web APIs / Node Environment**: Dispatches the network socket configuration.
2. **Data Variables Space**: Reserves runtime memory inside the engine, consisting of two internal tracking arrays/queues:
   * `onFulfilled[]`: Maps out functions connected via `.then()`
   * `onRejected[]`: Maps out functions connected via `.catch()`
