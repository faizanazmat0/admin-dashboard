import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./bestsellingproduct.css";

const BestSellingProducts = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const periods = ["Last 7 days", "Last month", "Last year"];

  const products = [
    {
      id: 1,
      name: "Raven Pro",
      category: "Landing",
      image:
        "https://prium.github.io/falcon/v3.24.0/assets/img/products/12.png",
      revenue: 1311,
      percentage: 39,
      icon: "▬",
    },
    {
      id: 2,
      name: "Boot64",
      category: "Portfolio",
      image:
        "https://prium.github.io/falcon/v3.24.0/assets/img/products/10.png",
      revenue: 860,
      percentage: 26,
      icon: "▬",
    },
    {
      id: 3,
      name: "Falcon",
      category: "Admin",
      image:
        "https://prium.github.io/falcon/v3.24.0/assets/img/products/11.png",
      revenue: 539,
      percentage: 16,
      icon: "▬",
    },
    {
      id: 4,
      name: "Slick",
      category: "Builder",
      image:
        "https://prium.github.io/falcon/v3.24.0/assets/img/products/14.png",
      revenue: 343,
      percentage: 10,
      icon: "▬",
    },
    {
      id: 5,
      name: "Reign Pro",
      category: "Agency",
      image:
        "https://prium.github.io/falcon/v3.24.0/assets/img/products/13.png",
      revenue: 280,
      percentage: 8,
      icon: "▬",
    },
  ];

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  return (
    <div className="best-selling-card">
      {/* Header Row */}
      <div className="header-row">
        <h3>Best Selling Products</h3>
        <h3>Revenue ($3333)</h3>
        <h3>Revenue (%)</h3>
      </div>

      {/* Products List */}
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-row">
            <div className="product-info">
              <div className="Product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <span className="product-category">{product.category}</span>
              </div>
            </div>

            <div className="product-percentage">
              <h2 className="product-revenue">${product.revenue}</h2>
              <div className="percentage-bar">
                <div
                  className="percentage-fill"
                  style={{ width: `${product.percentage}%` }}
                ></div>
              </div>
              <h2 className="percentage-text">{product.percentage}%</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="footer-controls">
        <div className="dropdown-wrapper">
          <div
            className={`dropdown-selector ${isDropdownOpen ? "active" : ""}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedPeriod}</span>
            <ChevronDown />
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {periods.map((period) => (
                <div
                  key={period}
                  className={`dropdown-option ${
                    period === selectedPeriod ? "selected" : ""
                  }`}
                  onClick={() => handlePeriodChange(period)}
                >
                  {period}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="view-all-btn">View All</button>
      </div>
    </div>
  );
};

export default BestSellingProducts;
