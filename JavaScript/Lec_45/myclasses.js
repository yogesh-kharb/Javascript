// all the js we are using is after ES 6

// M1
class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}
const chai = new User('chai' , 'chai@gmail.com' , "123");


console.log(chai.encryptPassword());

// M2

// we can do it via the below method (acutally the below method is used behind the scene even if we write the above method)
function User(username , password , email){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return '${this.password}abc';
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const tea = new User('tea' , 'tea@gmail.com' , '123');
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

