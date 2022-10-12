import { fadeIn } from 'Common/styles/animations';
import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  position: absolute;
  bottom: 2rem;
  z-index: 9;
  flex-direction: column;
  background: transparent;
  border: none;
  outline: none;

  opacity: 0;
  animation: 1.5s 1.2s ${fadeIn} forwards;
`;
