require("dotenv").config();
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;
const clientId = process.env.clientId
//middleware
app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res,next)=> {
    res.render('index',{
        clientId:clientId,

    })
})

app.listen(port,() => {
    console.log('server running on ',port)
})