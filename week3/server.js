const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 

//Connection to Database
main().catch(err => console.log(err));
  async function main() {
      await mongoose.connect('mongodb://localhost:27017/commentsDB');  
  }
console.log("connected to the DB")
// Routes
app.use('/comments', require('./routes/authRouter'))


// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
  console.log('This server is running on Port 9000')
})