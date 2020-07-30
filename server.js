const express = require("express");
const app = express();
const fetch = require("node-fetch");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json({}));

app.get("/quote", (req, res) => {
  const url = "https://api.kanye.rest";

  fetch(url)
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.listen(PORT, () =>
  console.log(`Server started and listening on port ${PORT}`)
);
