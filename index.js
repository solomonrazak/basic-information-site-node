// we are creating a web server with node to load pages unto the DOM.

const path = require('path');
const fs = require('fs');
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if(err)throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
        })
    }

    if(req.url === "/about"){
        fs.readFile(path.join(__dirname, 'about.html'), (err, content) => {
            if(err)throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
        })
    }

    if(req.url === "/contact_me"){
        fs.readFile(path.join(__dirname, 'contact_me.html'), (err, content) => {
            if(err)throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
        })
    }
})

const PORT = process.env.PORT || 8080;

server.listen(8080, () => console.log("server running"))