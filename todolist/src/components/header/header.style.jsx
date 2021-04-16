import styled from "styled-components";
import { ReactComponent as menuBtn } from "../icons/showLogButton.svg";

const MenuBtn = styled(menuBtn)`
  /* position: absolute; */
  width: 24px;
  height: 24px;
  top: 50px;
  right: 100px;
  cursor: pointer;

  position: fixed !important;
  transition: all 0.6s ease-in-out;
  bottom: 5%;
  right: 5%;
`;

const HeaderTitleSpan = styled.span`
  position: absolute;
  width: 171px;
  height: 46px;
  left: 80px;
  top: 33px;

  font-weight: normal;
  font-size: 32px;
  line-height: 46px;

  color: #010101;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { MenuBtn, HeaderTitleSpan, HeaderContainer };
