import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { desktopQuery } from '../Common/styles/breakpoints';
import InfoPanel from '../Components/About/InfoPanel/InfoPanel.component';
import TopText from '../Components/Utils/TopText';
import { zoomIn } from 'Common/styles/animations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  ${desktopQuery} {
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: 0.8s ${zoomIn} forwards;

  ${desktopQuery} {
    justify-content: start;
    width: 50%;
  }
`;

const Image = styled.img`
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
      <TopText subtitle="Un poco" title="Sobre mi" />
      <Container>
        <ImageContainer>
          <Image src="/images/Me2.png" alt="" />
        </ImageContainer>
        <InfoPanel />
      </Container>
    </>
  );
};

export default about;
