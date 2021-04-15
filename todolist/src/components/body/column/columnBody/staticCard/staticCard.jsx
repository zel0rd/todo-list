import React, { useState } from "react";
import CardTitle from "./cardTitle.jsx";
import CardContents from "./cardContents.jsx";
import CardAuthor from "./cardAuthor.jsx";
import CardDeleteButton from "./cardDeleteButton.jsx";
import StaticCardStyle from "./staticCard.style";
import CardTextWrapper from "./cardTextWrapper.style";
import ReviseCard from "../revisionCard/reviseCard";

const StaticCard = (props) => {
  const [modifying, setModifying] = useState(false);
  const [deleteButtonFlag, setDeleteButtonFlag] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    borderStyle: "none",
    backgroundColor: "#fff",
  });

  const handleReviseFlag = (flag) => {
    setModifying(flag);
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

  const defaultCard = (
    <>
      <CardTextWrapper>
        <CardTitle cardTitle={props.cardTitle} />
        <CardContents cardContents={props.cardContents} />
        <CardAuthor user={props.user} />
      </CardTextWrapper>
      <CardDeleteButton
        columnid={props.id}
        cardid={props.cardid}
        deleteCardData={props.deleteCardData}
        handleDeleteButtonFlag={handleDeleteButtonFlag}
        handleModalFlag={props.handleModalFlag}
      />
    </>
  );

  const InnerCard = (props) => {
    if (modifying) {
      return <ReviseCard props={props} />;
    }
    return defaultCard;
  };

  return (
    <StaticCardStyle
      cardStyle={cardStyle}
      onDoubleClick={() => {
        handleReviseFlag(true);
      }}
    >
      <InnerCard
        cardTitle={props.cardTitle}
        cardContents={props.cardContents}
        user={props.user}
        id={props.id}
        cardID={props.cardID}
        handleReviseFlag={handleReviseFlag}
        handleDeleteButtonFlag={handleDeleteButtonFlag}
        getColumnData={props.getColumnData}
      />
    </StaticCardStyle>
  );
};

export default StaticCard;
