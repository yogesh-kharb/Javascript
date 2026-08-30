// singleton
// if we make a object using construction then it is made singleton
// if we declare as object litrals then it is not singleton
// it can have instances in second case

// Object.create() // it is object method

const mySym = Symbol("key1");

// object literal method is below 

const JsUser = {
    name : "Hitesh",
    age : 18,
    location: "Hisar",
    // using symbol as a key is using a []
    [mySym] : "mykey1",
    email : "yogesh@google.com",
    "full name": "Yogesh Kumar", 
    isLoggedIn: false,
    lastLoginDays : ["Monday" , "Saturday"]
}; 

// accessing the object
console.log(JsUser.email); // no need to apply ""

console.log(JsUser["email"]);

// benefit of second method is when we have a key with a space
// in between then we will need to apply [""]

// changing the value of the object's values
// overwriting and freezing can be done

JsUser.email = "hitesh"
// Object.freeze (JsUser);
console.table(JsUser)

JsUser.email = "dhanno"
console.table(JsUser)


// now we will add functions to a object

JsUser.greeting = function(){
    console.log("Hello JS user , ");
}
console.log(JsUser.greeting) // we will get undefined due to scope
// of variable

console.log(JsUser.greeting()) // we will get an error
// reason is that we freezed it but now let us comment it
// finally we got [function (anonymous)] using this way and in next 
// line we got the "Hello JS user , "


// now see a one more function
JsUser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`);
};

console.log(JsUser.greeting2())


// we will access most of the values using the .
