import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import { Link, navigate } from "@reach/router";

function Callback({ location, localStorageKey, setUser }) {
  const [githubOauthStateMatches, setGithubOauthStateMatches] = useState(false);

  useEffect(() => {
    const queries = queryString.parse(location.search);
    const githubOauthState = window.localStorage.getItem(localStorageKey);
    const localAuthUrl = "http://localhost:5000/api/v1/github-login";

    setGithubOauthStateMatches(queries.state === githubOauthState);

    if (githubOauthStateMatches) {
      const authPayload = {
        code: queries.code,
        state: queries.state
      };
      const axiosOptions = {
        withCredentials: true
      };

      axios
        .post(localAuthUrl, authPayload, axiosOptions)
        .then(response => response.data)
        .then(response => {
          setUser({ id: response.data.id, loggedIn: true });
          navigate("/dashboard");
        })
        .catch(error => console.error(error));
    }
  }, [githubOauthStateMatches, localStorageKey, location.search, setUser]);

  const jsxToRender = {
    true: (
      <section>
        <h1>Logging in with Github</h1>
      </section>
    ),
    false: (
      <div>
        <p>Error - Message from GitHub does not match what we sent.</p>
        <Link to="/">Go back and try again</Link>
      </div>
    )
  };

  return <div>{jsxToRender[githubOauthStateMatches]}</div>;
}

export default Callback;
