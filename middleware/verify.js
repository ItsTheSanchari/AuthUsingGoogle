require('dotenv').config()
const clientId = process.env.clientId
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(clientId);
exports.verify = (req,res,next) => {
    const data = verifyToken()
}
verifyToken = () => {
    
}