import React, { useState } from 'react';
import RevisingTitle from './revisingTitle.jsx';
import RevisingContents from './revisingContents.jsx';
import ReviseCancelButton from './reviseCancelButton.jsx';
import ReviseButton from './reviseButton.jsx';
import { getData } from '../../../../../utils/axios.js';
import ReviseButtonStyle from './buttons.style';
import ReviseCardStyle from './reviseCard.style';

const ReviseCard = ({ cardTitle, cardContents, id, callback }) => {
  const [buttonFlag, setButtonFlag] = useState(true);

  const handleButtonFlag = ({ target: { value } }) => {
    setButtonFlag(false);
  };

  function getCardData(e) {
    e.preventDefault();
    debugger;
    // const url = `http://localhost:3002/column?id=${id}`;
    // const response = await getData(url);
    // const initialData = await response.json();
    // console.log(initialData);
    // console.log(target.parentNode.parentNode.parentNode);
  }

  return (
    <ReviseCardStyle>
      <RevisingTitle cardTitle={cardTitle} handleButtonFlag={handleButtonFlag} />
      <RevisingContents cardContents={cardContents} handleButtonFlag={handleButtonFlag} />
      <ReviseButtonStyle>
        <ReviseCancelButton onClick={getCardData} />
        <ReviseButton />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
