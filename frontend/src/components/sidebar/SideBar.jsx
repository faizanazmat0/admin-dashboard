import React, { useState } from "react";
import { Menu, AlignLeft, AlignJustify } from "lucide-react";
import "./sidebar.css";

const SideBar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const toggleSideBar = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <>
      {/* Logo and the Toggle Button */}
      <div className="sideBarConatiner">
        <div className="sideBar">
          {/* SideBar Toggle Button  */}
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
      </div>
    </>
  );
};

export default SideBar;
