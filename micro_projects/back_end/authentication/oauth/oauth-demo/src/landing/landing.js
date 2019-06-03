import React from "react";
import LoginWithGithub from "../login/login_with_github";

function Landing({ localStorageKey }) {
  return (
    <section>
      <h1>Landing Page</h1>
      <LoginWithGithub localStorageKey={localStorageKey} />
    </section>
  );
}

export default Landing;
