import styled from "styled-components";

const StaticCardStyle = styled.div`
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

export default StaticCardStyle;
