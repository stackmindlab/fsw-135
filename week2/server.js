const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");


const PORT = 5500;


//Middleware
app.use(express.json());
app.use(morgan("dev"));


//Connect to DB
mongoose.connect(
  "mongodb://localhost:27017/",
  {
    useNewUrlParser: true,
    seUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },

  () => console.log("Connected to the DB")
);


//routes
app.get("/", (req, res) => {
  res.send("Good Morning, Dave!");
});

//Error-handler
app.use((err, req, res, next) => {
  console.log(err);
});

//Basic Start-up logic
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

//app.listen(5500, () => {
//console.log("The App is listening on port 5500");
//});
