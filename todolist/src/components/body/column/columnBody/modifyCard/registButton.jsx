import React from 'react';
import { ButtonAccent, ButtonAccentText } from '../../../../style/button-accent.jsx';

const RegistButton = ({ id, buttonFlag, patchCardData }) => {
  return (
    <div
      id={id}
      onClick={(e) => patchCardData(e)}
      className="regist-button-section"
    >
      <ButtonAccent id={id} disabled={buttonFlag} className="regist-button">
        <ButtonAccentText id={id}>등록</ButtonAccentText>
      </ButtonAccent>
    </div>
  );
};

export default RegistButton;
