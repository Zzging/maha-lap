const express = require("express");

const MahaLap = require("./maha-Lap");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ด้วยมนต์แห่ง 250!"));

app.use("/public", express.static("public"));
//http://localhost:3000/public

app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;

  const theHolyNumber = MahaLap.TwoFiveZero(day, time, story);

  res.json({
    result: theHolyNumber
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
