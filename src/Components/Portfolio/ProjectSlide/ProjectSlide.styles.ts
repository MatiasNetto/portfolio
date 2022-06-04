import { fadeIn, fadeInLeft, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;

  ${desktopQuery} {
    /* width: fit-content; */
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  opacity: 0;
  animation: 1s 0.3s ${fadeIn} forwards;

  ${desktopQuery} {
    max-width: 45vw;
    margin-left: 18%;
    filter: brightness(60%);
  }
`;

export const DataContainer = styled.div`
  /* width: 100%; */
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
    font-size: 6rem;
  }
`;

export const Subtitle = styled.h4`
  color: #eee;
  margin: 0;

  opacity: 0;
  animation: 1s 0.2s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 2rem;
  }
`;

export const Button = styled.button<{ contained?: boolean; delay: number }>`
  border: ${({ contained }) => (contained ? `1px solid ${colors.lightBlue}` : 'none')};
  background: ${({ contained }) => (contained ? 'transparent' : colors.lightBlue)};
  border-radius: 4px;
  margin-right: 1rem;
  padding: 0.4rem 0.8rem;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;

  opacity: 0;
  animation: 1s ${({ delay }) => 0.7 + delay}s ${fadeIn} forwards;

  ${desktopQuery} {
    font-size: 1.8rem;
    padding: 0.8rem 1.4rem;
  }
`;
