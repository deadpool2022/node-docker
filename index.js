const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

const postRouter = require("./routes/postRoutes");

const app = express();

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}?authSource=admin`;

const retryToConnect = () => {
  // connecting ot database
  mongoose
    .connect(mongoUrl, {
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database successfully"))
    .catch((e) => {
      console.log(e);
      setTimeout(retryToConnect, 5000);
    });
};

retryToConnect();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h2>Hey There!!! boogiie boogiie woogie woo woo woo cool!!!<h2>");
});

app.use("/api/v1/posts", postRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening of port ${port}`));
