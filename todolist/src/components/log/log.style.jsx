import styled from 'styled-components';

const LogStyle = styled.div`
  /* position: absolute; */
  width: 30%;
  height: 100%;
  right: 0px;
  top: 0px;
  min-width: 400px;

  position: fixed !important;
  transition: all 0.6s ease-in-out;
  /* bottom: 5%; */
  right: 0;

  background: #ffffff;

  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */
`;

export default LogStyle;
