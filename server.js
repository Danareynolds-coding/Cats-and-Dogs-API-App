const express = require('express') //install express
const server = express()   //instance of express
const router = require('./app/routes/router') //install router   
const helmet = require('helmet') //install helmet
const cors = require('cors')  //istall cors
const PORT = process.env.PORT ||3000 //set up port

//set up security so api can through
server.use(helmet.contentSecurityPolicy({
  useDefaults:true,
  crossOriginResourcePolicy:false,
  crossOriginEmbedderPolicy:false,
  directives:{
    "img-src":["'self'", "https: data"],
    "scriptsSrc":["'self'", "cdn.jsdelivr.net"]
  }
})) 
//set up cors and express
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
//setup router localhost:3000=> router.js
server.use('/',router)
server.set('view engine','ejs')  //set up view engine
 //http:localhost3000/breeds key= live_WJtegMA39GHMi9CKUyjlG4DBo9LnhF2dVsQtzUotpuw9yzAUjqVF10Q6scTXpG3F'

// root path get request and response -test 3000 works
//  server.get('/', (req, res)=>{
//   res.end('My App')
//  })

server.listen(PORT,()=> console.log(`Server running at local host ${PORT} ! `))   //check port