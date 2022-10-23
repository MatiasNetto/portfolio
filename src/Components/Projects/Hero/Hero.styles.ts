import { fadeIn, fadeInLeft, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;

  ${desktopQuery} {
    height: 85vh;
  }
`;

export const BackgoundImage = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(17, 17, 17, 0.9) 90%,
      rgba(10, 10, 10, 1) 100%
    ),
    url(${({ image }) => image}) no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(5px);
  transform: scale(110%);

  opacity: 0;
  animation: 1s 0.2s ${fadeIn} forwards;

  ${desktopQuery} {
    background: url(${({ image }) => image}) no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px) brightness(70%);
  }
`;

export const CenterContainer = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  ${desktopQuery} {
    height: 75%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
  padding: 0 2rem;

  ${desktopQuery} {
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const ImageComponent = styled.img`
  height: auto;
  width: 100%;
  z-index: 9;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 15px #0003;

  opacity: 0;
  animation: 0.8s 0.4s ${fadeInUp} forwards;

  ${desktopQuery} {
    height: 50%;
    width: auto;
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  width: fit-content;
  font-size: 3rem;
  color: #fff;

  opacity: 0;
  animation: 0.8s 0.6s ${fadeInLeft} forwards;

  ${desktopQuery} {
    font-size: 5rem;
    text-align: unset;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.1rem;
  margin-top: 0.5rem;
  color: #fff;

  opacity: 0;
  animation: 0.8s 0.65s ${fadeInLeft} forwards;

  ${desktopQuery} {
    font-size: 2rem;
  }
`;
