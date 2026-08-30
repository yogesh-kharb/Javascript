
// objects and arrays both can be destructured 

const course = {
    coursename : "js in hindi",
    price : "free",
    courseInstructor: "hitesh"
}

course.conurseInstructor

const {courseInstructor} = course

// after this if we write the courseInstructor then it will automatically understand the coorect one

console.log(courseInstructor)

const {courseInstructor: inst} = course
// after this now we can use the word inst for 
console.log(inst)

// this is used in react language like the following
// this is because we have to write props. before every name
// which is messy so we use destrucuting to avoid it


// api means apna kam kisi aur ke sir pe dal dena

// initially xml was used for this 
// now we use json

// if we write {} this bracket itself intiallise the json which is also an object

// {
//     "name" : "hitesh";
//     "courseName" : "js in hindi";
//     price": "free";

// }

// api also can be in array format

[
    {},
    {},
    {},
    {}
]

// visit randomuser.me  and json formatter