// const tinderUser = new Object(); // singleton object


// console.log(tinderUser) // print as an empty object


const tinderUser = {}

// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Dhanno";
tinderUser.isLoggedIn = false;


const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname: {
            // we can do as much as nestings as we require
            firstname : "yogesh",
            lastname : 'kumar'
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

// but there is no guarantee that all of them contains values
// to do it correctly we will do apply a questionmark which says
// if value is given then access else leave

console.log(regularUser?.fullname)
console.log(regularUser?.fullname?.userfullname)
console.log(regularUser?.fullname?.userfullname?.firstname)



// like we merged arrays  , similary we can merge objects

const obj1 = {1: 'a' , 2: 'b'};
const obj2 = {3: 'a' , 4: 'b'};

// const obj3 =  {obj1 , obj2}; // blunder it will do nesting

// const obj3 = Object.assign(obj1 , obj2);
// this do assign the obj2 to obj1
const obj4 = Object.assign({} , obj1 , obj2);
// this assign obj1 , obj2 to {} a new object

// console.log(obj3);
console.log(obj4);

// return same thing but for safety and better practice do use {}

console.log(obj1)


// the above things we will not do this but we will use
// the spread operator

const obj5 = {...obj1 , ...obj2};
console.log(obj5)



const users = [
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 2, 
        email: "i@gmail.com"
    },
    {
        id: 3, 
        email: "j@gmail.com"
    },
]

// access is like users[1].id or users[1].email 



console.log(tinderUser);
console.log(Object.keys(tinderUser)); // we get all the keys as array using this
console.log(Object.values(tinderUser)); // we get all the values as array using this


// some basics properties are also there obj_name.length , 
// values can also be extracted 

// one more interesting function is the 'entries'
// this gives an array of arrays with the key , value pair as a array inside the full array


// note that there are chances of crash if we try to access the value which does not exist
// so we can use the method 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// returns in boolean

