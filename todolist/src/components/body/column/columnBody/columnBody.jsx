import React from "react";
import ModifyCard from "./modifyCard/modifyCard.jsx";
import StaticCard from "./staticCard/staticCard.jsx";
import { InitialCardsRenderDiv } from "./columnBody.style.jsx";

const ColumnBody = (props) => {
  let modifyCard;

  props.modifyCardFlag === true
    ? (modifyCard = <ModifyCard props={props} />)
    : (modifyCard = null);

  return (
    <>
      {modifyCard}

      {props.cards.length === 0 ? (
        <InitialCardsRenderDiv>등록된 일정이 없습니다 !</InitialCardsRenderDiv>
      ) : (
        props.cards.map(
          ({ cardid, cardTitle, cardContents }) => (
            cardContents === undefined
              ? (cardContents = "empty")
              : cardContents,
            (
              <StaticCard
                key={cardid}
                id={props.id}
                deleteCardData={props.deleteCardData}
                handleModalFlag={props.handleModalFlag}
                user={props.user}
                getColumnData={props.getColumnData}
                cardid={cardid}
                cardTitle={cardTitle}
                cardContents={cardContents}
                handleModifiedCard={props.handleModifiedCard}
                getCardData={props.getCardData}
                patchModifiedData={props.patchModifiedData}
              />
            )
          )
        )
      )}
    </>
  );
};

export default ColumnBody;
