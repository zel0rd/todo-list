import React from "react";
import ColumnTitle from "./columnTitle.jsx";
import CountCards from "./countCards.jsx";
import AddCardButton from "./addCardButton.jsx";
import DeleteColumnButton from "./deleteColumnButton.jsx";
import { ColumnTitleDiv, ColumnHeaderSpan } from "./columnHeader.style.jsx";

const ColumnHeader = (props) => {
  return (
    <ColumnHeaderSpan>
      <ColumnTitleDiv>
        <ColumnTitle columnTitle={props.columnTitle} />
        <CountCards cardsNumber={props.cards.length} />
      </ColumnTitleDiv>
      <AddCardButton
        id={props.id}
        handleAddButtonClick={props.handleAddButtonClick}
      />
      <DeleteColumnButton id={props.id} deleteColumn={props.deleteColumn} />
    </ColumnHeaderSpan>
  );
};

export default ColumnHeader;
