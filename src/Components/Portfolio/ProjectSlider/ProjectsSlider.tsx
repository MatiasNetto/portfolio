import { Splide } from '@splidejs/react-splide';
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
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FReact_logo_logotype_emblem.png&f=1&nofb=1',
      },
      { name: 'Styled-Components', image: 'https://styled-components.com/logo.png' },
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
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmpng.subpng.com%2F20180425%2Frwe%2Fkisspng-web-development-html-responsive-web-design-logo-ja-html-5ae04a94d3ebb9.2609257315246485968681.jpg&f=1&nofb=1',
      },
    ],
  },
];

const ProjectsSlider: FC = () => {
  return (
    <Splide
      options={{ type: 'slide', pagination: true, arrows: true, classes: { arrows: 'custom-arrow-style' } }}
      style={{ width: '100%', height: '70vh' }}
    >
      {PROJECTS.map((project, i) => (
        <ProjectSlide {...project} key={i} />
      ))}
    </Splide>
  );
};

export default ProjectsSlider;
