const http = require('http');
const fs = require('fs')
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //This will send the content as text/html formal
    res.setHeader('Content-Type', 'text/html');
    // Print the requested URL (and method) to the console
    //console.log(req.url)
    if (req.url == '/') {
        const readFile = fs.readFileSync('index.html')
        res.end(readFile.toString());
    }
    else if (req.url == '/about') {
        res.end('<h2>This is About Page</h2>')
    }
    else {
        res.statusCode = 404;
        res.end('<h2>Page Not Found</h2>')
    }
})

server.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})