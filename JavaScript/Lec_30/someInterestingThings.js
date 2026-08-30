// const arr = ['js' , 'ruby' , 'java' , 'python' , 'cpp'];

// const values = arr.forEach((item) => {
//     console.log(item);
//     return item
// });

// console.log(values); // we get undefined

// for each can not return 



const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// // nums.filter((num) => {
// //     num > 4;
// // })

// // filter also takes a callback
// // this returns the values 
// // so there is no significance without storing it


// const newNums = nums.filter((num) => {
//     return num > 4;
// })

// // const newNums = num.filter((num) => (num > 4))
// console.log(newNums)

// // but this gives an empty array


// if we want to use the foreach loop only

// const newNums = [];
// nums.forEach((num) =>{
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);



const books = [
    {title: 'Book1' , genre : 'Fiction' , publish: 1981 , edition: 2004},
    {title: 'Book1' , genre : 'Non-Fiction' , publish: 1992 , edition: 2008},
    {title: 'Book2' , genre : 'History' , publish: 1999 , edition: 2007},
    {title: 'Book3' , genre : 'Non-Fiction' , publish: 1989 , edition: 2010},
    {title: 'Book4' , genre : 'Science' , publish: 2009 , edition: 2014},
    {title: 'Book5' , genre : 'Fiction' , publish: 1987 , edition: 2010},
    {title: 'Book6' , genre : 'History' , publish: 2009 , edition: 2014},
    {title: 'Book7' , genre : 'Horror' , publish: 1986 , edition: 1996}
];

const userBooks = books.filter((bk) =>{
    // user wants the books with genre history
    return bk.genre == 'History';
});

// console.log(userBooks);


const after1990 = books.filter((bk) =>{
    return (bk.publish >= 1990 && bk.genre == 'History');
});
// but we get the error

console.log(after1990)