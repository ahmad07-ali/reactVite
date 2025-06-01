import React, { useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './verify.css'
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3700/Users/login", user, {
        withCredentials: true,
      });

      if (res.data.message === "Login success") {
        navigate("/orderform");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed. Check email/password." + err);
    }
  };

  return (
    <div style={styles.container} className="logdiv">
      <form onSubmit={handleLogin} style={styles.form}>
        <h3 style={styles.heading}>Login</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
        <Link to="/usersignup" style={styles.linkButton}>
          Signup
        </Link>
      </form>
      <Outlet/>
    </div>
  );
};

const styles = {
  container: {
    // position: "fixed",
    // top: 0,
    // left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "300px",
  },
  heading: {
    marginBottom: "10px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    border: "none",
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  linkButton: {
    display: "block",
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    textDecoration: "none",
  },
};

export default Login;
