import { FC } from 'react';
import { Paragraph } from './SectionProfile.styles';

/*
Hola, mi nombre es Matias, soy desarollador web frontend especializado en React.js ⚛️, aunque con conocimientos de backend con Node, Express, MongoDB, PHP y mas!

Soy estudiante de licenciatura informatica en la Universidad nacional de Quilmes (UNQ) 🤓

Apasionado por las nuevas tecnologias, con facilidad para trabajar en equipo y abierto a aprender del feedback de ellos 👨‍💻

Ansioso por abordar innovadores proyectos con nuevos problemas que resolver 😁

*/

const SectionProfile: FC = () => {
  return (
    <>
      <Paragraph delay={0.1}>
        Hola, mi nombre es Matias, soy desarrollador web Frontend especializado en React.js ⚛️, aunque con conocimientos
        de Backend con Node, Express, MongoDB, PostgreSQL y mas!
      </Paragraph>
      <Paragraph delay={0.2}>
        Soy estudiante de licenciatura informatica en la Universidad nacional de Quilmes (UNQ) 🤓
      </Paragraph>
      <Paragraph delay={0.3}>
        Apasionado por las nuevas tecnologias, con facilidad para trabajar en equipo y abierto a aprender del feedback
        de ellos 👨‍💻
      </Paragraph>
      <Paragraph delay={0.4}>Ansioso por abordar innovadores proyectos con nuevos problemas que resolver 😁</Paragraph>
    </>
  );
};

export default SectionProfile;
