const get_access_token = require("./get_token");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", async (req, res) => {
  console.log(req.body);
  console.log(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
