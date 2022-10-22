const names=require('./names')
const sayHi=require('./modl')
const items=require('./alternative')
console.log(items);

sayHi(names.one)
sayHi(names.two)
sayHi('kumar')
sayHi(items.item[0])
sayHi(items.singlePerson.name)

console.log('sumfunc.js not exported through module');
require('./7-sumfunc')