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

    if (!account) {
      throw new Error("could not find account");
    }

    return { username: account.username, id: account.id };
  };

  const deleteById = id => {
    const accountIndex = accounts.findIndex(account => account.id === id);

    accounts.splice(accountIndex, 1);
  };

  const comparePasswordToHash = ({ password, hash }) => {
    return bcrypt.compare(password, hash);
  };

  const getByUsername = username =>
    accounts.find(account => account.username === username);

  return {
    add,
    doesUsernameExist,
    getById,
    deleteById,
    comparePasswordToHash,
    getByUsername
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

app.get("/api/v1/accounts/logout", (request, response) => {
  request.session.id = null;
  response.json({ message: "logged out" });
});

app.get("/api/v1/accounts", (request, response) => {
  if (!request.session.id)
    return response.status(401).json({ message: "not authorized" });

  try {
    const account = accounts.getById(request.session.id);

    if (account) {
      response.json({ message: account });
    } else {
      response.status(401).json({ message: "not authorized" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
});

app.delete("/api/v1/accounts", (request, response) => {
  const { id } = request.session;

  accounts.deleteById(id);
  request.session.id = null;
  response.json({ message: "account deleted" });
});

app.post("/api/v1/accounts/login", (request, response) => {
  const { username, password } = request.body;
  const account = accounts.getByUsername(username);

  if (!account)
    return response.status(500).json({ message: "wrong username or password" });

  accounts
    .comparePasswordToHash({ password, hash: account.hash })
    .then(isMatch => {
      if (isMatch) {
        request.session.id = account.id;
        response.json({ message: "logged in" });
      } else {
        response.status(400).json({ message: "wrong username or password" });
      }
    });
});

app.listen(port, () => console.log(`server listening on port ${port}`));
