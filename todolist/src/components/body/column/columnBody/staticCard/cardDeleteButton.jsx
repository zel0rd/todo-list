import React from "react";
import CardDeleteBtn from "./cardDeleteButton.style.jsx";

const CardDeleteButton = ({ handleDeleteButtonFlag, handleModalFlag }) => {
  return (
    <CardDeleteBtn
      onMouseEnter={handleDeleteButtonFlag}
      onMouseLeave={handleDeleteButtonFlag}
      onClick={handleModalFlag}
    />
  );
};

export default CardDeleteButton;
