class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const hitesh = new User('hitesh')
// console.log(hitesh.createId());
// this can not be accessed because it is a static method and can not be accessed here

class Teacher extends User{
    constructor(username , email){
        super(username);
        this.email = email;
    }
}


const dhanno = new Teacher('dhanno' , 'd@hanno.com')
dhanno.logMe();

// console.log(dhanno.createId());
// can not be done because static method can not be called by the instances