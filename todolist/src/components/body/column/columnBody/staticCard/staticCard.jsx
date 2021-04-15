import React, { useState, useEffect } from 'react';
import CardTitle from './cardTitle.jsx';
import CardContents from './cardContents.jsx';
import CardAuthor from './cardAuthor.jsx';
import CardDeleteButton from './cardDeleteButton.jsx';
import StaticCardStyle from './staticCard.style';
import CardTextWrapper from './cardTextWrapper.style';
import ReviseCard from '../revisionCard/reviseCard';

const StaticCard = props => {
  const [canceled, setCanceled] = useState(false);
  const [deleteButtonFlag, setDeleteButtonFlag] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    borderStyle: 'none',
    backgroundColor: '#fff',
  });

  const handleCancelFlag = flag => {
    setCanceled(flag);
  };

  const handleDeleteButtonFlag = () => {
    if (deleteButtonFlag) {
      setDeleteButtonFlag(false);
      setCardStyle({
        borderStyle: 'none',
        backgroundColor: '#fff',
      });
    } else {
      setDeleteButtonFlag(true);
      setCardStyle({
        borderStyle: '1px solid red',
        backgroundColor: '#ffeeec',
      });
    }
  };

  const defaultCard = (
    <>
      <CardTextWrapper>
        <CardTitle cardTitle={props.cardTitle} />
        <CardContents cardContents={props.cardContents} />
        <CardAuthor user={props.user} />
      </CardTextWrapper>
      <CardDeleteButton
        handleDeleteButtonFlag={handleDeleteButtonFlag}
        handleModalFlag={props.handleModalFlag}
      />
    </>
  );

  const InnerCard = props => {
    if (canceled) {
      return (
        <ReviseCard
          cardTitle={props.cardTitle}
          cardContents={props.cardContents}
          user={props.user}
          id={props.id}
          cardid={props.cardid}
          handleCancelFlag={handleCancelFlag}
          handleDeleteButtonFlag={handleDeleteButtonFlag}
          getColumnData={props.getColumnData}
          handleModifiedFlag={props.handleModifiedFlag}
          handleModifiedTitle={props.handleModifiedTitle}
          handleModifiedContents={props.handleModifiedContents}
        />
      );
    }

    return defaultCard;
  };

  return (
    <StaticCardStyle
      cardStyle={cardStyle}
      onDoubleClick={() => {
        handleCancelFlag(true);
      }}
      className="static-card"
    >
      <InnerCard
        cardTitle={props.cardTitle}
        cardContents={props.cardContents}
        user={props.user}
        id={props.id}
        cardid={props.cardid}
        handleCancelFlag={handleCancelFlag}
        handleDeleteButtonFlag={handleDeleteButtonFlag}
        getColumnData={props.getColumnData}
        handleModifiedFlag={props.handleModifiedFlag}
        handleModifiedTitle={props.handleModifiedTitle}
        handleModifiedContents={props.handleModifiedContents}
      />
    </StaticCardStyle>
  );
};

export default StaticCard;
