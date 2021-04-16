import React from "react";
import HeaderTitle from "./headerTitle.jsx";
import ShowLogButton from "./showLogButton.jsx";
import { HeaderContainer } from "./header.style.jsx";

const Header = ({ handleLogRender }) => {
  return (
    <section className="header">
      <HeaderContainer>
        <HeaderTitle />
        <ShowLogButton handleLogRender={handleLogRender} />
      </HeaderContainer>
    </section>
  );
};

export default Header;
