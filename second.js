Arunesh = {
    Name:'Arunesh',
    Age:34,
    Developer : true
}

module.exports = Arunesh;

// In Node.js, every module is wrapped in a Module Wrapper Function before execution. This mechanism ensures encapsulation, provides useful variables, and optimizes module handling. The wrapper function looks like this:

// (function (exports, require, module, __filename, __dirname) {
// // Module code lives here
// console.log(exports, require, module, __filename, __dirname)
// });