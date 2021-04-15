import React from "react";
import styled from "styled-components";
import { CardDeleteBtn } from "./cardDeleteButton.style.jsx";

const testDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`;

const CardDeleteButton = (props) => {
  return (
    <div
      id={props.columnid}
      className={props.cardid}
      onMouseEnter={props.handleDeleteButtonFlag}
      onMouseLeave={props.handleDeleteButtonFlag}
      onClick={(e) => {
        props.handleModalFlag();
        props.deleteCardData(e);
      }}
    >
      <CardDeleteBtn />
    </div>
  );
};

export default CardDeleteButton;
