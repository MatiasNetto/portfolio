import { FC } from 'react';
import styled from 'styled-components';
import { desktopQuery } from '../Common/styles/breakpoints';
import InfoPanel from '../Components/About/InfoPanel/InfoPanel.component';
import TopText from '../Components/Utils/TopText';
import { zoomIn } from 'Common/styles/animations';
import Image from 'next/image';

// import meImage from '../../public/images/Me2.png';
import meImage from '../../public/images/Me2.webp';
import Head from 'next/head';

const Container = styled.div`
  width: calc(100vw - 4rem);

  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  ${desktopQuery} {
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60vw;
  padding: 0 13%;

  animation: 0.8s ${zoomIn} forwards;

  ${desktopQuery} {
    width: 40%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0 6rem 0 0;
    /* padding: 5rem; */
  }
`;

const ImageStyled = styled.img`
  width: 70%;
  margin: 0 auto;

  ${desktopQuery} {
    width: auto;
    height: 60%;
    margin: 0;
  }
`;

const about: FC = () => {
  return (
    <>
      <Head>
        <title>Matias Netto - Sobre Mí</title>
      </Head>
      <TopText subtitle="Un poco" title="Sobre mí" />
      <Container>
        <ImageContainer>
          <Image src={meImage} alt="Yo" layout="fill" objectFit="contain" height={1} width={1} />
          {/* <ImageStyled src="/images/Me2.png" alt="" /> */}
        </ImageContainer>
        <InfoPanel />
      </Container>
    </>
  );
};

export default about;
