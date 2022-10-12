import { SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';

import { IProjectSlideProps } from './ProjectSlide.interface';
import { Button, Container, ImageContainer, Subtitle, Title, DataContainer } from './ProjectSlide.styles';
import TecnologiesRow from '../TecnologiesRow/TecnologiesRow';
import Image from 'next/image';
import { IProjectMetadata } from 'Common/Interfaces/mxd.interface';
import Link from 'next/link';

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
            <Link href={`/projects/${slug}`} passHref>
              <Button delay={0} contained>
                Ver mas
              </Button>
            </Link>
            <a href={website} target="_blank" rel="noreferrer">
              <Button delay={0.1}>Sitio web</Button>
            </a>
          </div>
        </DataContainer>
      </Container>
    </SplideSlide>
  );
};

export default ProjectSlide;
