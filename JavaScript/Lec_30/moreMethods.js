
// map function for arrays
const num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];

// const newNum = num.map((number) => {
//     return number += 10;
// })

// console.log(num)
// console.log(newNum)



// chaining in js means 1 ke bad dusra function lagau

const newNums = num
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNums);


