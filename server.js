const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const routes = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ".client/build/index.html"));
});
app.use(routes);
sgMail.setApiKey(
  "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"
);
// app.get("/api/send-email", (req, res) => {
//   console.log("hit");
//   const msg = {
//     to: "patrickcorcoran10@gmail.com",
//     from: "test@example.com",
//     subject: "Sending with Twilio SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>"
//   };
//   sgMail.send(msg);
// });

app.listen(PORT, function() {
  console.log("We are Showing our Work on PORT", PORT);
});
