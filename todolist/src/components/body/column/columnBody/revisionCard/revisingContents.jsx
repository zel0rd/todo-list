import React from 'react';

const RevisingContents = ({ cardContents, handleButtonFlag }) => {
  return (
    <div className="input-contents-section">
      <textarea onChange={handleButtonFlag} className="input-contents" type="text" defaultValue={cardContents}></textarea>
    </div>
  );
};

export default RevisingContents;
