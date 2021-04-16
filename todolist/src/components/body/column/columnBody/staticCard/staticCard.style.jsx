import styled from "styled-components";

const StaticCardDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  margin: 7px 0;

  width: 308px;
  height: auto;

  background: ${(props) => props.cardStyle.backgroundColor};

  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;
  border: ${(props) => props.cardStyle.borderStyle};

  &:hover {
    transform: scale(0.98);
  }
`;

const CardTitleDiv = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;

  width: 252px;
  height: auto;

  color: #010101;

  margin: 8px 0px;
`;

export { StaticCardDiv, CardTitleDiv };
