import { FC } from 'react';
import { ISectionStudiesProps } from './SectionStudies.interface';
import { Container, StudyContainer, Image, Institute, Title } from './SectionStudies.styles';

const SectionStudies: FC<ISectionStudiesProps> = ({ studies }) => {
  return (
    <Container>
      {studies.map((study, i) => (
        <StudyContainer key={study.title} delay={i}>
          <Image src={study.image} alt={study.institute} />
          <Title>
            {study.title}
            <Institute>{study.institute}</Institute>
          </Title>
        </StudyContainer>
      ))}
    </Container>
  );
};

export default SectionStudies;
