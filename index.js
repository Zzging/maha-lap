const express = require("express");
const mahalap = require("./maha-lap");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/namo", (req, res) => {
  const day = req.query.day;
  const stiry = req.query.stiry;
  const time = req.query.time;
  const theHolyNumber = mahalap.name(day, stiry, time);
  res.json({
    result: theHolyNumber
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
