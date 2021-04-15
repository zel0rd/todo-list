import React from "react";
import {
  ButtonAccent,
  ButtonAccentText,
} from "../../../../style/button-accent.jsx";

const ReviseButton = (props) => {
  return (
    <ButtonAccent
      onClick={() => {
        props.postModifiedData();
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
