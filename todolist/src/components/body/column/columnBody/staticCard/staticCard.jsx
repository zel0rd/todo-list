import React, { useState } from 'react';
import CardTitle from './cardTitle.jsx';
import CardContents from './cardContents.jsx';
import CardAuthor from './cardAuthor.jsx';
import CardDeleteButton from './cardDeleteButton.jsx';
import StaticCardStyle from './staticCard.style';
import CardTextWrapper from './cardTextWrapper.style';
import ReviseCard from '../revisionCard/reviseCard';

const StaticCard = ({ cardTitle, cardContents, user, id }) => {
  const [modifying, setmodifying] = useState(false);

  const InnerCard = () => {
    if (modifying) {
      return <ReviseCard cardTitle={cardTitle} cardContents={cardContents} id={id} />;
    }
    return (
      <>
        <CardTextWrapper>
          <CardTitle cardTitle={cardTitle} />
          <CardContents cardContents={cardContents} />
          <CardAuthor user={user} />
        </CardTextWrapper>
        <CardDeleteButton />
      </>
    );
  };

  const handleReviseFlag = () => {
    setmodifying(true);
  };

  return (
    <StaticCardStyle onDoubleClick={handleReviseFlag} className="static-card">
      <InnerCard />
    </StaticCardStyle>
  );
};

export default StaticCard;
