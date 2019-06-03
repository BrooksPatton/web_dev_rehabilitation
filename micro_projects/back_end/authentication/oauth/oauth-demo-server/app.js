require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const queryString = require("query-string");
const cookieSession = require("cookie-session");
const database = require("./database/store");

const app = express();
const {
  PORT = 5000,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  COOKIE_SECRET
} = process.env;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieSession({ keys: [COOKIE_SECRET] }));

app.post("/api/v1/github-login", (request, response) => {
  const githubOauthUrl = "https://github.com/login/oauth/access_token";
  const { code, state } = request.body;

  axios
    .post(
      `${githubOauthUrl}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=${REDIRECT_URI}&state=${state}`
    )
    .then(axiosResponse => queryString.parse(axiosResponse.data))
    .then(githubAuthResponse => {
      const githubUserApi = "https://api.github.com/user";
      const headers = {
        Authorization: `bearer ${githubAuthResponse.access_token}`
      };

      return axios
        .get(githubUserApi, { headers })
        .then(axiosResponse => axiosResponse.data);
    })
    .then(gitHubUser => database.add(gitHubUser))
    .then(id => {
      request.session.meow = "hello";
      response
        .status(201)
        .json({ message: `accound ${id} added`, data: { id } });
    })
    .catch(console.error);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
