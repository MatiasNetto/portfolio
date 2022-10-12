import { ITecnology } from './TecnologiesRow.interface';
import { FC, useState } from 'react';
import { ITecnologiesRowInterface } from './TecnologiesRow.interface';
import { Container, ImageContainer, TecnologyContainer, Tooltip } from './TecnologiesRow.styles';
import Image from 'next/image';

const TecnologiesRow: FC<ITecnologiesRowInterface> = ({ tecnologies }) => {
  return (
    <Container>
      {tecnologies.map((tecnology, i) => (
        <ImageContainer key={i} delay={i}>
          <Image
            src={tecnology.image}
            alt={tecnology.name}
            layout="fill"
            objectFit="contain"
            quality={1}
            sizes="20vw"
          />
        </ImageContainer>
      ))}
    </Container>
  );
};

export default TecnologiesRow;
