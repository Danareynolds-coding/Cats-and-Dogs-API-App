const express = require('express'); //install express
const server = express();           //instance of express

const PORT = process.env.PORT ||3000 //set up port

 
 //http:localhost3000/breeds key= live_WJtegMA39GHMi9CKUyjlG4DBo9LnhF2dVsQtzUotpuw9yzAUjqVF10Q6scTXpG3F'

// root path get request and response -test 3000 works
//  server.get('/', (req, res)=>{
//   res.end('My App')
//  })

server.listen(PORT,()=> console.log(`Server running at local host ${PORT} ! `))   //check port