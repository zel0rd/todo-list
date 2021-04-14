import React from 'react';
import { AddIcon, Button } from './fabButton.style';
import { postData } from '../../../utils/axios.js'

// {
//     "title": "새 컬럼"
// }

const card = {
  "columnTitle": "새 컬럼",
  "cards": [
    {
      "cardTitle": "adfaf",
      "cardContents": "asdfasdffads"
    },
    {
      "cardTitle": "git공부",
      "cardContents": "merge공부\npush공부\npull공부"
    }
  ]
}

const addNewColumnEvent = () =>{
  const columnUrl = "http://localhost:3002/column/";
  postData(columnUrl, card);
}

const FabButton = () => {
  return (
    <Button className="fab-button-section" onClick={addNewColumnEvent}>
      <AddIcon />
    </Button>
  );
};

export default FabButton;
