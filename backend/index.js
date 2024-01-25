const express = require("express");
const app = express();
const cors = require ('cors')
const PORT = 4000;
const db= require('./database/index.js')
const routeFilms = require('./routes/route.js')
app.use(cors())
app.use(express.json())
app.use("/api/film",routeFilms)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});