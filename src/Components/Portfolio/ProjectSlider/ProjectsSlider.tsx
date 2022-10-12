import { Splide } from '@splidejs/react-splide';
import { IProjectMetadata } from 'Common/Interfaces/mxd.interface';
import { FC } from 'react';
import ProjectSlide from '../ProjectSlide/ProjectSlide';
import { IProjectSlideProps } from '../ProjectSlide/ProjectSlide.interface';

const PROJECTS: IProjectSlideProps[] = [
  {
    title: 'Toscana accesorios',
    subtitle: 'Catalogo web',
    website: 'www.tocanaacesorios.web.app',
    image: '/images/projects/Toscana_Img-1.png',
    tecnologies: [
      {
        name: 'React',
        image: '/images/tecnologies/react.png',
      },
      { name: 'Styled-Components', image: '/images/tecnologies/styled-components.png' },
    ],
  },
  {
    title: 'New-Tab!',
    subtitle: 'Buscador web',
    website: 'http://localhost',
    image: '/images/projects/New-Tab_Img-1.png',
    tecnologies: [
      {
        name: 'HTML',
        image: '/images/tecnologies/html.png',
      },
    ],
  },
];

const ProjectsSlider: FC<{ projects: IProjectMetadata[] }> = ({ projects }) => {
  console.log(projects);
  return (
    <Splide
      options={{ type: 'slide', pagination: true, arrows: true, classes: { arrows: 'custom-arrow-style' } }}
      style={{ width: '100vw'!, height: '70vh' }}
    >
      {projects.map((project, i) => (
        <ProjectSlide {...project} key={i} />
      ))}
    </Splide>
  );
};

export default ProjectsSlider;
