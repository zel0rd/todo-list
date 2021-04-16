import styled from "styled-components";
import { ReactComponent as cardDeleteBtn } from "../../../../style/deleteIcon.svg";

const CardDeleteBtn = styled(cardDeleteBtn)`
  width: 13.79px;
  height: 13.79px;

  cursor: pointer;

  path {
    fill: #828282;
  }

  &:hover {
    path {
      fill: #FF4343;
    }
`;

export { CardDeleteBtn };
