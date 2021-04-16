import React from "react";
import ColumnTitle from "./columnTitle.jsx";
import CountCards from "./countCards.jsx";
import AddCardButton from "./addCardButton.jsx";
import DeleteColumnButton from "./deleteColumnButton.jsx";
import ColumnHeaderSection from "./columnHeaderSection.style.jsx";
import ColumnTitleWrapper from "./ColumnTitleWrapper.style";

const ColumnHeader = (props) => {
  return (
    <ColumnHeaderSection className="column-header-section">
      <ColumnTitleWrapper>
        <ColumnTitle columnTitle={props.columnTitle} />
        <CountCards cardsNumber={props.cards.length} />
      </ColumnTitleWrapper>
      <AddCardButton
        id={props.id}
        handleAddButtonClick={props.handleAddButtonClick}
      />
      <DeleteColumnButton id={props.id} deleteColumn={props.deleteColumn} />
    </ColumnHeaderSection>
  );
};

export default ColumnHeader;
