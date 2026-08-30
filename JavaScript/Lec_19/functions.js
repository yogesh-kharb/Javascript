// function sayMyName(){
//     console.log('Y');
//     console.log('O');
//     console.log('G');
//     console.log('E');
//     console.log('S');
//     console.log('H');
// }

// sayMyName() //calling it

// if we write sayMyName without bracket then it will do nothing

// add 2 no

function add2No(n1 , n2){
    console.log(n1 + n2);
}

add2No(3 , 4);

// problem is when we pass diff datatype to the function then 
// it will do the conversion of datatypes like we have seen


// during the definition of a function when we take the input
// are called as the paramater

// but values passed inside the function while calling it are
// called the arguments


const result = add2No(3 , 5);
console.log("Result: ", result);
//  it will be undefined because nothing is being returned

function add2No2(n1 , n2){
    return n1 + n2;
}
// now if we store the output of a function then it will be a no
// unlike the case of no return giving undefined


function loginUserMessage(username){
    return `${username} just logged in`;
}

const a = loginUserMessage("Yogesh");
console.log(a);
const b = loginUserMessage("Dhanno");
console.log(b);

// but if we do not pass anything as a argument to the function
// then the output is undefined

// better thing

function bulletProofLogin(username){
    if(username === undefined){ // !username can also be used
        console.log("Please enter a valid username");
        return;
        return `${username} just logged in`;
    }
}

const c = bulletProofLogin('dhanno');

// we can also do the following to set default value of a function parameter if it is not given by user

function dhanno(user = "dhannoParty"){
    return(`Hello , ${user}`);
}
