import styled from "styled-components";

const DeleteModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;

  position: absolute;
  width: 400px;
  height: 138px;
  top: 40%;
  right: 40%;

  background: #ffffff;

  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5),
    0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);

  border-radius: 6px;
`;

const DeleteModalTitleDiv = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: #010101;

  margin: 24px 0px;
`;

const DeleteModalButtonWraaper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0px 12px 70px;
`;

export { DeleteModalDiv, DeleteModalTitleDiv, DeleteModalButtonWraaper };
