const promise1 = new Promise(function(resolve , reject){
    // do an async task
    // db calls , cryptography , network related calls
    setTimeout(function(){
        console.log('Async task is complete.');
        resolve();
    } , 1000);
});

// we need to consume promise
// so we need to connect promise and resolve and reject
promise1.then(function(){
    console.log("Promise consumed");
});



new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    } , 2000);
}).then(function(){
    console.log("Async 2 resolved");
});

const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    } , 1000);
});
promise3.then(function(user){
    console.table(user);
});

const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "hitest" , password: "123"});
        }
        else{
            reject("ERROR: Something went wrong.");
        }
    } , 1000);
});


const username = promise4.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("Finally , the promise is either resolved or rejected."));


// this is wrong
// console.log(username); // this gives error



const promise5 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'javascript' , password: '1234'})
        }
        else{
            reject("ERROR: JS went wrong");
        }
    } , 1000);
});


async function consumePromiseFive(){
    try{
        const response = await promise5;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();



// async function getAllUsers(){
//     try{
//         const response = fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.table(data);
//     }
//     catch(error){
//         console.log("Error : " + error);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.table(data);
})
.catch((error) => {
    console.log(error);
})