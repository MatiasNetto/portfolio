import { SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';
import { Container, ImageContainer, Subtitle, Title, DataContainer } from './ProjectSlide.styles';
import TecnologiesRow from '../TecnologiesRow/TecnologiesRow';
import Image from 'next/image';
import { IProjectMetadata } from 'Common/Interfaces/mxd.interface';
import Button from 'Components/Utils/Button';

const ProjectSlide: FC<IProjectMetadata> = ({ title, subtitle, website, image, tecnologies, slug }) => {
  return (
    // <SplideSlide style={{ margin: '0 1rem 0 0', transform: 'translateX(-0.5rem)' }}>
    <SplideSlide>
      <Container>
        <ImageContainer>
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
        </ImageContainer>
        <DataContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <TecnologiesRow tecnologies={tecnologies} />
          <div>
            <Button delay={0} contained href={`/projects/${slug}`}>
              Ver mas
            </Button>
            <Button delay={0.1} href={website} target="_blank">
              Sitio web
            </Button>
          </div>
        </DataContainer>
      </Container>
    </SplideSlide>
  );
};

export default ProjectSlide;
