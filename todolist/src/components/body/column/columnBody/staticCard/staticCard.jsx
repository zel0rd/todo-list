import React, { useState } from "react";
import CardTitle from "./cardTitle.jsx";
import CardContents from "./cardContents.jsx";
import CardAuthor from "./cardAuthor.jsx";
import CardDeleteButton from "./cardDeleteButton.jsx";
import StaticCardStyle from "./staticCard.style";
import CardTextWrapper from "./cardTextWrapper.style";
import ReviseCard from "../revisionCard/reviseCard";

const StaticCard = (props) => {
  const [modifying, setmodifying] = useState(false);

  const InnerCard = ({ props }) => {
    if (modifying) {
      return (
        <ReviseCard
          cardTitle={props.cardTitle}
          cardContents={props.cardContents}
          id={props.id}
        />
      );
    }
    return (
      <>
        <CardTextWrapper>
          <CardTitle cardTitle={props.cardTitle} />
          <CardContents cardContents={props.cardContents} />
          <CardAuthor user={props.user} />
        </CardTextWrapper>
        <CardDeleteButton handleModalFlag={props.handleModalFlag} />
      </>
    );
  };

  const handleReviseFlag = () => {
    setmodifying(true);
  };

  return (
    <StaticCardStyle onDoubleClick={handleReviseFlag} className="static-card">
      <InnerCard props={props} />
    </StaticCardStyle>
  );
};

export default StaticCard;
