import React, { useState } from "react";
import Header from "./components/header/header.jsx";
import Body from "./components/body/body.jsx";
import Log from "./components/log/log.jsx";
import "./styles/style.scss";

const App = () => {
  const [logRenderFlag, setlogRenderFlag] = useState(false);

  const handleLogRender = () => {
    logRenderFlag === true ? setlogRenderFlag(false) : setlogRenderFlag(true);
  }

  return (
    <div className="app">
      <Header handleLogRender={handleLogRender} />
      <Body />
      {logRenderFlag === true ? <Log handleLogRender={handleLogRender} /> : null}
    </div>
  );
};

export default App;
