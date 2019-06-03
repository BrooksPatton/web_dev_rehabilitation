const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/v1/github-login", (request, response) => {
  console.log(request.body);

  response.json({ message: request.body });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
