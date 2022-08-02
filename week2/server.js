const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = 9000;

//Middleware (for every request) //
app.use(express.json());
app.use(morgan("dev"));

//Connect to DB //

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/InventorySchema"); 
  console.log("Connected to the DB");
}

//routes //
app.use("/inventories", require("./routes/inventoryRouter.js"));

//Error-handler //
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

//Basic Start-up logic //
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

//app.listen(5500, () => {
//console.log("The App is listening on port 5500");
//});

