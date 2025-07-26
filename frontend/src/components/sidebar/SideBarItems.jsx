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
        {/* Listings Items */}
        <div className="appListingWrapper">
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

/*
  import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  dashboardItems,
  appItems,
  pageItems,
  moduleItems,
  documentationItems
} from "./sidebaritems";
import { LayoutDashboard } from "lucide-react";
import "./sidebaritems.css";

const SideBarItems = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownRefs = useRef({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      Object.keys(dropdownRefs.current).forEach((id) => {
        const ref = dropdownRefs.current[id];
        if (ref && !ref.contains(e.target)) {
          setOpenDropdowns((prev) => ({ ...prev, [id]: false }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderItem = (item) => {
    const Icon = item.icon;
    const isOpen = openDropdowns[item.id];

    return (
      <div key={item.id} ref={(el) => (dropdownRefs.current[item.id] = el)}>
        {item.hasDropdown ? (
          <>
            <div className="sidebarLink" onClick={() => toggleDropdown(item.id)}>
              <Icon size={18} />
              <span>{item.label}</span>
              {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </div>
            {isOpen && (
              <div className="dropdownContent">
                {item.dropdownItems.map((subItem, i) => (
                  <Link key={i} to={subItem.href} className="dropdownItem">
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link className="sidebarLink" to={item.href}>
            <Icon size={18} />
            <span>{item.label}</span>
          </Link>
        )}
      </div>
    );
  };

  const renderSection = (id, title, items, isDashboard = false) => {
    const isOpen = openDropdowns[id];

    return (
      <div className="section">
        {isDashboard ? (
          <div ref={(el) => (dropdownRefs.current[id] = el)}>
            <div className="sidebarLink" onClick={() => toggleDropdown(id)}>
              <LayoutDashboard size={18} />
              <span>{title}</span>
              {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </div>
            {isOpen && (
              <div className="dropdownContent">
                {items.map((item, i) => (
                  <Link key={i} to={item.href} className="dropdownItem">
                    {item.label}
                    {item.tag && <span className="newTag">{item.tag}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <h5 className="sectionHeading">{title}</h5>
            <div className="sectionItems">
              {items.map(renderItem)}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="sidebar">
      {renderSection("dashboard", "Dashboard", dashboardItems, true)}
      {renderSection("app", "App", appItems)}
      {renderSection("pages", "Pages", pageItems)}
      {renderSection("modules", "Modules", moduleItems)}
      {renderSection("documentation", "Documentation", documentationItems)}
    </div>
  );
};

export default SideBarItems;


*/
