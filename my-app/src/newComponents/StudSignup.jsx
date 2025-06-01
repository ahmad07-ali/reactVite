import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudSignup() {
  const [input, setInput] = useState({ rollno: "", name: "", address: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3700/Students/addStudent", input);
      setMessage("Student created successfully.");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error("Error adding student:", err);
      setMessage("Failed to create student.");
    }
  };

  return (
    <div
      style={{
        // position: "fixed",
        // top: 0,
        // left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Signup</h3>
        <input
          name="rollno"
          placeholder="Roll No"
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "330px" }}
        />
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "330px"}}
        />
        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "330px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            // border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
        {message && (
          <p style={{ textAlign: "center", color: "#333", marginTop: "10px" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default StudSignup;
