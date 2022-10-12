import { fadeInDown, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  margin: 1rem 0;
  overflow: visible;

  ${desktopQuery} {
    margin: 2rem 0;
  }
`;

export const TecnologyContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  z-index: 99;
`;

export const ImageContainer = styled.div<{ delay: number }>`
  height: 2.3rem;
  width: 2.3rem;
  margin-right: 1rem;

  opacity: 0%;
  animation: 1s ${({ delay }) => delay * 0.1 + 0.3}s ${fadeInUp} forwards;

  ${desktopQuery} {
    height: 3rem;
    width: 3rem;
  }
`;

export const Tooltip = styled.div`
  width: fit-content;
  padding: 2px 2px;
  background: ${colors.lightBackground};
  color: #fff;
  position: absolute;
  white-space: nowrap;
  text-align: center;
  z-index: 9999;

  opacity: 0;
  animation: 0.5s ${fadeInDown} forwards;
`;
