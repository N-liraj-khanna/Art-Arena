// Imports
const express = require("express");
require("dotenv").config({ path: "config.env" });

// Constants
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.get("/", (req, res) => {
  return res.send("Welcome to Art Arena");
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
