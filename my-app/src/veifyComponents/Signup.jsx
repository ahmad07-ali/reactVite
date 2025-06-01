import { useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './verify.css'

const Signup = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3700/Users/register', user, {
        withCredentials: true,
      });
      alert('Signup successful');
      navigate('/userlogin');
    } catch {
      alert('Signup failed');
    }
  };

  return (
    <div style={styles.container} className='signdiv'>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h3 style={styles.heading}>Signup</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Register</button>
        <Link to="/userlogin" style={styles.linkButton}>Already registered? Login</Link>
      </form>
      <Outlet />
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
    alignItems: "center"
  },
  form: {
    padding: "30px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "300px"
  },
  heading: {
    marginBottom: "10px",
    textAlign: "center"
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  },
  button: {
    border: "none",
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  linkButton: {
    display: "block",
    textAlign: "center",
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "4px",
    textDecoration: "none"
  }
};

export default Signup;
