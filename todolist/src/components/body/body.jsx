import React, { useState, useEffect } from "react";
import ColumnHeader from "./column/columnHeader/columnHeader.jsx";
import ColumnBody from "./column/columnBody/columnBody.jsx";
import FabButton from "./fabButton/fabButton.jsx";
import DeleteModal from "./column/columnBody/deleteModal/deleteModal.jsx";
import {
  getData,
  patchData,
  postData,
  getRandomUser,
} from "../../utils/axios.js";
import { InitialBodyRenderDiv, BodyStyle } from "./body.style";
import CardSectionStyle from "./cardSection.style";

const Body = ({ modalFlag, handleModalFlag }) => {
  const [columnData, setColumnData] = useState([]);
  const [user, setUser] = useState([]);
  const [buttonFlag, setButtonFlag] = useState(true);
  const [card, setCard] = useState({});

  const handleButtonFlag = ({ target: { value } }) => {
    if (value.length > 0) {
      setButtonFlag(false);
    } else {
      setButtonFlag(true);
    }
  };

  const postLogData = (id, newCards) => {
    const logUrl = `http://localhost:3002/log/`;
    let data = {
      user: user,
      columnTitle: columnData[id - 1].columnTitle,
      cardTitle: newCards[0].cardTitle,
      action: '추가',
      time: new Date(),
    };
    postData(logUrl, data);
  };

  const patchCardData = ({ target: { id } }) => {
    const url = `http://localhost:3002/column/${id}`;
    let newCards = [...columnData[id - 1].cards];
    newCards.unshift(card);
    patchData(url, { cards: newCards });
    postLogData(id, newCards);
    getColumnData();
  };

  const deleteCardData = ({ target: { id } }) => {
    const url = `http://localhost:3002/column/${id}`;
  };

  const handleChangeTItle = ({ target: { value } }) => {
    setCard({ ...card, cardTitle: value });
  };
  const handleChangeContents = ({ target: { value } }) => {
    setCard({ ...card, cardContents: value });
  };

  const handleAddButtonClick = ({ target: { id } }) => {
    let newData = columnData;
    newData.forEach(v => {
      if (v.id === Number(id)) {
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
    getData('http://localhost:3002/column').then(response => {
      const newData = response.data;
      newData.map(columnData => (columnData.modifyCardFlag = false));
      setColumnData(newData);
    });
  };

  const getUser = () => {
    getRandomUser('http://localhost:3002/defaultUserList') //
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
            />
            <ColumnBody
              id={id}
              modifyCardFlag={modifyCardFlag}
              columnTitle={columnTitle}
              cards={cards}
              user={user}
              buttonFlag={buttonFlag}
              patchCardData={patchCardData}
              handleModalFlag={handleModalFlag}
              handleAddButtonClick={handleAddButtonClick}
              handleButtonFlag={handleButtonFlag}
              handleChangeTItle={handleChangeTItle}
              handleChangeContents={handleChangeContents}
            />
          </BodyStyle>
        ))
      )}
      <FabButton />
      {deleteModal}
    </CardSectionStyle>
  );
};

export default Body;
