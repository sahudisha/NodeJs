const os = require('os');
//This import can be used for os info

console.log(os.freemem()); // It gives total free memory available
console.log(os.homedir()); // It gives home directory 
console.log(os.hostname()); // It gives host name of the system
console.log(os.loadavg());
console.log(os.machine());
console.log(os.platform());
console.log(os.release());
// console.log(os.networkInterfaces())

// 1391304704
// C:\Users\arune
// ARUNESH-PC
// [ 0, 0, 0 ]
// x86_64
// win32
// 10.0.26100