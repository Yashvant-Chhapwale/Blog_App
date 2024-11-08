import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import AboutUs from "./components/About";
import ContactUs from "./components/Contact";
import CreateBlog from "./components/CreateBlog";
import SeeOtherBlogs from "./components/SeeOtherBlogs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          {" "}
          {/* Protect routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/see-blogs" element={<SeeOtherBlogs />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
