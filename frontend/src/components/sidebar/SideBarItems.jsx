import React, { useState, useEffect, useRef } from "react";
import { LayoutDashboard, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import {
  pageItems,
  moduleItems,
  documentationItems,
  appItems,
} from "./sidebaritems.js";
import "./sidebaritems.css";

const SideBarItems = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const sidebarRef = useRef(null);
  // Function when user click outside, the drop down menu vanish automatically
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsDashboardOpen(false);
        setOpenMenus({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSection = (title, items) => {
    if (!items || items.length === 0) {
      console.error(`No items found for section: ${title}`);
      return null;
    }

    return (
      <div className="appContainer" key={title}>
        <div className="appHeading">
          <h5>{title}</h5>
          <div className="headingUnderLine"></div>
        </div>
        <div className="appListingWrapper">
          {items.map((item) => (
            <div key={item.id}>
              <Link
                to={item.href || "#"}
                className="appLink"
                onClick={(e) => {
                  if (item.hasDropdown) {
                    e.preventDefault();
                    toggleMenu(item.id);
                  }
                }}
              >
                {item.icon && React.createElement(item.icon, { size: 18 })}
                <span className="label">{item.label}</span>
                {item.tag && <span className="newTag">{item.tag}</span>}

                {item.hasDropdown &&
                  (openMenus[item.id] ? (
                    <ChevronUp size={16} style={{ marginLeft: "auto" }} />
                  ) : (
                    <ChevronDown size={16} style={{ marginLeft: "auto" }} />
                  ))}
              </Link>

              {item.hasDropdown && openMenus[item.id] && (
                <div className="submenu">
                  {item.dropdownItems?.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.href}
                      className="submenuItem"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar-wrapper" ref={sidebarRef}>
      <div className="sidebarItem" onClick={toggleDashboardMenu}>
        <div className="sidebarItemContent">
          <LayoutDashboard size={18} className="icon" />
          <span className="label">Dashboard</span>
        </div>
        {isDashboardOpen ? (
          <ChevronDown size={18} className="dropdownIcon" />
        ) : (
          <ChevronUp size={18} className="dropdownIcon" />
        )}
      </div>

      {/* Dropdown Content Section */}
      {isDashboardOpen && (
        <div className="dropdownContent">
          <Link className="dropdownItem active">Default</Link>
          <Link className="dropdownItem">Analytics</Link>
          <Link className="dropdownItem">CRM</Link>
          <Link className="dropdownItem">E commerce</Link>
          <Link className="dropdownItem withTag">
            LMS
            <span className="newTag">NEW</span>
          </Link>
          <Link className="dropdownItem">Management</Link>
          <Link className="dropdownItem">Saas</Link>
          <Link className="dropdownItem withTag">
            Support desk
            <span className="newTag">NEW</span>
          </Link>
        </div>
      )}

      {/* App Section */}
      {renderSection("App", appItems)}
      {/* Pages Section */}
      {renderSection("Pages", pageItems)}

      {/* Modules Section */}
      {renderSection("Modules", moduleItems)}
      {/* Documentation Section */}
      {renderSection("Documentation", documentationItems)}
    </div>
  );
};

export default SideBarItems;
