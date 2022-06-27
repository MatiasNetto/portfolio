import { fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
  ${desktopQuery} {
    grid-template-columns: 13rem 13rem;
  }
`;

export const TecnologyContainer = styled.div<{ delay: number }>`
  display: flex;
  align-items: center;
  opacity: 0;
  animation: 1s ${({ delay }) => `0.${delay}`}s ${fadeInUp} forwards;
`;

export const ImageContainer = styled.div`
  width: 2rem;
  height: 2rem;

  ${desktopQuery} {
    width: 2rem;
    height: 2rem;
  }
`;
export const Name = styled.p`
  color: #fff;
  margin-left: 0.5rem;

  ${desktopQuery} {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
`;
