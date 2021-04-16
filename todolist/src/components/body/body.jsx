import React, { useState, useEffect } from "react";
import ColumnHeader from "./column/columnHeader/columnHeader.jsx";
import ColumnBody from "./column/columnBody/columnBody.jsx";
import FabButton from "./fabButton/fabButton.jsx";
import DeleteModal from "./column/columnBody/deleteModal/deleteModal.jsx";
import {
  getData,
  patchData,
  postData,
  deleteData,
  getRandomUser,
} from "../../utils/axios.js";
import { InitialBodyRenderDiv, BodyStyle } from "./body.style";
import CardSectionStyle from "./cardSection.style";

const Body = () => {
  const [columnData, setColumnData] = useState([]);
  const [user, setUser] = useState([]);
  const [buttonFlag, setButtonFlag] = useState(true);
  const [card, setCard] = useState({});
  const [deleteCardStatus, setDeleteCardStatus] = useState({});
  const [modalFlag, setModalFlag] = useState(false);
  const [clickedCard, setclickedCard] = useState({});

  const deleteColumn = ({ target: { parentNode } }) => {
    let columnId;
    parentNode.id === ""
      ? (columnId = parentNode.parentNode.id)
      : (columnId = parentNode.id);
    const url = `http://141.164.43.40:3002/column/${columnId}`;
    deleteData(url);
    getColumnData();
  };

  const handleModalFlag = () => {
    if (modalFlag === false) {
      setModalFlag(true);
    } else {
      setModalFlag(false);
    }
  };

  const getCardData = ({ cardid, id }) => {
    setclickedCard({
      columnId: id,
      cardId: cardid,
    });
  };

  const handleButtonFlag = ({ target: { value } }) => {
    if (value.length > 0) {
      setButtonFlag(false);
    } else {
      setButtonFlag(true);
    }
  };

  const patchLogData = ({ id, cardid, newCards, action }) => {
    const logUrl = `http://141.164.43.40:3002/log/`;
    let data = {
      user: user,
      columnTitle: columnData[id - 1].columnTitle,
      cardTitle: newCards[cardid].cardTitle,
      action: action,
      time: new Date(),
    };
    postData(logUrl, data);
  };

  const deleteCardData = ({ target: { parentNode } }) => {
    let deleteCardObj;
    parentNode.tagName === "svg"
      ? (deleteCardObj = {
          columnid: parentNode.parentNode.id,
          cardid: parentNode.parentNode.className,
        })
      : (deleteCardObj = {
          columnid: parentNode.id,
          cardid: parentNode.className,
        });
    setDeleteCardStatus(deleteCardObj);
  };

  const handleModalDeleteButton = () => {
    const url = `http://141.164.43.40:3002/column/${deleteCardStatus.columnid}`;
    const newCards = [...columnData[deleteCardStatus.columnid - 1].cards];
    patchLogData({
      id: deleteCardStatus.columnid,
      cardid: deleteCardStatus.cardid,
      newCards: newCards,
      action: "삭제",
    });
    newCards.splice(deleteCardStatus.cardid, 1);
    patchData(url, { cards: newCards });
    getColumnData();
  };

  const patchCardData = ({ target: { id } }) => {
    const url = `http://141.164.43.40:3002/column/${id}`;
    let newCards = [...columnData[id - 1].cards];
    newCards.unshift(card);
    patchData(url, { cards: newCards });
    patchLogData({
      id: id,
      cardid: 0,
      newCards: newCards,
      action: "추가",
    });
    getColumnData();
  };

  const handleChangeTitle = ({ target: { value } }) => {
    setCard({ ...card, cardTitle: value });
  };
  const handleChangeContents = ({ target: { value } }) => {
    setCard({ ...card, cardContents: value });
  };

  const handleModifiedCard = (e, object) => {
    const modifiedData = e.target.value;
    const currentCard = columnData[clickedCard.columnId - 1].cards;
    currentCard.map((card) => {
      if (card.cardid === clickedCard.cardId) {
        object === "title"
          ? (card.cardTitle = modifiedData)
          : (card.cardContents = modifiedData);
      }
    });
    setCard(currentCard);
  };

  const patchModifiedData = () => {
    const url = `http://141.164.43.40:3002/column/${clickedCard.columnId}`;
    let data = {
      cards: card,
    };
    patchData(url, data);
    getColumnData();
    patchLogData({
      id: clickedCard.columnId,
      cardid: clickedCard.cardId,
      newCards: card,
      action: "수정",
    });
  };

  const handleAddButtonClick = ({ target }) => {
    let columnId;
    target.id === ""
      ? (columnId = target.parentNode.id)
      : (columnId = target.id);
    let newData = columnData;
    newData.forEach((v) => {
      if (v.id === Number(columnId)) {
        if (v.modifyCardFlag === true) {
          v.modifyCardFlag = false;
        } else {
          v.modifyCardFlag = true;
        }
      }
    });
    setColumnData([...newData]);
  };

  const getColumnData = () => {
    getData("http://141.164.43.40:3002/column").then((response) => {
      const newData = response.data;
      newData.map((columnData) => {
        columnData.modifyCardFlag = false;
        if (columnData.cards.length !== 0) {
          columnData.cards.map((card, index) => (card.cardid = index));
        }
      });
      setColumnData(newData);
    });
  };

  const getUser = () => {
    getRandomUser("http://141.164.43.40:3002/defaultUserList") //
      .then(setUser);
  };

  useEffect(() => {
    getColumnData();
    getUser();
  }, []);

  let deleteModal;
  modalFlag === true
    ? (deleteModal = (
        <DeleteModal
          columnData={columnData}
          handleModalFlag={handleModalFlag}
          handleModalDeleteButton={handleModalDeleteButton}
        />
      ))
    : (deleteModal = null);

  return (
    <CardSectionStyle className="body">
      {columnData.length === 0 ? (
        <InitialBodyRenderDiv>데이터를 추가해주세요 !</InitialBodyRenderDiv>
      ) : (
        columnData.map(({ columnTitle, cards, modifyCardFlag, id }, index) => (
          <BodyStyle className="column" key={index}>
            <ColumnHeader
              id={id}
              columnTitle={columnTitle}
              cards={cards}
              handleAddButtonClick={handleAddButtonClick}
              deleteColumn={deleteColumn}
            />
            <ColumnBody
              id={id}
              modifyCardFlag={modifyCardFlag}
              columnTitle={columnTitle}
              cards={cards}
              user={user}
              buttonFlag={buttonFlag}
              patchCardData={patchCardData}
              deleteCardData={deleteCardData}
              handleModalFlag={handleModalFlag}
              handleAddButtonClick={handleAddButtonClick}
              handleButtonFlag={handleButtonFlag}
              handleChangeTitle={handleChangeTitle}
              handleChangeContents={handleChangeContents}
              getColumnData={getColumnData}
              handleModifiedCard={handleModifiedCard}
              getCardData={getCardData}
              patchModifiedData={patchModifiedData}
            />
          </BodyStyle>
        ))
      )}
      <FabButton getColumnData={getColumnData} />
      {deleteModal}
    </CardSectionStyle>
  );
};

export default Body;
