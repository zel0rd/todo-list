import React from 'react';
import { ButtonAccent, ButtonAccentText } from '../../../../style/button-accent.jsx';
import { getData, patchData, postData, getRandomUser } from '../../../../../utils/axios.js';

const ReviseButton = props => {
  const postModifiedData = async () => {
    const url = `http://localhost:3002/column/${props.id}/id`;
    const foo = await getData(url);
    console.log(foo);
  };

  return (
    <ButtonAccent onClick={postModifiedData} className="revise-card-cancel-button-section">
      <ButtonAccentText className="revise-card-cancel-button">수정</ButtonAccentText>
    </ButtonAccent>
  );
};

export default ReviseButton;
