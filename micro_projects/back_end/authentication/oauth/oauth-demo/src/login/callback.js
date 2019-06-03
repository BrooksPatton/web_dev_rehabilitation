import React from "react";
import queryString from "query-string";
import axios from "axios";
import { Link } from "@reach/router";

function Callback({ location, localStorageKey }) {
  const queries = queryString.parse(location.search);
  const githubOauthState = window.localStorage.getItem(localStorageKey);
  const githubOauthStateMatches = queries.state === githubOauthState;
  const localAuthUrl = "http://localhost:5000/api/v1/github-login";

  if (githubOauthStateMatches) {
    const authPayload = {
      code: queries.code,
      state: queries.state
    };

    axios
      .post(localAuthUrl, authPayload)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));

    return (
      <section>
        <h1>Logging in with Github</h1>
      </section>
    );
  } else {
    return (
      <div>
        <p>Error - Message from GitHub does not match what we sent.</p>
        <Link to="/">Go back and try again</Link>
      </div>
    );
  }
}

export default Callback;
