import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container text-center">
      <h1>Welcome to BlogApp</h1>
      <p>Your platform to share and explore blogs!</p>
      <Link to="/signup" className="btn btn-primary">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
