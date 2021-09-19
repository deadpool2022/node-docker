const express = require("express");
const mongoose = require("mongoose");
const app = express();

// connecting ot database
mongoose.connect("mongodb://vikas:password@mongo:27017?authSource=admin")
.then(() => console.log('connected to database successfully'))
.catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2>Hey There!!! boogiie boogiie woogie woo woo woo cool!!!<h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening of port ${port}`));
