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

  const doesUsernameExist = username => {
    const result = accounts.findIndex(account => account.username === username);

    return result > -1;
  };

  const getById = id => {
    const account = accounts.find(account => account.id === id);

    return { username: account.username, id: account.id };
  };

  return {
    add,
    doesUsernameExist,
    getById
  };
}

const accounts = Accounts();

app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: "session",
    secret: COOKIE_KEY
  })
);

app.post("/api/v1/accounts", (request, response) => {
  const { username, password } = request.body;

  if (accounts.doesUsernameExist(username)) {
    return response.status(400).json({ message: "username already exists" });
  }

  bcrypt.hash(password, 12).then(hash => {
    const account = accounts.add({ username, hash });

    request.session.id = account.id;
    response.status(201);
    response.json({ message: "account created" });
  });
});

app.get("/api/v1/accounts", (request, response) => {
  const account = accounts.getById(request.session.id);

  if (account) {
    response.json({ message: account });
  } else {
    response.status(401).json({ message: "not authorized" });
  }
});

app.listen(port, () => console.log(`server listening on port ${port}`));
