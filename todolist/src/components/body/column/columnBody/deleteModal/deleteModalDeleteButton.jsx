import React from "react";
import {
  ButtonAccent,
  ButtonAccentText,
} from "../../../../icons/button-accent.jsx";

const DeleteModalDeleteButton = ({
  handleModalDeleteButton,
  handleModalFlag,
}) => {
  return (
    <ButtonAccent
      onClick={() => {
        handleModalFlag();
        handleModalDeleteButton();
      }}
    >
      <ButtonAccentText>삭제</ButtonAccentText>
    </ButtonAccent>
  );
};

export default DeleteModalDeleteButton;
