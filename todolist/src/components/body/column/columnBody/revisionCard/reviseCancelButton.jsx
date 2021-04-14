import React from 'react';
import { ButtonNormal, ButtonNormalText } from '../../../../style/button-normal.jsx';

const ReviseCancelButton = props => {
  console.log(props.callback);
  return (
    <ButtonNormal
      onClick={() => {
        props.callback();
      }}
      className="modify-card-cancel-button-section"
    >
      <ButtonNormalText className="modify-card-cancel-button">취소</ButtonNormalText>
    </ButtonNormal>
  );
};

export default ReviseCancelButton;
