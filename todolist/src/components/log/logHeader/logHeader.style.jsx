import styled from "styled-components";

const LogHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LogTitleDiv = styled.div`
  font-weight: bold;
  font-size: 2rem;

  border: solid 1px red;
  height: 44px;
`;

const LogHideButtonDiv = styled.div`
  position: absolute;
  top: 50.75px;
  left: 354.75px;
  cursor: pointer;

  z-index: 1;

  path {
    fill: #010101;
  }
`;

export { LogHeaderDiv, LogTitleDiv, LogHideButtonDiv };
