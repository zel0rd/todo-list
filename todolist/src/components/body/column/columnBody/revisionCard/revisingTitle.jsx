import React from 'react';
import RevisingTitleStyle from './revisingTitle.style';

const RevisingTitle = props => {
  return (
    <div className="input-title-section">
      <RevisingTitleStyle
        onChange={e => {
          props.callback(e);
        }}
        className="input-title"
        type="text"
        defaultValue={props.cardTitle}
      ></RevisingTitleStyle>
    </div>
  );
};

export default RevisingTitle;
