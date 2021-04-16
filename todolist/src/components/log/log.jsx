import React, { useState, useEffect } from "react";
import LogHeader from "./logHeader/logHeader.jsx";
import LogCards from "./logCards/logCards.jsx";
import { getData } from "../../utils/axios.js";
import { LogDiv, LogContentsDiv } from "./log.style.jsx";

const Log = ({ handleLogRender }) => {
  const [logCards, setLogCards] = useState([]);
  const reversedLogCards = logCards.reverse();
  const getLogData = () => {
    getData("http://141.164.43.40:3002/log") //
      .then((res) => setLogCards(res.data));
  };

  useEffect(() => {
    getLogData();
  }, []);

  return (
    <LogDiv className="log">
      <LogHeader handleLogRender={handleLogRender} />
      <LogContentsDiv>
        {reversedLogCards.map((logData, index) => (
          <LogCards key={index} logData={logData} />
        ))}
      </LogContentsDiv>
    </LogDiv>
  );
};

export default Log;
