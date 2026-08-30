const score = 400;
console.log(score);
// prints : 400


const balance = new Number(100);

console.log(balance) ;
// prints : [Number: 100]

// both are considered as numbres  but the lower one is explicitly defining its datatype that's why it is shown

console.log(balance.toString().length);

console.log(balance.toFixed(2)) // set decimal
// use this specially in case of the ecommorce


const n1 = 23.8966342

console.log(n1.toPrecision(3))
// note that this method returs a string 
// if we give any value lets's suppose we give 3 then it round off upto 3 digits from starting if decimal come in first 3 then take it or leave it
// examples : 123.4453 : 3 : 123
// examples : 123.9453 : 3 : 124

// examples : 21.31 : 3 : 21.3
// examples : 21.388 : 3 : 21.4

// but if we set it to less than the no of digits before decimal then it gives the output in the exponential

const hundreds = 100000000
console.log(hundreds.toLocaleString());
// ye method comma's lagate hai 3 decimal ke bad by default 
// if we want to set it to indian representation then write this in bracket : 'en-IN' means indian englis

console.log(hundreds.toLocaleString('en-IN'))

