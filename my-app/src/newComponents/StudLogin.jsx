import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function StudLogin() {
  const [input, setInput] = useState({ rollno: "", name: "", address: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3700/Students/getStudent");
      const students = res.data;

      console.log("Fetched Students:", students);
      console.log("User Input:", input);

      const inputRollnoNumber = Number(input.rollno.trim());

      const matchedStudent = students.find(student =>
        student.rollno === inputRollnoNumber &&
        student.name.trim().toLowerCase() === input.name.trim().toLowerCase() &&
        student.address.trim().toLowerCase() === input.address.trim().toLowerCase()
      );

      console.log("Matched Student:", matchedStudent);

      if (matchedStudent) {
        navigate("/crud");
      } else {
        setError("Invalid login: Student not found.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Something went wrong. Try again.");
    }
  };

  const handleSignup = () => {
    navigate("/studsignup");
  };

  return (
    <div
      style={{
        // position: "absolute",
        // top: 0,
        // left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          // padding: "30px",
          // // backgroundColor: "white",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          // minWidth: "300px",
          // zIndex: "1"
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", textAlign: "center" }}>Students Login</h3>
        <input style={{
          width: "300px",
        }} name="rollno" placeholder="Roll No" onChange={handleChange} required />
        <input style={{
          width: "300px",
        }} name="name" placeholder="Name" onChange={handleChange} required />
        <input style={{
          width: "300px",
        }} name="address" placeholder="Address" onChange={handleChange} required />
        <button style={{
          border: "1px solid grey",
          backgroundColor: "blue",
          padding: "5px",
          color: "white"
        }} type="submit">Login</button>
        <button style={{
          border: "1px solid grey",
          backgroundColor: "blue",
          padding: "5px",
          color: "white"
        }} type="button" onClick={handleSignup}>Signup</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default StudLogin;
