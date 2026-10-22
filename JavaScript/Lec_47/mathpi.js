// ====== PART 1: Math.PI ki reality check ======

// Kya hum Math.PI ki value ko change kar sakte hain? Let's try:
Math.PI = 5;
console.log(Math.PI); // Output: 3.141592653589793 (Change nahi hua!)

// Aisa kyun hua? Let's check its hidden property descriptor:
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* 
Output:
{
  value: 3.141592653589793,
  writable: false,      <-- Yeh false hai, isliye change nahi ho sakta
  enumerable: false,    <-- Yeh loops mein nahi dikhega
  configurable: false   <-- Ise delete ya redefine nahi kiya ja sakta
}
*/


// ====== PART 2: Hum apna khud ka Object kaise control karein ======

const myNewObject = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nahi bani");
    }
}

// Hamare object ka default descriptor check karte hain:
console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));
/*
Output:
{ value: 'ginger chai', writable: true, enumerable: true, configurable: true }
*/

// Ab hum Hitesh sir ki tarah 'name' property ko freeze (immutable) karenge:
Object.defineProperty(myNewObject, 'name', {
    writable: false,
    enumerable: false // Agar false kar diya toh loops mein 'name' nahi aayega
});

// Test breaking the rules:
myNewObject.name = "Masala Chai"; // Value change karne ki koshish
console.log(myNewObject.name); // Output: ginger chai (Change nahi hua!)


// ====== PART 3: Object par Loop lagana aur hidden properties check karna ======

console.log("\n--- Object Loop Output ---");

for (let [key, value] of Object.entries(myNewObject)) {
    // Ye check isliye lagate hain taaki functions loop mein print na ho jayein
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
/* 
Output:
price : 250
isAvailable : true

(Notice: 'name' print nahi hua kyunki humne enumerable: false kar diya tha!)
*/
