import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "./marketsharecard.css";

// Mock data for market share
const marketData = [
  { name: "Samsung", value: 60, color: "#3086F9" },
  { name: "Huawei", value: 40, color: "#2ACCFD" },
  { name: "Apple", value: 20, color: "#EBF6FD" },
];

// Custom Tooltip Component for Pie Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="market-chart-tooltip">
        {`${data.name}: ${data.value}%`}
      </div>
    );
  }
  return null;
};

const MarketShareCard = () => {
  return (
    <div className="market-share-card">
      {/* Card Header */}
      <div className="market-card-header">
        <div className="market-header-content">
          <h3 className="market-card-title">Market Share</h3>
        </div>
      </div>

      {/* Chart and Legend Layout */}
      <div className="market-content-layout">
        {/* Legend */}
        <div className="market-legend">
          {marketData.map((item, index) => (
            <div key={index} className="legend-item">
              <div className="legend-content">
                <div
                  className="legend-color-dot"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="legend-company">{item.name}</span>
              </div>
              <span className="legend-percentage">{item.value}%</span>
            </div>
          ))}
        </div>

        {/* Donut Chart with Center Text */}
        <div className="market-chart-container">
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie
                  data={marketData}
                  cx="50%"
                  cy="50%"
                  innerRadius={59}
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {marketData.map((entry, index) => (
                    <Cell key={`${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center Text */}
            <div className="chart-center-text">
              <span className="center-number">26M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketShareCard;
