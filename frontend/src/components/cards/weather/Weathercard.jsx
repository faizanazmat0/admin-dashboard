import React, { useState, useEffect, useRef } from "react";
import { Ellipsis } from "lucide-react";
import "./weathercard.css";

const WeatherCard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h3>Weather</h3>
        <div className="drop-down-wrapper" ref={dropdownRef}>
          <Ellipsis
            className="more-btn"
            onClick={() => setShowMenu(!showMenu)}
          />

          {showMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-item">View</div>
              <div className="dropdown-item">Export</div>
              <div className="dropdown-item remove">Remove</div>
            </div>
          )}
        </div>
      </div>

      <div className="weather-content">
        <div className="location-info">
          <div className="weather-icon">
            <img
              src="	https://prium.github.io/falcon/v3.24.0/assets/img/icons/weather-icon.png"
              alt="Sun"
            />
          </div>
          <div className="location-text">
            <h3 className="city">New York City</h3>
            <span className="condition">Sunny</span>
            <span className="precipitation">Precipitation: 50%</span>
          </div>
        </div>

        <div className="temperature-info">
          <span className="current-temp">31°</span>
          <span className="temp-range">32° / 25°</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
