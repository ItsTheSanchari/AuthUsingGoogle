require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const clientId = process.env.clientId;
const { OAuth2Client } = require("google-auth-library");
const { verify } = require("./middleware/verify");
const client = new OAuth2Client(clientId);
//middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res, next) => {
  console.log("client id", clientId);
  res.render("index", {
    clientId: clientId,
  });
});
app.post("/login", verify,(req, res, next) => {
  console.log("outside the middleware");
});
app.listen(port, () => {
  console.log("server running on ", port);
});
