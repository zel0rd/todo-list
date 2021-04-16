import React from "react";
import { ColumnTitleSpan } from "./columnHeader.style.jsx";

const ColumnTitle = ({ columnTitle }) => {
  return <ColumnTitleSpan>{columnTitle}</ColumnTitleSpan>;
};

export default ColumnTitle;
