import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { ChevronUp } from "lucide-react";
import "./totalordercard.css";

// Mock data for total orders trend
const orderData = [
  { Week: "Week 1", orders: 10 },
  { Week: "Week 2", orders: 15 },
  { Week: "Week 3", orders: 20 },
  { Week: "Week 4", orders: 25 },
  { Week: "Week 5", orders: 18 },
  { Week: "Week 6", orders: 50 },
  { Week: "Week 7", orders: 60 },
  { Week: "Week 8", orders: 65 },
  { Week: "Week 9", orders: 70 },
  { Week: "Week 10", orders: 90 },
];

// Custom Tooltip Component for Area Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="order-chart-tooltip">
        {`${payload[0].payload.Week}: ${payload[0].payload.orders}`}
      </div>
    );
  }
  return null;
};

const TotalOrderCard = () => {
  return (
    <div className="total-order-card">
      {/* Card Layout - Left Stats, Right Chart */}
      <div className="order-card-content-layout">
        {/* Left Side - Stats Column */}
        <div className="order-stats-column">
          {/* Card Header*/}
          <div className="order-card-header-with-help">
            <div className="order-header-content">
              <h3 className="order-card-title">Total Order</h3>
            </div>
          </div>

          {/* Main Order Amount */}
          <h2 className="order-amount">58.4K</h2>

          {/* Trend Indicator */}
          <div className="order-trend-positive">
            <ChevronUp className="order-trend-icon" />
            <span className="order-trend-percentage">15.6%</span>
          </div>
        </div>

        {/* Right Side - Chart */}
        <div className="order-chart-column">
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart
              data={orderData}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <defs>
                <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="orders"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#orderGradient)"
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "#3b82f6",
                  strokeWidth: 3,
                  stroke: "#ffffff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TotalOrderCard;
