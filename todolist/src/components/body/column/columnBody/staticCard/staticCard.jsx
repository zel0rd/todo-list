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
  const [deleteButtonFlag, setDeleteButtonFlag] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    borderStyle: "none",
    backgroundColor: "#fff",
  });

  const InnerCard = ({ handleDeleteButtonFlag }) => {
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
        <CardDeleteButton
          handleDeleteButtonFlag={handleDeleteButtonFlag}
          handleModalFlag={props.handleModalFlag}
        />
      </>
    );
  };

  const handleDeleteButtonFlag = () => {
    if (deleteButtonFlag) {
      setDeleteButtonFlag(false);
      setCardStyle({
        borderStyle: "none",
        backgroundColor: "#fff",
      });
    } else {
      setDeleteButtonFlag(true);
      setCardStyle({
        borderStyle: "1px solid red",
        backgroundColor: "#ffeeec",
      });
    }
  };

  const handleReviseFlag = () => {
    setmodifying(true);
  };

  return (
    <StaticCardStyle cardStyle={cardStyle} onDoubleClick={handleReviseFlag}>
      <InnerCard handleDeleteButtonFlag={handleDeleteButtonFlag} />
    </StaticCardStyle>
  );
};

export default StaticCard;
