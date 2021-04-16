import React from "react";
import { LogCardAuthorDiv } from "./logCards.style.jsx";

const LogCardAuthor = ({ user }) => {
  return <LogCardAuthorDiv>@{user}</LogCardAuthorDiv>;
};

export default LogCardAuthor;
