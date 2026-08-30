// const num = [1 , 2 , 3];

// const myTotal = num.reduce(function (acc , currval)  {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval;
// } , 0);
// now let us try it using the arrow function


// const myTotal = nums.reduce(  (acc , curr) => acc + curr , 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName : 'js course',
        price: 2999
    },
    {
        itemName : 'python',
        price: 999
    },
    {
        itemName : 'mobile',
        price: 5999
    },
    {
        itemName : 'data scientist',
        price: 12999
    }
]


const pricestopay = shoppingCart.reduce((acc , item) => (acc + item.price) , 0)
console.log(pricestopay)
