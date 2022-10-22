const path=require('path')
console.log(path.sep);

const filepath=path.join('content','sub','sam.txt')

console.log(filepath);

const absolute=path.resolve(__dirname,'content','sub')
console.log(absolute);