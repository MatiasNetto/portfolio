import { fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import styled from 'styled-components';

export const Paragraph = styled.p<{ delay?: number }>`
  color: #ddd;
  opacity: 0;
  font-weight: 100;
  font-size: 0.98rem;
  animation: 1s ${({ delay = 0 }) => delay}s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 1.2rem;
  }
`;
