import React from "react";
import { EmojiDiv } from "./logCards.style.jsx";

const Emoji = ({ emoji }) => {
  return <EmojiDiv className="emoji">{emoji}</EmojiDiv>;
};

export default Emoji;
