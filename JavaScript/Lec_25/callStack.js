// there is a topic in js which is called javascript exectution contet
//  first of all global execution context (in all cases)
/*
and hence this context is refered to 'this' statement
and the value of global this in browser is windows

execution context : 3 types 
first one is global
second one is functional 
third one is eval execution context which is basically a global
and is included in mongodb kind of things

*/

/*
    memory creation phase also called creation phase : memory allocation is done
    execution phase : execution function is done
*/

let val1 = 10
let val2 = 5
function addValue(num1 , num2){
    let total = num1 + num2
    return total
}
let res1 = addValue(val1 , val2);

let res2 = addValue(10 , 2);


// global execution - > memory phase(memory allocation to variables and undefined is stored in them) -> execution is done
/*

global execution - > this statement


memory phase : =>
    val1 = undefined
    val2 = undefined
    addValue = definition
    res1 = undefined
    res2 = undefined


execution phase
    val1 = 10
    val2 = 5
    addValue =  [new variable environment + execution context]
                    |
                    |-----> memory phase
                    |           val1 = undefined
                    |           val2 = undefined
                    |           total = undefined
                    |
                    |-----> execution context
                                num1 = 10
                                num2 = 5
                                total = 15 ---> returned to global exectution context

                    now the box of new environment variable and execution context is deleted


    res1 = 15
    res2 = 15 same function call

*/


// now let us discuss the call stack 

/*
call stack 

    [one()            ]
    [two()            ]
    [three()          ]
    [global execution ]

    use lifo

*/
// now let us see the source of the browser
