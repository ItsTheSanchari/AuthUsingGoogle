require('dotenv').config()
const clientId = process.env.clientId
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(clientId);
exports.verify = async (req,res,next) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: clientId,
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
      if(payload) {
          return next()
      }
      return res.status(401).json({
        errors: 'get lost',
      })
}
