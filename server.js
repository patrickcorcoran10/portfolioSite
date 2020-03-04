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

app.listen(PORT, function() {
  console.log("We are Showing our Work on PORT", PORT);
});
