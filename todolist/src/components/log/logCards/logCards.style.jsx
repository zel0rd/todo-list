import styled from "styled-components";

const EmojiDiv = styled.div`
  font-size: 40px;
  margin-right: 16px;
`;

const HistoryTimeDiv = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #828282;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const LogCardAuthorDiv = styled.div`
  position: static;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #828282;

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const LogContentsDiv = styled.div`
  width: 75%;

  font-weight: bold;
  font-size: 16px;
  line-height: 23px;

  color: #010101;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const LogCardsDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;

  position: relative;
  top: 20px;
  width: 90%;
  left: 25px;

  background: #ffffff;
`;

const WorkHistoryDiv = styled.div`
  margin: 8px 0;
`;

export {
  EmojiDiv,
  HistoryTimeDiv,
  LogCardAuthorDiv,
  LogContentsDiv,
  LogCardsDiv,
  WorkHistoryDiv,
};
