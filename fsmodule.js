const fs = require('fs');

// fs.readFile('file1.txt', 'utf-8', (err, data) => {
//     //err : null, data will be printed from file as present
//     console.log(err, data);
// })

//This is printed first as No Sync function is used and Node Js works on non blocking nature
// console.log('FS Module Completed')

// fs.readFile('fileNotExist.txt', 'utf8', (err, data) => {
//     //err will be printed as no file is present
//     console.log(err, data);
// })

//readFileSync will block the thread here if encoding is not mentioned then we need to use toString to get data in correct form
// const a = fs.readFileSync('file1.txt','utf-8')
// console.log(a)

// const a = fs.readFileSync('file1.txt').toString()
// console.log(a)

// fs.writeFile('file2.txt','This is an Example for fsWriteFile',()=>{
//     console.log('Content Written to File')
// })


fs.writeFileSync('file2.txt','This is an Example for fsWriteFileSync')
