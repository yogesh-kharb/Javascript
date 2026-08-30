const name = "Yogesh"
const repoCount = 1
console.log(name + repoCount + " Value")

console.log(`My name is ${name} and i have ${repoCount} repository on github.`)

const gameName = new String('yogesh-hmd')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('d'))


let s = "    yogesh    "
console.log(s.trim())
// also we can use trim at end and trim at start


s = "d-h-a-n-n-o"
console.log(s.replace('-' , ''))
console.log(s.includes('d'));
console.log(s.split('-'))