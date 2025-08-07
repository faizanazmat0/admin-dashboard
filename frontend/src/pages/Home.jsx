import React from "react";
import SideBar from "../components/sidebar/SideBar.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import WeeklySalesCard from "../components/cards/weeklysales/WeeklySalesCard.jsx";
import TotalOrderCard from "../components/cards/totalorder/TotalOrderCard.jsx";
import MarketShareCard from "../components/cards/marketshare/MarketShareCard.jsx";
import WeatherCard from "../components/cards/weather/Weathercard.jsx";
import RunningProjectsCard from "../components/cards/runningprojects/RunningProjects.jsx";
import TotalSalesCard from "../components/cards/totalsales/TotalSales.jsx";
import BestSellingProducts from "../components/cards/bestsellingproducts/BestSellingProduct.jsx";
import SharedFiles from "../components/cards/sharedfiles/SharedFiles.jsx";

const Home = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar (fixed width) */}
        <aside className="w-[350px]">
          <SideBar />
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          <Navbar />

          {/* Cards Container aligned with search input */}
          <div className="flex-1 flex-col overflow-y-auto">
            {/* First Row - Two cards */}
            <div
              className="flex gap-8"
              style={{
                paddingLeft: "40px",
                paddingRight: "100px",
              }}
            >
              <div className="w-[50%] min-h-[200px]">
                <WeeklySalesCard />
              </div>
              <div className="w-[50%] min-h-[200px]">
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
              <div className="w-[50%] min-h-[200px]">
                <MarketShareCard />
              </div>
              <div className="w-[50%] min-h-[200px]">
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
              <div className="w-[50%] min-h-[200px]">
                <RunningProjectsCard />
              </div>

              <div className="w-[50%] min-h-[200px]">
                <TotalSalesCard />
              </div>
            </div>

            {/* Fourth Row - Two cards */}
            <div
              className="flex gap-8"
              style={{
                paddingLeft: "40px",
                paddingRight: "100px",
              }}
            >
              <div className="w-[65%] min-h-[200px]">
                <BestSellingProducts />
              </div>
              <div className="w-[35%] min-h-[200px]">
                <SharedFiles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
