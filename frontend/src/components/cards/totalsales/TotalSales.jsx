import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { monthlySalesData } from "./monthlySalesData.js";
import { ChevronDown } from "lucide-react";

import "./totalsales.css";

const TotalSalesCard = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const salesData = monthlySalesData[selectedMonth] || monthlySalesData.January;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "white",
            color: "black",
            padding: "6px 10px",
            borderRadius: "4px",
            fontSize: "12px",
            border: "none",
          }}
        >
          {`${label}, ${payload[0].value}`}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="total-sales-card">
      <div className="card-header">
        <h3>Total Sales</h3>
        <div className="controls">
          <div className="month-selector-wrapper">
            <div
              className="month-selector"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedMonth}</span>
              <ChevronDown />
            </div>
            {isDropdownOpen && (
              <div className="month-dropdown">
                {months.map((month) => (
                  <div
                    key={month}
                    className={`month-option ${
                      month === selectedMonth ? "selected" : ""
                    }`}
                    onClick={() => {
                      setSelectedMonth(month);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="more-btn">•••</button>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={360}>
          <LineChart
            data={salesData}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#999" }}
              interval={4}
            />
            <YAxis
              domain={[0, 150]}
              ticks={[0, 30, 60, 90, 120, 150]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#999" }}
              grid={true}
            />
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 6,
                fill: "white",
                stroke: "#3B82F6",
                strokeWidth: 2,
              }}
              fill="url(#salesGradient)"
            />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSalesCard;
