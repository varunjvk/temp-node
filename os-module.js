const os=require('os')
const user=os.userInfo()
console.log(user);

console.log(`System uptime is ${os.uptime()} second`);

const currentOs={
    name : os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs);