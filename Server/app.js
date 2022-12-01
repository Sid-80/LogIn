const express = require('express');
const app = express();

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