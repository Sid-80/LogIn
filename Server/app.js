const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB = 'mongodb+srv://siddharth:$iddharth@cluster0.gtkkhj7.mongodb.net/DLMS?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log("connected !!");//it works as promises if it works then it reurns connected.
}).catch((err) => { console.log("Not connected !!") })

//middleware = it checks whether the user has logged in correctly or not
const middleWare = (res,req,next) => {
    console.log("middleware !!");
    next(); //redirect to next page
}

app.get('/',(req,res) => {
    res.send("Hello !!");
})
app.get('/home',middleWare,(req,res) => {
    res.send("Lets show the content !!");
})

app.listen(3000,()=>{
    console.log("On, 3000 !!");
})