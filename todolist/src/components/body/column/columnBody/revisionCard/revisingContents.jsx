import React from 'react';
import RevisingContentsStyle from './revisingContents.style';

const RevisingContents = props => {
  return (
    <div className="input-contents-section">
      <RevisingContentsStyle
        onKeyUp={e => {
          props.updateContents(e);
          props.handleModifiedContents(e);
        }}
        className="input-contents"
        type="text"
        defaultValue={props.cardContents}
      ></RevisingContentsStyle>
    </div>
  );
};

export default RevisingContents;
