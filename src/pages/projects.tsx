import TopText from 'Components/Utils/TopText';
import { FC } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import ProjectsSlider from 'Components/Portfolio/ProjectSlider/ProjectsSlider';
import { desktopQuery } from 'Common/styles/breakpoints';

const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 13vh;

  ${desktopQuery} {
    width: auto;
    position: relative;
    top: 10vh;
    display: flex;
    justify-content: center;
    margin-bottom: 10vh;
  }
`;

const Projects: FC = () => {
  return (
    <>
      <TopText subtitle="Algunos de" title="Mis Proyectos" />
      <Container>
        <ProjectsSlider />
      </Container>
    </>
  );
};

export default Projects;
