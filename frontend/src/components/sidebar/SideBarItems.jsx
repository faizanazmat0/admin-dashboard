import React, { useState } from "react";
import {
  LayoutDashboard,
  ChevronUp,
  ChevronDown,
  CalendarDays,
  MessagesSquare,
  MailOpen,
  ShoppingCart,
  GraduationCap,
  Share2,
  Trello,
  TicketPlus,
} from "lucide-react";
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

      {/* App Section  */}

      <div className="appContainer">
        <div className="appHeading">
          <h5>App</h5>
          <div className="headingUnderLine"></div>
        </div>
        <div className="appListings">
          <div>
            <Link className="appLink">
              <CalendarDays size={18} />
              Calendar
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <MessagesSquare size={18} />
              Chat
            </Link>
          </div>
          <div>
            <Link className="appLink">
              <MailOpen size={18} />
              Email
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <CalendarDays size={18} />
              Events
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <ShoppingCart size={18} />E commerce
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <GraduationCap size={18} />E learning
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <Trello size={18} />
              Kanban
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <Share2 size={18} />
              Social
            </Link>
          </div>

          <div>
            <Link className="appLink">
              <TicketPlus size={18} />
              Support desk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarItems;
