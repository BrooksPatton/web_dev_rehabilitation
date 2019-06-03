import React, { useState } from "react";
import { Router } from "@reach/router";
import Landing from "./landing/landing";
import Callback from "./login/callback.js";
import Dashboard from "./dashboard/dashboard";

function App() {
  const localStorageKey = "githubOauthState";
  const [user, setUser] = useState({ id: null, loggedIn: false });

  return (
    <div className="App">
      <Router>
        <Landing path="/" localStorageKey={localStorageKey} />
        <Callback
          path="/auth/callback"
          localStorageKey={localStorageKey}
          setUser={setUser}
        />
        <Dashboard user={user} path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
