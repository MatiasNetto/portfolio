import { FC } from 'react';
import { ISectionTecnologiesProps } from './SectionTecnologies.interface';
import { Container, TecnologyContainer, Name, ImageContainer } from './SectionTecnologies.styles';
import Image from 'next/image';

const SectionTecnologies: FC<ISectionTecnologiesProps> = ({ tecnologies }) => {
  return (
    <Container>
      {tecnologies.map((tecnology, i) => (
        <TecnologyContainer key={tecnology.name} delay={i}>
          {/* <Image src={tecnology.image} alt={tecnology.name} /> */}
          <ImageContainer>
            <Image src={tecnology.image} alt={tecnology.name} objectFit="contain" height={64} width={64} />
          </ImageContainer>
          <Name>{tecnology.name}</Name>
        </TecnologyContainer>
      ))}
    </Container>
  );
};

export default SectionTecnologies;
