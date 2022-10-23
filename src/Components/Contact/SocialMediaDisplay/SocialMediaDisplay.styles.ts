import { fadeInOpacity70 } from 'Common/styles/animations';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15%;
  padding: 0 15%;

  opacity: 0;
  animation: 1s 1s ${fadeInOpacity70} forwards;
`;

export const SocialMediaIcon = styled.img`
  width: 2rem;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(80%);
  }
`;
