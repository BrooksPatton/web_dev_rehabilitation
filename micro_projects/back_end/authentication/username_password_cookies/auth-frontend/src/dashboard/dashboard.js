import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

function Dashboard() {
  const [user, setUser] = useState({ id: null, username: null });
  const logout = () =>
    axios
      .get("http://localhost:5000/api/v1/accounts/logout", {
        withCredentials: true
      })
      .then(() => navigate("/"))
      .catch(error => console.error(error));
  const deleteAccount = () => {
    axios
      .delete("http://localhost:5000/api/v1/accounts", {
        withCredentials: true
      })
      .then(() => navigate("/?message=account deleted"))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/accounts", { withCredentials: true })
      .then(response => {
        setUser(response.data.message);
      })
      .catch(error => {
        if (error.response.status === 401) {
          navigate("/?message=not authorized");
        } else {
          navigate(`/?message=${error.response.data.message}`);
        }
      });
  }, [user.id]);

  return (
    <section className="Dashboard">
      <h1>Dashboard</h1>
      <div>User ID: {user.id}</div>
      <div>Username: {user.username}</div>
      <div>
        <button onClick={logout}>Log Out</button>
      </div>
      <div>
        <button onClick={deleteAccount}>Delete Account</button>
      </div>
    </section>
  );
}

export default Dashboard;
