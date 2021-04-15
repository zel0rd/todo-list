import React from "react";
import { CardDeleteBtn } from "./cardDeleteButton.style.jsx";

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
