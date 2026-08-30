// no of arguments are not fixed as we do not know how many 
// inputs are given

function calculateCartPriceNormal(num1){
    return num1
}

// if we do calculateCartPrice(100 , 200 , 300)
// then 100 is ouput and rest 2 parameters are leaved

// to avoid this we use rest operator (...)

function calculateCartPrice(...num1){
    // return num1
    // but this return an array of num1
    // so instead of returning directly then we will add all
    // values of array and then return
    let sum = 0;
    for(let i = 0 ; i < num1.length ; i ++) {
        sum += num1[i];
    }
    return sum
}
console.log(calculateCartPrice(100 , 200  , 300));


const user = {
    username : "dhanno", 
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

// but if the thing which we are passing is not an object or the
// detail of object which we are refering exists or not in real life

handleObject({
    username: 'jhandu',
    prine : 100
})


const myNewArray = [200 , 400 , 100 , 600];

function returnSecondValue(getArray){
    return getArray[1];
}
