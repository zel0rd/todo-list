import React, { useState } from 'react';
import RevisingTitle from './revisingTitle.jsx';
import RevisingContents from './revisingContents.jsx';
import ReviseCancelButton from './reviseCancelButton.jsx';
import ReviseButton from './reviseButton.jsx';
import { getData } from '../../../../../utils/axios.js';
import ReviseButtonStyle from './buttons.style';
import ReviseCardStyle from './reviseCard.style';

const ReviseCard = ({ props }) => {
  const cancelRevision = () => {
    props.handleReviseFlag(false);
  };

  return (
    <ReviseCardStyle>
      <RevisingTitle cardTitle={props.cardTitle} />
      <RevisingContents cardContents={props.cardContents} />
      <ReviseButtonStyle>
        <ReviseCancelButton callback={cancelRevision} />
        <ReviseButton id={props.id} cardTitle={props.cardTitle} cardContents={props.cardContents} />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
