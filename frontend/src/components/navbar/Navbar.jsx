import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import {
  Search,
  X,
  ChevronDown,
  ShoppingCart,
  Bell,
  Settings,
  Grip,
  Sun,
  Moon,
  CircleDashed,
} from "lucide-react";

import {
  profileImage,
  themewagonImage,
  mailblusterImage,
  googleImage,
  spotifyImage,
  steamImage,
  githubImage,
  discordImage,
  xboxImage,
} from "../../assets/images/nav/navimages.js";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showAppsDropdown, setShowAppsDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const clearSearch = () => setSearchValue("");

  const notificationDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setShowNotificationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="search-wrapper">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && <X className="clear-icon" onClick={clearSearch} />}
      </div>

      <div className="nav-icons">
        <div className="icon-wrapper">
          <Settings
            className="nav-icon"
            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
          />
          <ChevronDown
            className="dropdown-arrow"
            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
          />
          {showThemeDropdown && (
            <div className="dropdown-menu">
              <div className="flex items-center justify-start gap-3">
                <Sun /> Light
              </div>
              <div className="flex items-center justify-start gap-3">
                <Moon /> Dark
              </div>
              <div className="flex items-center justify-start gap-3">
                <CircleDashed /> Auto
              </div>
            </div>
          )}
        </div>

        <div className="icon-with-badge">
          <ShoppingCart className="nav-icon" />
          <span className="badge">1</span>
        </div>

        <div className="icon-with-badge">
          <Bell
            className="nav-icon"
            onClick={() =>
              setShowNotificationDropdown(!showNotificationDropdown)
            }
          />
          <span className="badge notification"></span>
          {/* Notification dropdowm */}
          {showNotificationDropdown && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h3>Notifications</h3>
                <button className="mark-all-read">Mark all as read</button>
              </div>

              <div className="notification-section">
                <span className="section-label">NEW</span>

                <div className="notification-item">
                  <img
                    src={profileImage}
                    alt="Emma Watson"
                    className="notification-avatar"
                  />
                  <div className="notification-content">
                    <p>
                      <strong>Emma Watson</strong> replied to your comment:
                      "Hello world 😊"
                    </p>
                    <span className="notification-time">💬 Just now</span>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="notification-avatar-text">AB</div>
                  <div className="notification-content">
                    <p>
                      <strong>Albert Brooks</strong> reacted to{" "}
                      <strong>Mia Khalifa's</strong> status
                    </p>
                    <span className="notification-time">❤️ 5hr</span>
                  </div>
                </div>
              </div>

              <div className="notification-section">
                <span className="section-label">EARLIER</span>

                <div className="notification-item">
                  <div className="notification-avatar-weather">🌤️</div>
                  <div className="notification-content">
                    <p>
                      The forecast today shows a low of 20°C in California. See
                      today's weather.
                    </p>
                    <span className="notification-time">⛅ 1d</span>
                  </div>
                </div>
              </div>

              <div className="notification-footer">
                <button className="view-all-btn">View all</button>
              </div>
            </div>
          )}
        </div>

        <div className="icon-wrapper">
          <Grip
            className="nav-icon"
            onClick={() => setShowAppsDropdown(!showAppsDropdown)}
          />
          {showAppsDropdown && (
            <div className="apps-dropdown">
              <div className="app-item">
                <img src={profileImage} alt="Account" />
                <span>Account</span>
              </div>
              <div className="app-item">
                <img src={themewagonImage} alt="Themew" />
                <span>Themew...</span>
              </div>
              <div className="app-item">
                <img src={mailblusterImage} alt="Mailbluster" />
                <span>Mailbluster</span>
              </div>
              <div className="app-item">
                <img src={googleImage} alt="Google" />
                <span>Google</span>
              </div>
              <div className="app-item">
                <img src={spotifyImage} alt="Spotify" />
                <span>Spotify</span>
              </div>
              <div className="app-item">
                <img src={steamImage} alt="Steam" />
                <span>Steam</span>
              </div>
              <div className="app-item">
                <img src={githubImage} alt="Github" />
                <span>Github</span>
              </div>
              <div className="app-item">
                <img src={discordImage} alt="Discord" />
                <span>Discord</span>
              </div>
              <div className="app-item">
                <img src={xboxImage} alt="Xbox" />
                <span>Xbox</span>
              </div>
              <div className="app-item">
                <img src={xboxImage} alt="Xbox" />
                <span>Xbox</span>
              </div>
              <div className="app-item">
                <img src={xboxImage} alt="Xbox" />
                <span>Xbox</span>
              </div>
            </div>
          )}
        </div>

        <div className="profile-wrapper">
          <img
            src={profileImage}
            className="profile-pic"
            alt="User"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          />
          {showProfileDropdown && (
            <div className="profile-dropdown">
              <div>Set status</div>
              <div>Feedback</div>
              <div>Profile & account</div>
              <div>Settings</div>
              <div>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
