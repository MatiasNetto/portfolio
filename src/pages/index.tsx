import styled, { keyframes } from 'styled-components';
import { desktopQuery } from '../Common/styles/breakpoints';
import colors from '../Common/styles/colors';
import { fadeInLeft, fadeInRight, fadeInUp } from 'Common/styles/animations';
import TopText from '../Components/Utils/TopText';

const Container = styled.div`
  ${desktopQuery} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 2rem 0;
    padding-bottom: 5%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: center;

  ${desktopQuery} {
    overflow: visible;
  }
`;

const Image = styled.img`
  height: 40vh;
  opacity: 0;
  animation: 1s 0.6s ${fadeInRight} forwards;

  ${desktopQuery} {
    height: 60vh;
  }
`;

const TextContainer = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-top: 1rem;
  color: #fff;
  opacity: 0;
  animation: 1s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  color: #eee;
  opacity: 0;
  animation: 1s 0.3s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  color: #eee;
  opacity: 0;
  animation: 1s 0.2s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  background: ${colors.lightBlue};
  border: none;
  color: #fff;
  font-size: 1rem;
  border-radius: 6px;
  opacity: 0;
  animation: 1s 0.6s ${fadeInLeft} forwards;

  ${desktopQuery} {
    font-size: 1.5rem;
  }
`;

export default function Home() {
  return (
    <>
      <TopText subtitle="Esta es" title="Mi Home Page" />
      <Container>
        <ImageContainer>
          <Image
            src="/images/Me1.png"
            alt="ashei"
            // initial={{ x: -30, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.7, delay: 0.5 }}
          />
        </ImageContainer>
        <TextContainer>
          {/* <Title initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}> */}
          <Title>Matias Netto</Title>
          {/* <Subtitle
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        > */}
          <Subtitle>Web Developer</Subtitle>
          {/* <Paragraph
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        > */}
          <Paragraph>
            Frontend developer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit error vel
            debitis. Rerum consectetur perferendis quis doloremque adipisci quae.
          </Paragraph>
          <Button>Descargar CV</Button>
        </TextContainer>
      </Container>
    </>
  );
}