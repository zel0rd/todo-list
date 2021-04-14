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

  async function getCardData() {
    const url = `http://localhost:3002/column?id=${2}`;
    const foo = await getData(url);
    console.log(foo);
    // console.log(target.parentNode.parentNode.parentNode);
  }

  return (
    <ReviseCardStyle>
      <RevisingTitle cardTitle={cardTitle} handleButtonFlag={handleButtonFlag} />
      <RevisingContents cardContents={cardContents} handleButtonFlag={handleButtonFlag} />
      <ReviseButtonStyle>
        <ReviseCancelButton callback={getCardData} />
        <ReviseButton />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
