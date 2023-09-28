const os = require("os");

// User Info

const user = os.userInfo();
console.log(user);

// System uptime
console.log(os.uptime());

// Info about system

const currentOs = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
};

console.log(currentOs);
