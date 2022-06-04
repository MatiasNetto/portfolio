import { fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const StudyContainer = styled.div<{ delay: number }>`
  display: flex;
  align-items: center;
  opacity: 0;
  animation: 1s ${({ delay }) => `0.${delay}`}s ${fadeInUp} forwards;
`;

export const Image = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 100%;

  ${desktopQuery} {
    height: 2.2rem;
    width: 2.2rem;
  }
`;

export const Title = styled.p`
  color: #fff;
  margin-left: 1rem;

  ${desktopQuery} {
    font-size: 1.2rem;
  }
`;

export const Institute = styled.strong`
  color: #fff;
`;
