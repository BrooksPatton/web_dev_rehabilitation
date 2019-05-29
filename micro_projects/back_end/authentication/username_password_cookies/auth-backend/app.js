const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cookieSession = require("cookie-session");

const app = express();
const port = 5000;
const COOKIE_KEY = process.env.COOKIE_KEY || "keyboard cat";

function Accounts() {
  const accounts = [];
  let lastId = 0;

  const add = ({ username, hash }) => {
    const account = {
      id: lastId + 1,
      username,
      hash
    };

    accounts.push(account);
    lastId += 1;

    return account;
  };

  return {
    add
  };
}

const accounts = Accounts();

app.set("trust proxy", 1);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["blah"]
  })
);

app.post("/api/v1/accounts", (request, response) => {
  console.log(request.session.id);

  const { username, password } = request.body;

  bcrypt.hash(password, 12).then(hash => {
    const account = accounts.add({ username, hash });

    request.session.id = account.id;
    response.status(201);
    response.json({ message: "account created" });
  });
});

app.listen(port, () => console.log(`server listening on port ${port}`));
