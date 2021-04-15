import React from "react";
import ModifyCard from "./modifyCard/modifyCard.jsx";
import StaticCard from "./staticCard/staticCard.jsx";
import { InitialCardsRenderDiv } from "./columnBody.style.jsx";

const ColumnBody = props => {
  let modifyCard;

  props.modifyCardFlag ? (modifyCard = <ModifyCard props={props} />) : (modifyCard = null);

  return (
    <>
      {modifyCard}
      {props.cards.length === 0 ? (
        <InitialCardsRenderDiv>등록된 일정이 없습니다 !</InitialCardsRenderDiv>
      ) : (
        props.cards.map(({ cardTitle, cardContents }, index) => (
          <StaticCard
            key={index}
            handleModalFlag={props.handleModalFlag}
            cardTitle={cardTitle}
            cardContents={cardContents}
            user={props.user}
          />
        ))
      )}
    </>
  );
};

export default ColumnBody;
