import React from "react";
import { Router } from "@reach/router";
import Landing from "./landing/landing";
import Callback from "./login/callback.js";

function App() {
  const localStorageKey = "githubOauthState";

  return (
    <div className="App">
      <Router>
        <Landing path="/" localStorageKey={localStorageKey} />
        <Callback path="/auth/callback" localStorageKey={localStorageKey} />
      </Router>
    </div>
  );
}

export default App;
