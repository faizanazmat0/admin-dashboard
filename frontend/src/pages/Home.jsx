import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar (fixed width) */}
        <div className="max-w-[350px] w-full">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
