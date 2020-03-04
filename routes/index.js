var express = require("express");
var router = express.Router();
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

router.post("/api/send", (req, res, next) => {
  console.log(req.body);
  var name = req.body.payload.name;
  var email = req.body.payload.email;
  var message = req.body.payload.message;
  var content = `From: ${name} <br/> email: ${email} <br/> message: ${message} `;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "patrickcorcoran10@gmail.com",
    from: "patrickcorcoran10@gmail.com",
    subject: "Pat Corcoran Portfolio Site Inquiry",
    text: name,
    html: content
  };
  sgMail
    .send(msg)
    .then(() => {})
    .catch(error => {
      //Log friendly error
      console.error(error.toString());
    });
});

module.exports = router;
