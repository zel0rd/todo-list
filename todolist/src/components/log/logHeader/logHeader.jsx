import React from "react";
import LogHeaderStyle from "./logHeader.style.jsx";
import LogHideButton from "./logHideButton.jsx";

const LogHeader = ({ handleLogRender }) => {
  return (
    <LogHeaderStyle className="log-header-section">
      <LogHideButton handleLogRender={handleLogRender} />
    </LogHeaderStyle>
  );
};

export default LogHeader;
