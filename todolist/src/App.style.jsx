import styled from "styled-components";

const AppDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR", sans-serif;
  background: ${(props) => props.backgroundColor};
`;

export default AppDiv;
