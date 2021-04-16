import React from "react";
import { MenuBtn } from "./header.style.jsx";

const ShowLogButton = ({ handleLogRender }) => {
  return (
    <div className="show-log-button-section">
      <MenuBtn className="show-log-button" onClick={handleLogRender} />
    </div>
  );
};

export default ShowLogButton;
