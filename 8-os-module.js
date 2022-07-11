// built in module

//operating system module
const os = require("os");

//info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
console.log(` the system uptime ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
//
