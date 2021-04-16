import styled from 'styled-components';

const AppDiv = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  background: ${props => props.backgroundColor};
`;

export default AppDiv;
