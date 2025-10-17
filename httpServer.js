const http = require('http');

//Either run at assign PORT or run at 3000
const port =  process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Print the requested URL (and method) to the console
    //console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2> This is an HTTP Server Created With Node Js</h2>')
})

server.listen(port, ()=>{
    console.log(`Server listening to port ${port}`)
})