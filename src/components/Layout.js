import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet /> {/* This will render the child routes */}
      </div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          © 2024 Blog App, Inc. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;
