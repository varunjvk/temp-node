const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our homepage')
    }
    else if(req.url==='/abs'){
        res.end('this is our about page')
    }
    else{
    res.end(`
        <h1>!Oops</h1>
        <p>Page not found</p>
        <a href="/">Back to Home Page</a>
    `)}
})

server.listen(5000)