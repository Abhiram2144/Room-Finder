const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(process.env.PORT,(req,res)=>{
    console.log("Server is running on port 3000");
    mongoose.connect(process.env.MONGO_URI).then("Connected to database").catch("Error in connecting to database");
});