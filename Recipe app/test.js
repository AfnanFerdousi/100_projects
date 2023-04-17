let http=require('http');
let server=http.createServer((req,res)=>{
    res.end('prokash sarker');
});
server.listen(3000);
console.log('success');
