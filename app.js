const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Welcome to Art Arena");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server up and running on port ${process.env.PORT || 5000}`);
});
