import React, { useEffect } from "react";
import { navigate } from "@reach/router";

function Dashboard({ user }) {
  // Next step is to use the id that we have and get the full user object from the server to display
  useEffect(() => {
    if (!user.loggedIn) {
      navigate("/");
    }
  }, [user.loggedIn]);

  return (
    <section>
      <h1>Dashboard</h1>
      <div>User id: {user.id}</div>
    </section>
  );
}

export default Dashboard;
