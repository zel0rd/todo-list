import React from "react";
import { LogHideButtonDiv } from "./logHeader.style.jsx";
import { ReactComponent as HideBtn } from "../../icons/deleteIcon.svg";

const LogHideButton = ({ handleLogRender }) => {
  return (
    <LogHideButtonDiv>
      <HideBtn onClick={handleLogRender} />
    </LogHideButtonDiv>
  );
};

export default LogHideButton;
