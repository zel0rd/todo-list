import React, { useState, useEffect } from 'react';
import RevisingTitle from './revisingTitle.jsx';
import RevisingContents from './revisingContents.jsx';
import ReviseCancelButton from './reviseCancelButton.jsx';
import ReviseButton from './reviseButton.jsx';
import ReviseButtonStyle from './buttons.style';
import ReviseCardStyle from './reviseCard.style';
import { getData, patchData } from '../../../../../utils/axios.js';

const ReviseCard = props => {
  console.log(props);
  const [modifiedTitle, setModifiedTitle] = useState(props.cardTitle);
  const [modifiedContents, setModifiedContents] = useState(props.cardContents);

  const updateTitle = ({ target }) => {
    setModifiedTitle(target.value);
  };

  const updateContents = ({ target }) => {
    setModifiedContents(target.value);
  };

  // useEffect(() => {
  //   console.log(modifiedContents);
  // }, [modifiedContents]);

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
    props.handleModifiedFlag(true);
  };

  return (
    <ReviseCardStyle>
      <RevisingTitle updateTitle={updateTitle} cardTitle={props.cardTitle} />
      <RevisingContents updateContents={updateContents} cardContents={props.cardContents} />
      <ReviseButtonStyle>
        <ReviseCancelButton cancelRevision={cancelRevision} />
        <ReviseButton id={props.id} cardTitle={props.cardTitle} cardContents={props.cardContents} modifiedTitle={modifiedTitle} modifiedContents={modifiedContents} handleModifiedFlag={props.handleModifiedFlag} patchModifiedData={patchModifiedData} />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
