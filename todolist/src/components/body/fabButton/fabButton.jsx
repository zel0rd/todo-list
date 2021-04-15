import React from 'react';
import { AddIcon, Button } from './fabButton.style';
import { postData } from '../../../utils/axios.js'

const card = {
  "columnTitle": "새 컬럼",
  "cards": [
  ]
}

const addNewColumnEvent = (getColumnData) =>{
  const columnUrl = "http://localhost:3002/column/";
  postData(columnUrl, card);
  getColumnData()
}

const FabButton = ({getColumnData}) => {
  return (
    <Button className="fab-button-section" onClick={() => addNewColumnEvent(getColumnData)}>
      <AddIcon />
    </Button>
  );
};

export default FabButton;
