import { Splide } from '@splidejs/react-splide';
import { IProjectMetadata } from 'Common/Interfaces/mxd.interface';
import { FC } from 'react';
import ProjectSlide from '../ProjectSlide/ProjectSlide';
import { IProjectSlideProps } from '../ProjectSlide/ProjectSlide.interface';

const ProjectsSlider: FC<{ projects: IProjectMetadata[] }> = ({ projects }) => {
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
