const express = require('express'); //install express
const server = express();           //instance of express

const PORT = process.env.PORT ||3000 //set up port
// root path get request and response
// server.get('/', (req, res)=>{


// })
server.listen(PORT,()=> console.log(`Server running at local host ${PORT} ! `))   //check port