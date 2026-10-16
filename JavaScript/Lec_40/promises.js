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



newPromise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    } , 2000);
}).then(function(){
    console.log("Async 2 resolved");
});