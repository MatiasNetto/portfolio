import { FC } from 'react';
import { ITecnologiesRowInterface } from './TecnologiesRow.interface';
import { Container, Image } from './TecnologiesRow.styles';

const TecnologiesRow: FC<ITecnologiesRowInterface> = ({ tecnologies }) => {
  return (
    <Container>
      {tecnologies.map((tecnology, i) => (
        <Image src={tecnology.image} key={i} delay={i} alt={tecnology.name} />
      ))}
    </Container>
  );
};

export default TecnologiesRow;
