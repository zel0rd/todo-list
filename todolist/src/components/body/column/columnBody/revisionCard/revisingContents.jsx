import React from 'react';
import RevisingContentsStyle from './revisingContents.style';

const RevisingContents = props => {
  return (
    <div className="input-contents-section">
      <RevisingContentsStyle
        onChange={e => {
          props.callback(e);
        }}
        className="input-contents"
        type="text"
        defaultValue={props.cardContents}
      ></RevisingContentsStyle>
    </div>
  );
};

export default RevisingContents;
