import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import WeeklySalesCard from "../components/cards/weeklysales/WeeklySalesCard.jsx";
import TotalOrderCard from "../components/cards/totalorder/TotalOrderCard.jsx";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar (fixed width) */}
        <aside className="max-w-[350px] w-full">
          <SideBar />
        </aside>

        {/* Main Content */}
        <div className=" flex flex-col flex-1 p-4">
          <Navbar />
          <div className="cards flex flex-wrap gap-4 ">
            <div className="w-[500px]">
              <WeeklySalesCard />
            </div>

            <div className="w-[500px]">
              <TotalOrderCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
