import styled from 'styled-components';
import { ReactComponent as addIcon } from '../../style/addIcon.svg';

const AddIcon = styled(addIcon)`
  width: 22.98px;
  height: 22.98px;

  path {
    fill: #ffffff;
  }
`;

const Button = styled.div`
  width: 64px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed !important;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.11);
  transition: all 0.6s ease-in-out;
  color: black;
  bottom: 5%;
  right: 5%;

  z-index:1;


  background: #0075de;
  cursor: pointer;

  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 35px;
`;

export { AddIcon, Button };
