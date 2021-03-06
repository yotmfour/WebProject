//make all config file fro DB private
require("dotenv").config();

const express = require("express");

//Set up express app
const app = express();

//Imported router from user router
const userRouter = require("./api/users/user.router");

//Routes for API
app.use(express.json());
app.use("/api/users", userRouter);

//Start server
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});


