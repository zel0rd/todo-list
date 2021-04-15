import React, { useState, useEffect } from 'react';
import RevisingTitle from './revisingTitle.jsx';
import RevisingContents from './revisingContents.jsx';
import ReviseCancelButton from './reviseCancelButton.jsx';
import ReviseButton from './reviseButton.jsx';
import ReviseButtonStyle from './buttons.style';
import ReviseCardStyle from './reviseCard.style';
import { getData, patchData } from '../../../../../utils/axios.js';

const ReviseCard = props => {
  const [modifiedTitle, setModifiedTitle] = useState(props.cardTitle);
  const [modifiedContents, setModifiedContents] = useState(props.cardContents);

  const updateTitle = ({ target }) => {
    setModifiedTitle(target.value);
  };

  const updateContents = ({ target }) => {
    setModifiedContents(target.value);
  };

  const cancelRevision = () => {
    props.handleCancelFlag(false);
  };

  const registerRevision = () => {
    props.handleModifiedFlag(true);
    props.handleCancelFlag(false);
  };

  const patchModifiedData = async () => {
    const url = `http://localhost:3002/column/${props.id}`;
    const response = await getData(url);
    const arrResponse = response.data.cards;

    const modifiedData = arrResponse.map(card => {
      if (card.cardid === props.cardid) {
        card.cardTitle = modifiedTitle;
        card.cardContents = modifiedContents;
      }
      return card;
    });

    let data = {
      cards: modifiedData,
    };

    patchData(url, data);
  };

  return (
    <ReviseCardStyle>
      <RevisingTitle
        updateTitle={updateTitle}
        cardTitle={props.cardTitle}
        handleModifiedTitle={props.handleModifiedTitle}
      />
      <RevisingContents
        updateContents={updateContents}
        cardContents={props.cardContents}
      />
      <ReviseButtonStyle>
        <ReviseCancelButton cancelRevision={cancelRevision} />
        <ReviseButton patchModifiedData={patchModifiedData} />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
