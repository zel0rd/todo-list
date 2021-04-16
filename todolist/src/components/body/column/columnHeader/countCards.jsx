import React from "react";
import { CountCardsDiv } from "./columnHeader.style.jsx";

const CountCards = ({ cardsNumber }) => {
  return <CountCardsDiv>{cardsNumber}</CountCardsDiv>;
};

export default CountCards;
