import React from "react";
import Emoji from "./emoji.jsx";
import LogCardAuthor from "./logCardAuthor.jsx";
import WorkHistory from "./workHistory.jsx";
import HistoryTime from "./historyTime.jsx";
import { LogContentsDiv, LogCardsDiv } from "./logCards.style.jsx";

const LogCards = ({ logData }) => {
  return (
    <LogCardsDiv>
      <Emoji emoji={"👉"} />
      <LogContentsDiv>
        <LogCardAuthor user={logData.user} />
        <WorkHistory
          columnTitle={logData.columnTitle}
          cardTitle={logData.cardTitle}
          action={logData.action}
        />
        <HistoryTime time={logData.time} />
      </LogContentsDiv>
    </LogCardsDiv>
  );
};

export default LogCards;
