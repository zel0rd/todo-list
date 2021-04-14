import React from 'react';

const RevisingTitle = ({ cardTitle, handleButtonFlag }) => {
  return (
    <div className="input-title-section">
      <input onChange={handleButtonFlag} className="input-title" type="text" defaultValue={cardTitle}></input>
    </div>
  );
};

export default RevisingTitle;
