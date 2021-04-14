import React from "react";
import CardTitle from "./cardTitle.jsx";
import CardContents from "./cardContents.jsx";
import CardAuthor from "./cardAuthor.jsx";
import CardDeleteButton from "./cardDeleteButton.jsx";
import StaticCardStyle from "./staticCard.style";
import CardTextWrapper from "./cardTextWrapper.style";

const StaticCard = (props) => {
  return (
    <StaticCardStyle className="static-card">
      <CardTextWrapper>
        <CardTitle cardTitle={props.cardTitle} />
        <CardContents cardContents={props.cardContents} />
        <CardAuthor user={props.user} />
      </CardTextWrapper>
      <CardDeleteButton handleModalFlag={props.handleModalFlag} />
    </StaticCardStyle>
  );
};

export default StaticCard;
