import React from "react";
import {
  ButtonAccent,
  ButtonAccentText,
} from "../../../../style/button-accent.jsx";

const DeleteModalDeleteButton = ({ handleModalFlag }) => {
  return (
    <ButtonAccent
      onClick={() => {
        handleModalFlag();
      }}
    >
      <ButtonAccentText>삭제</ButtonAccentText>
    </ButtonAccent>
  );
};

export default DeleteModalDeleteButton;
