import React, { useState } from "react";
import AppDiv from "./App.style.jsx";
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import Log from "./components/log/log.jsx";

import "./style.scss";
import "./reset.scss";

const App = () => {
  const [show, setShow] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);
  const [appBackground, setAppBackground] = useState("#f5f5f7")

  const handleModalFlag = () => {
    if (modalFlag === false) {
      setModalFlag(true)
      setAppBackground("#939395")
    }
    else {
      setModalFlag(false)
      setAppBackground("#f5f5f7")
    }
  };

  const handleLogRender = () => {
    setShow(false);
  }
  const renderLoghandler = () => {
    setShow(true);
  }

  return (
    <AppDiv backgroundColor={appBackground}>
      <Header renderLoghandler={renderLoghandler} />
      <Body modalFlag={modalFlag} handleModalFlag={handleModalFlag} />
      {show ? <Log handleLogRender={handleLogRender} /> : null}
    </AppDiv>
  );
};

export default App;
