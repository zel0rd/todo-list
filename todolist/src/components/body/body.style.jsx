import styled from "styled-components";

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 15px 0 0;

  width: 308px;
`;

const InitialBodyRenderDiv = styled.div`
  position: absolute;
  top: 45%;
  right: 40%;

  font-size: 3rem;
  font-weight: 700;
`;

export { InitialBodyRenderDiv, BodyStyle };
