const express = require('express');
const app = express();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");


app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}


app.listen(PORT, () => console.log(`Listening to port ${PORT}`))