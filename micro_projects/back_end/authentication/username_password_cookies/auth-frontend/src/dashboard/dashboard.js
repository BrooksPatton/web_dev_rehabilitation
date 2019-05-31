import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState({ id: null, username: null });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/accounts", { withCredentials: true })
      .then(response => {
        setUser(response.data.message);
      })
      .catch(error => console.error(error));
  }, [user.id]);

  return (
    <section className="Dashboard">
      <h1>Dashboard</h1>
      <div>User ID: {user.id}</div>
      <div>Username: {user.username}</div>
    </section>
  );
}

export default Dashboard;
