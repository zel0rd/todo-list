import React from "react";
import {
  ButtonNormal,
  ButtonNormalText,
} from "../../../../icons/button-normal.jsx";

const ReviseCancelButton = (props) => {
  return (
    <ButtonNormal
      onClick={() => {
        props.cancelRevision();
      }}
      className="modify-card-cancel-button-section"
    >
      <ButtonNormalText className="modify-card-cancel-button">
        취소
      </ButtonNormalText>
    </ButtonNormal>
  );
};

export default ReviseCancelButton;
