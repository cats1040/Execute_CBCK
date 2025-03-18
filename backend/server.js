require('dotenv').config(); //to access the .env file

const express = require('express');
const app=express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js")
const businessRoutes = require("./routes/businessRoutes.js")
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const uri = process.env.MONGO_URI;
const uri = "mongodb+srv://test:1234@bolobazaar-cluster.xxc5y.mongodb.net/?retryWrites=true&w=majority&appName=BoloBazaar-Cluster";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongo connection open");
  })
  .catch((err) => {
    console.log("Mongo connection error! " + err);
  });


app.use("/users", userRoutes);
app.use("/businesses", businessRoutes);


const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('HELLO WORLD from SERVER')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})