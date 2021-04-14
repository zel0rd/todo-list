import React from "react";
import {
  ButtonNormal,
  ButtonNormalText,
} from "../../../../style/button-normal.jsx";

const ModifyCardCancelButton = () => {
  return (
    <ButtonNormal className="modify-card-cancel-button-section">
      <ButtonNormalText className="modify-card-cancel-button">
        취소
      </ButtonNormalText>
    </ButtonNormal>
  );
};

export default ModifyCardCancelButton;
