import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function Landing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    createAccount: null,
    loginToAccount: null
  });
  const apiUrl = "http://localhost:5000/api";

  const createAccount = event => {
    event.preventDefault();

    const account = {
      username,
      password
    };

    axios
      .post(`${apiUrl}/v1/accounts`, account, { withCredentials: true })
      .then(response => {
        if (response.status === 201) {
          navigate("/dashboard/");
        }
      })
      .catch(error => {
        console.log(error.response.data);
        const errorMessage = Object.assign({}, errorMessages);

        errorMessage.createAccount = error.response.data.message;
        setErrorMessages(errorMessage);
      });
  };

  return (
    <section className="Landing">
      <h1>Landing page</h1>

      <h2>Create Account</h2>
      <form onSubmit={createAccount}>
        <div>
          <label htmlFor="create-username">Username</label>
          <input
            type="text"
            id="create-username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="create-password">Password</label>
          <input
            type="password"
            id="create-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button>Create Account</button>
        <p>{errorMessages.createAccount}</p>
      </form>

      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="login-username">Username</label>
          <input type="text" id="login-username" />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" />
        </div>
        <button>Create Account</button>
      </form>
    </section>
  );
}

export default Landing;
