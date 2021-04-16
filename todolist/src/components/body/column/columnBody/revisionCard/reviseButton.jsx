import React from "react";
import {
  ButtonAccent,
  ButtonAccentText,
} from "../../../../icons/button-accent.jsx";

const ReviseButton = (props) => {
  return (
    <ButtonAccent
      onClick={(e) => {
        props.registerRevision(e);
      }}
      className="revise-card-cancel-button-section"
    >
      <ButtonAccentText className="revise-card-cancel-button">
        수정
      </ButtonAccentText>
    </ButtonAccent>
  );
};

export default ReviseButton;
