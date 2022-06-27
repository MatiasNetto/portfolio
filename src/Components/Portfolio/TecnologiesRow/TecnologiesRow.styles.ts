import { fadeIn, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 1rem 0;

  ${desktopQuery} {
    margin: 2rem 0;
  }
`;

export const Image = styled.img<{ delay: number }>`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;

  opacity: 0%;
  animation: 1s ${({ delay }) => delay * 0.1 + 0.3}s ${fadeInUp} forwards;

  ${desktopQuery} {
    height: 3rem;
    width: 3rem;
  }
`;
