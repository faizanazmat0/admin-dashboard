import React, { useState } from "react";
import { LayoutDashboard, ChevronUp, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import "./sidebaritems.css";

const SideBarItems = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <>
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
          <div className="dropdownItem active">Default</div>
          <div className="dropdownItem">Analytics</div>
          <div className="dropdownItem">CRM</div>
          <div className="dropdownItem">E commerce</div>
          <div className="dropdownItem withTag">
            LMS
            <span className="newTag">NEW</span>
          </div>
          <div className="dropdownItem">Management</div>
          <div className="dropdownItem">Saas</div>
       <div className="dropdownItem withTag">
           Support desk
            <span className="newTag">NEW</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBarItems;
