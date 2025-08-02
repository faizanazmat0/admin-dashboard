import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import WeeklySalesCard from "../components/cards/weeklysales/WeeklySalesCard.jsx";
import TotalOrderCard from "../components/cards/totalorder/TotalOrderCard.jsx";
import MarketShareCard from "../components/cards/marketshare/MarketShareCard.jsx";
import WeatherCard from "../components/cards/weather/Weathercard.jsx";
import RunningProjectsCard from "../components/cards/runningprojects/RunningProjects.jsx";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar (fixed width) */}
        <aside className="w-[350px]">
          <SideBar />
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <Navbar />

          {/* Cards Container aligned with search input */}
          <div className="cards w-full">
            {/* First Row - Two cards */}
            <div
              className="flex gap-8"
              style={{
                paddingLeft: "40px",
                paddingRight: "100px",
              }}
            >
              <div className="w-[50%] h-[200px]">
                <WeeklySalesCard />
              </div>
              <div className="w-[50%] h-[200px]">
                <TotalOrderCard />
              </div>
            </div>

            {/* Second Row - Two cards */}
            <div
              className="flex gap-8"
              style={{
                paddingLeft: "40px",
                paddingRight: "100px",
              }}
            >
              <div className="w-[50%] h-[200px]">
                <MarketShareCard />
              </div>
              <div className="w-[50%] h-[200px]">
                <WeatherCard />
              </div>
            </div>

            {/* Third Row - Two cards */}
            <div
              className="flex gap-8"
              style={{
                paddingLeft: "40px",
                paddingRight: "100px",
              }}
            >
              <div className="w-[50%] h-[200px]">
                <RunningProjectsCard />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
