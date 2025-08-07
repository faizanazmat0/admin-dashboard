import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./topproduct.css";

const data = [
  {
    name: "Boots4",
    2019: 43,
    2018: 85,
  },
  {
    name: "Reign Pro",
    2019: 86,
    2018: 73,
  },
  {
    name: "Slick",
    2019: 83,
    2018: 62,
  },
  {
    name: "Falcon",
    2019: 72,
    2018: 53,
  },
  {
    name: "Sparrow",
    2019: 80,
    2018: 50,
  },
  {
    name: "Hideway",
    2019: 50,
    2018: 70,
  },
  {
    name: "Freya",
    2019: 80,
    2018: 90,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    const item = payload[0];
    return (
      <div className="custom-tooltip">
        {payload.map((item, index) => (
          <div key={index} className="tooltip-item">
            {item.dataKey} {label}: {item.value}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const TopProduct = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Top Products</h3>
        <div className="header-actions">
          <a href="#" className="view-details">
            View Details
          </a>
          <button className="menu-btn">⋯</button>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="legend-dot blue"></span>
          <span>2019</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot gray"></span>
          <span>2018</span>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="30%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#94a3b8" }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#94a3b8" }}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
              dataKey="2019"
              fill="#3b82f6"
              radius={[50, 50, 0, 0]}
              barSize={12}
            />
            <Bar
              dataKey="2018"
              fill="#d1d5db"
              radius={[50, 50, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopProduct;
