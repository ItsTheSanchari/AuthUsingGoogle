const express = require('express')
const app = express()

const port = process.env.port || 3000
//middleware
app.set('view engine','ejs')
app.get('/',(req,res,next)=> {
    res.send('index')
})

app.listen(port,() => {
    console.log('server running on ',port)
})