import React from "react";
import { WorkHistoryDiv } from "./logCards.style.jsx";

const WorkHistory = ({ columnTitle, cardTitle, action }) => {
  return (
    <WorkHistoryDiv className="work-history">
      [{columnTitle}] 에 [{cardTitle}] 를 [{action}] 하였습니다.
    </WorkHistoryDiv>
  );
};

export default WorkHistory;
