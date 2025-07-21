const http=require('http');
const PORT=3000;

const server=http.createServer((req,res)=>{
    console.log("Request received");
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("hello from node js server");
})

server.listen(PORT,()=>{
        console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Open your web browser and go to http://localhost:3000/ to see the response.');
    console.log('You can also use the HTML client provided to interact with it.');
});