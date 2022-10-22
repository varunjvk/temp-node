const {readFileSync ,writeFileSync}=require('fs')
console.log('start');
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result.txt',`the result is : ${first}\n ${second}`,{flag:'a'})
//flag : 'a' append
console.log(first);
console.log(second);
console.log('done this task');
console.log('starting the next task');