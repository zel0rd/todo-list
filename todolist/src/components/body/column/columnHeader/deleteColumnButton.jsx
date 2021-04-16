import React from "react";
import { DeleteColumnBtn } from "./columnHeader.style.jsx";

const DeleteColumnButton = (props) => {
  return <DeleteColumnBtn id={props.id} onClick={props.deleteColumn} />;
};

export default DeleteColumnButton;
