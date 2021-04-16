import styled from "styled-components";
import { ReactComponent as deleteColumnBtn } from "../../../icons/deleteIcon.svg";

const DeleteColumnBtn = styled(deleteColumnBtn)`
  width: 13.79px;
  height: 13.79px;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 8px;
   cursor: pointer;

  path {
    fill: #bdbdbd;
  }

  &:hover {
    path {
      fill: #FF4343;
    }
`;

const CountCardsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  width: 26px;
  height: 26px;

  background: #bdbdbd;
  border-radius: 20px;

  margin: 0px 8px;
`;

const ColumnTitleDiv = styled.div`
  display: flex;
  align-items: center;

  position: static;
  width: 228px;
  height: 26px;
  left: 8px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;

const ColumnTitleSpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: #010101;

  margin: 0px 8px;
`;

const ColumnHeaderSpan = styled.span`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0px 8px;

  width: 308px;
  height: 26px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
`;

export {
  DeleteColumnBtn,
  CountCardsDiv,
  ColumnTitleDiv,
  ColumnTitleSpan,
  ColumnHeaderSpan,
};
