import { SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';

import { IProjectSlideProps } from './ProjectSlide.interface';
import { Button, Container, Image, Subtitle, Title, DataContainer } from './ProjectSlide.styles';
import TecnologiesRow from '../TecnologiesRow/TecnologiesRow';

const ProjectSlide: FC<IProjectSlideProps> = ({ title, subtitle, website, image, tecnologies }) => {
  return (
    // <SplideSlide style={{ margin: '0 1rem 0 0', transform: 'translateX(-0.5rem)' }}>
    <SplideSlide>
      <Container>
        <Image src={image} alt={title} />
        <DataContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <TecnologiesRow tecnologies={tecnologies} />
          <div>
            <Button delay={0} contained>
              Ver mas
            </Button>
            <Button delay={0.1}>Sitio web</Button>
          </div>
        </DataContainer>
      </Container>
    </SplideSlide>
  );
};

export default ProjectSlide;
