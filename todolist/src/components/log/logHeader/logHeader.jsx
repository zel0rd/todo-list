import React from "react";
import { LogHeaderDiv } from "./logHeader.style.jsx";
import LogHideButton from "./logHideButton.jsx";

const LogHeader = ({ handleLogRender }) => {
  return (
    <LogHeaderDiv className="log-header-section">
      <LogHideButton handleLogRender={handleLogRender} />
    </LogHeaderDiv>
  );
};

export default LogHeader;
