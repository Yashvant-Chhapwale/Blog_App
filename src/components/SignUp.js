import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        input // Send input directly, without wrapping it in an extra object
      );
      console.log("Response:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Sign up failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={input.username}
            // onChange={(e) => setUsername(e.target.value)}
            name="username"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={input.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            name="password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
