import React from 'react';
import { ButtonNormal, ButtonNormalText } from '../../../../style/button-normal.jsx';

const ReviseCancelButton = e => {
  function getCardData(e) {
    e.preventDefault();
    console.log('hi');
    // const url = `http://localhost:3002/column?id=${id}`;
    // const response = await getData(url);
    // const initialData = await response.json();
    // console.log(initialData);
    // console.log(target.parentNode.parentNode.parentNode);
  }
  return (
    <ButtonNormal className="modify-card-cancel-button-section">
      <ButtonNormalText className="modify-card-cancel-button">취소</ButtonNormalText>
    </ButtonNormal>
  );
};

export default ReviseCancelButton;
