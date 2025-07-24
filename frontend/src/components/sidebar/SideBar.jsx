import React, { useState } from "react";
import { AlignLeft, AlignJustify } from "lucide-react";
import "./sidebar.css";
import SideBarItems from "./SideBarItems";

const SideBar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const toggleSideBar = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <>
      <div className="sideBarWrapper">
        {/* Logo and the Toggle Button */}

        <div className="sideBarConatiner">
          {/* SideBar Toggle Button */}
          <div className="toggleWrapper">
            <button onClick={toggleSideBar} className="toggleButton">
              {isCollapse ? (
                <AlignLeft side={18} />
              ) : (
                <AlignJustify size={25} />
              )}
              <span className="toggleToolTip">Toggle Navigation</span>
            </button>
          </div>
          <img
            src="	https://prium.github.io/falcon/v3.24.0/assets/img/icons/spot-illustrations/falcon.png"
            alt="Logo"
          />
          <span>falcon</span>
        </div>

        {/* Sidebar Item Section */}
        <section className="itemsWrapper">
          <SideBarItems />
        </section>
      </div>
    </>
  );
};

export default SideBar;
