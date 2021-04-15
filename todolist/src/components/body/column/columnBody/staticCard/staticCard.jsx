import React, { useState, useEffect } from 'react';
import CardTitle from './cardTitle.jsx';
import CardContents from './cardContents.jsx';
import CardAuthor from './cardAuthor.jsx';
import CardDeleteButton from './cardDeleteButton.jsx';
import StaticCardStyle from './staticCard.style';
import CardTextWrapper from './cardTextWrapper.style';
import ReviseCard from '../revisionCard/reviseCard';

const StaticCard = props => {
  const [modifying, setmodifying] = useState(false);

  const handleReviseFlag = flag => {
    setmodifying(flag);
  };

  const defaultCard = (
    <>
      <CardTextWrapper>
        <CardTitle cardTitle={props.cardTitle} />
        <CardContents cardContents={props.cardContents} />
        <CardAuthor user={props.user} />
      </CardTextWrapper>
      <CardDeleteButton handleModalFlag={props.handleModalFlag} />
    </>
  );

  const InnerCard = props => {
    if (modifying) {
      return <ReviseCard props={props} />;
    }
    return defaultCard;
  };

  return (
    <StaticCardStyle
      onDoubleClick={() => {
        handleReviseFlag(true);
      }}
      className="static-card"
    >
      <InnerCard cardTitle={props.cardTitle} cardContents={props.cardContents} user={props.user} id={props.id} handleReviseFlag={handleReviseFlag} getColumnData={props.getColumnData} />
    </StaticCardStyle>
  );
};

export default StaticCard;
