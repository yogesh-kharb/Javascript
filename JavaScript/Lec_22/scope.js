function one(){
    const username = 'hitesh'
    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website) // website will give error because 
    // into one outside two we can not access variable of 2
    // chota bade se icecream le sakta hai
    // leking bada chote se icecream nahi le sakta
    two()
}

one()

// this is almost similar to closure


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // error 
}
// console.log(username) // error


// ********************* interesting ************************

addone(5)// if we declare this the basic way then we wont get error
function addone(num){ // this is a function basic
    return num + 1; 
}

addTwo(5) // error because the expression function can not 
// be accessed before its declaration


const addTwo = function(num){ // this function is a expression
    return num + 2;
}

// we will study this thing in hoisting