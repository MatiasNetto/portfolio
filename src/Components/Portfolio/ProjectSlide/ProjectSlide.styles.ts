import { fadeIn, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;

  ${desktopQuery} {
    width: 100%;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;
  opacity: 0;
  animation: 1s 0.3s ${fadeIn} forwards;

  ${desktopQuery} {
    height: 50vh;
    width: 90vw;
    max-width: 45vw;
    margin-left: 18%;
    filter: brightness(70%);
  }
`;

export const DataContainer = styled.div`
  ${desktopQuery} {
    position: absolute;
    left: 16vw;
  }
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 400;
  margin: 1rem 0 0 0;

  opacity: 0;
  animation: 1s 0s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 5rem;
  }
`;

export const Subtitle = styled.h4`
  color: #eee;
  margin: 0;

  opacity: 0;
  animation: 1s 0.2s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 1.8rem;
  }
`;
