const arr = ['js' , 'ruby' , 'java' , 'python' , 'cpp'];

// for each loop is higher order function
arr.forEach(function (item){
    console.log(item);
}); // it reuqire a call back function in the array

// call back function do not have a name

// we can pass ,index , array list are its capacity


const obj1 = [
    {
        languagename:'js'
    },
    {
        languagename: 'cpp'
    },
    {}
]

obj1.forEach((item) =>{
    console.log(item.languagename); // easier access
});

