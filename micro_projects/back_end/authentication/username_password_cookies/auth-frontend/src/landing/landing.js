import React, { useState } from "react";

function Landing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "http://localhost:5000/api";

  const createAccount = event => {
    event.preventDefault();

    const account = {
      username,
      password
    };

    fetch(`${apiUrl}/v1/accounts`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(account)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
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
        <button role="create account">Create Account</button>
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
        <button role="login account">Create Account</button>
      </form>
    </section>
  );
}

export default Landing;
