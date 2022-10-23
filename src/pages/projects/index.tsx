import TopText from 'Components/Utils/TopText';
import { FC } from 'react';
import styled from 'styled-components';
import '@splidejs/react-splide/css/sea-green';
import ProjectsSlider from 'Components/Portfolio/ProjectSlider/ProjectsSlider';
import { desktopQuery } from 'Common/styles/breakpoints';
import { getAllFilesMetadata } from 'Lib/mxd';
import Head from 'next/head';

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

const Projects: FC<{ projects: any[] }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Matias Netto - Proyectos</title>
      </Head>
      <TopText subtitle="Algunos de" title="Mis Proyectos" />
      <Container>
        <ProjectsSlider projects={projects} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const projects = await getAllFilesMetadata();

  return {
    props: { projects },
  };
}

export default Projects;
