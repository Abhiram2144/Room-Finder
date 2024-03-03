const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: '*'
}));

app.listen(8000,()=>{
    console.log("Server running on port 8000");
    mongoose.connect(`mongodb+srv://abhi:abhi@cluster0.dkuvpq3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{
        console.log("Connected to database!");
    }
    );
})

app.use("/user", userRouter);

app.use("/", (req,res)=>{
    res.send("Server is running");
});