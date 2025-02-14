import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will display Feed or Login based on route */}
      <Footer />
    </div>
  );
};

export default Home;
