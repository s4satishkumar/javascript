const http= require('http');

const server= http.createServer((req,res)=>{ // request and response object

// console.log('request made');
// console.log(req);
console.log(req.url, req.method);

});

server.listen(3000, 'localhost', ()=> {
    console.log('listening for request on port 3000')
});