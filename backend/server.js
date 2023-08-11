// Makes available variables in the .env
require('dotenv').config(); 

// Requires Express and Mongoose
const express = require("express")
const mongoose = require("mongoose")

const routes = require('./routes/projects')
const schema = require("./models/messageModel")

const app = express();

app.use(express.json())

app.use((req, res, next)=>{
  console.log(req.path, req.method)
  next()
})

// use the routes exported from 
app.use(routes)

// Connect to the MongoDB database
mongoose.connect(process.env.MONGO)
  .then(()=>{
    
    // Listen for requests on port 4000
    app.listen(process.env.PORT, ()=>{
      console.log('Listening for requests')
    })
  
  })
  .catch((error)=>{
    console.log(error)
    console.log("Connection Failed")
  })


