import React from "react";
import { Router } from "@reach/router";
import Landing from "./landing/landing";
import Dashboard from "./dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <h1>Username / Password / Cookie auth example</h1>
      <Router>
        <Landing path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
