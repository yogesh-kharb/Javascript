class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new courses was added by ${this.username}`);
    }
}

const chai = new Teacher('chai' , 'chai@gmail.com' , "123"); // the new keyword is important unless we will get an error
chai.addcourse();


const masalaChai = new User('masalaChai');
// not that the parent have no access to the child class's members but vice a versa is true

// chai instanceof Teacher

console.log(chai instanceof User);
console.log(chai instanceof Teacher);