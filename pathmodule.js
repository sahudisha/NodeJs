const path = require('path')

console.log(path.basename('C://TestFolder//index.html'))
console.log(path.dirname('C://TestFolder//index.html'))
console.log(__filename, path.extname(__filename))
console.log(path.join(__dirname, "index.js"))