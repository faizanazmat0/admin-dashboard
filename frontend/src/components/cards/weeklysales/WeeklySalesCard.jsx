import React, { useState } from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp, HelpCircle } from "lucide-react";
import "./weeklysalescard.css";

// Mock data for weekly sales with actual values for tooltip
const salesData = [
  { day: "Mon", sales: 45, remaining: 55 },
  { day: "Tue", sales: 100, remaining: 0 },
  { day: "Wed", sales: 38, remaining: 62 },
  { day: "Thu", sales: 70, remaining: 30 },
  { day: "Fri", sales: 55, remaining: 45 },
  { day: "Sat", sales: 50, remaining: 50 },
  { day: "Sun", sales: 42, remaining: 58 },
];

// NEW: Custom Tooltip Component for Bar Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        {`${payload[0].payload.day}: ${payload[0].payload.sales}`}
      </div>
    );
  }
  return null;
};

const WeeklySalesCard = () => {
  // NEW: State for help tooltip visibility
  const [showHelpTooltip, setShowHelpTooltip] = useState(false);

  return (
    <div className="weekly-sales-card">
      {/* NEW: Card Layout - Left Stats, Right Chart */}
      <div className="card-content-layout">
        {/* Left Side - Stats Column */}
        <div className="stats-column">
          {/* Card Header with Help Icon */}
          <div className="card-header-with-help">
            <div className="header-content">
              <h3 className="card-title">Weekly Sales</h3>
              {/* NEW: Help Icon with Tooltip */}
              <div
                className="help-icon-container"
                onMouseEnter={() => setShowHelpTooltip(true)}
                onMouseLeave={() => setShowHelpTooltip(false)}
              >
                <HelpCircle className="help-icon" />
                {showHelpTooltip && (
                  <div className="help-tooltip">
                    Calculated according to last week's sales
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Sales Amount */}
          <h2 className="sales-amount">$47K</h2>

          {/* Trend Indicator */}
          <div className="sales-trend-positive">
            <TrendingUp className="trend-icon" />
            <span className="trend-percentage">+3.5%</span>
          </div>
        </div>

        {/* Right Side - Chart */}
        <div className="chart-column">
          <ResponsiveContainer width="100%" height={120}>
            <BarChart
              data={salesData}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar
                dataKey="sales"
                fill="#2B79E1"
                radius={[20, 20, 20, 20]}
                barSize={8}
                stackId={"a"}
              />

              <Bar
                dataKey="remaining"
                fill="#EEEEEE"
                radius={[20, 20, 20, 20]}
                barSize={8}
                stackId={"a"}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WeeklySalesCard;
