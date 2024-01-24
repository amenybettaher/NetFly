const express = require("express");
const app = express();
const cors = require ('cors')
const PORT = 4000;

app.use(cors())
app.use(express.json())
app.use("/api/")

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});