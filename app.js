require("dotenv").config();
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;
const clientId = process.env.clientId
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(clientId);
//middleware
app.set('view engine','ejs')
app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res,next)=> {
    console.log('client id',clientId)
    res.render('index',{
        clientId:clientId,

    })
})
app.post('/login',(req,res,next) => {
    console.log('client id',req.body)
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: clientId,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log('payload',payload)
      }
      verify().then(()=> {
          console.log('verified')
      }).catch(console.error);
})
app.listen(port,() => {
    console.log('server running on ',port)
})