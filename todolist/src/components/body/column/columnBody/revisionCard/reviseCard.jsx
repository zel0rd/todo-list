import React, { useState, useEffect } from 'react';
import RevisingTitle from './revisingTitle.jsx';
import RevisingContents from './revisingContents.jsx';
import ReviseCancelButton from './reviseCancelButton.jsx';
import ReviseButton from './reviseButton.jsx';
import ReviseButtonStyle from './buttons.style';
import ReviseCardStyle from './reviseCard.style';

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
    props.handleModifyFlag(false);
  };

  const registerRevision = e => {
    props.handleRegisterFlag(true);
    props.handleModifyFlag(false);
    props.patchModifiedData(e);
  };

  return (
    <ReviseCardStyle>
      <RevisingTitle
        updateTitle={updateTitle}
        cardTitle={props.cardTitle}
        handleModifiedCard={props.handleModifiedCard}
      />
      <RevisingContents
        updateContents={updateContents}
        cardContents={props.cardContents}
        handleModifiedCard={props.handleModifiedCard}
      />
      <ReviseButtonStyle>
        <ReviseCancelButton cancelRevision={cancelRevision} />
        <ReviseButton registerRevision={registerRevision} />
      </ReviseButtonStyle>
    </ReviseCardStyle>
  );
};

export default ReviseCard;
