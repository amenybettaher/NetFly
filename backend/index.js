const express = require("express");
const app = express();
const cors = require ('cors')
const PORT = 4000;
const db= require('./database/index.js')
const routeFilms = require('./routes/route.js')
 const route2 =require('./routes/route2.js')
app.use(cors())
app.use(express.json())
app.use("/api/film",routeFilms)
app.use("/api/film",route2)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});