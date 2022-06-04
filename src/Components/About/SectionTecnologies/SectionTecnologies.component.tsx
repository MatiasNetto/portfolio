import { FC } from 'react';
import { ISectionTecnologiesProps } from './SectionTecnologies.interface';
import { Container, TecnologyContainer, Image, Name } from './SectionTecnologies.styles';

const SectionTecnologies: FC<ISectionTecnologiesProps> = ({ tecnologies }) => {
  return (
    <Container>
      {tecnologies.map((tecnology, i) => (
        <TecnologyContainer key={tecnology.name} delay={i}>
          <Image src={tecnology.image} alt={tecnology.name} />
          <Name>{tecnology.name}</Name>
        </TecnologyContainer>
      ))}
    </Container>
  );
};

export default SectionTecnologies;
