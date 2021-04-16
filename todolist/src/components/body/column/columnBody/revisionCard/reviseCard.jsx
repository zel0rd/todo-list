import React, { useState, useEffect } from 'react';
import RevisingTitle from './revisingTitle.jsx';
import RevisingContents from './revisingContents.jsx';
import ReviseCancelButton from './reviseCancelButton.jsx';
import ReviseButton from './reviseButton.jsx';
import ReviseButtonStyle from './buttons.style';
import ReviseCardStyle from './reviseCard.style';
import { getData, patchData } from '../../../../../utils/axios.js';

const ReviseCard = ({ props }) => {
  const [modifiedTitle, setModifiedTitle] = useState(props.cardTitle);
  const [modifiedContents, setModifiedContents] = useState(props.cardContents);

  const updateTitle = ({ target }) => {
    setModifiedTitle(target.value);
  };

  const updateContents = ({ target }) => {
    setModifiedContents(target.value);
  };

  const cancelRevision = () => {
    props.handleReviseFlag(false);
  };

  const postModifiedData = async () => {
    const url = `http://localhost:3002/column/${props.id}`;
    const response = await getData(url);

    const arrResponse = response.data.cards;
    const modifiedData = arrResponse.map(card => {
      if (card.cardTitle === modifiedTitle) {
        card.cardContents = modifiedContents;
      }
      return card;
    });

    let data = {
      // columnTitle: 'bye',
      cards: modifiedData,
      // id: 2,
    };

    patchData(url, data);
    props.getColumnData();
  };

  return (
    <ReviseCardStyle>
      <RevisingTitle callback={updateTitle} cardTitle={props.cardTitle} />
      <RevisingContents callback={updateContents} cardContents={props.cardContents} />
      <ReviseButtonStyle>
        <ReviseCancelButton callback={cancelRevision} />
        <ReviseButton id={props.id} cardTitle={props.cardTitle} cardContents={props.cardContents} modifiedTitle={modifiedTitle} modifiedContents={modifiedContents} postModifiedData={postModifiedData} />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
