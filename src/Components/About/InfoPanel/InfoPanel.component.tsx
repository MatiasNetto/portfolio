import { FC, useState } from 'react';
import { TSection } from './InfoPanel.interface';
import {
  InformationContainer,
  List,
  ListItem,
  Navigation,
  ListItemUnderline,
  NavContainer,
  MainContainer,
} from './InfoPanel.styles';
import SectionProfile from '../SectionProfile/SectionProfile.component';
import SectionStudies from '../SetionStudies/SectionStudies.component';
import { IStudies } from '../SetionStudies/SectionStudies.interface';
import SectionTecnologies from '../SectionTecnologies/SectionTecnologies.component';
import { ITecnology } from '../SectionTecnologies/SectionTecnologies.interface';

const STUDIES_DATA: IStudies[] = [
  {
    image: '/images/instituciones/unq.jpg',
    title: 'Lic. Informatica: (en progreso)',
    institute: ' - UNQ',
  },
  {
    image: '/images/instituciones/fundacion-telefonica.jpg',
    title: 'SCRUM: Metodologias Agiles',
    institute: ' - Fundacion Telefonica',
  },
  {
    image: '/images/instituciones/fundacion-telefonica.jpg',
    title: 'JavaScript: Programacion en JavaScript',
    institute: ' - Fundacion Telefonica',
  },
  {
    image: '/images/instituciones/fundacion-telefonica.jpg',
    title: 'Ciberseguridad',
    institute: ' - Fundacion Telefonica',
  },
  {
    image: '/images/instituciones/loreto.webp',
    title: 'Secundario: Bachiller en economia',
    institute: ' - Loreto',
  },
];

const TECNOLOGIES_DATA: ITecnology[] = [
  {
    image: '/images/tecnologies/html.svg',
    name: 'HTML',
  },
  {
    image: '/images/tecnologies/css.svg',
    name: 'CSS',
  },
  {
    image: '/images/tecnologies/javascript.svg',
    name: 'JavaScript',
  },
  {
    image: '/images/tecnologies/react.svg',
    name: 'React.js',
  },
  {
    image: '/images/tecnologies/typescript.svg',
    name: 'TypeScript',
  },
  {
    image: '/images/tecnologies/redux.svg',
    name: 'Redux',
  },
  {
    image: '/images/tecnologies/next.svg',
    name: 'Next.js',
  },
  {
    image: '/images/tecnologies/node.svg',
    name: 'Node.js',
  },
  {
    image: '/images/tecnologies/mongodb.svg',
    name: 'MongoDB',
  },
  {
    image: '/images/tecnologies/linux.svg',
    name: 'Linux',
  },
  {
    image: '/images/tecnologies/sql-database-solid.svg',
    name: 'SQL',
  },
];

const InfoPanel: FC = () => {
  const [section, setSection] = useState<TSection>('profile');

  const getSectionContent = () => {
    switch (section) {
      case 'profile':
        return <SectionProfile />;

      case 'studies':
        return <SectionStudies studies={STUDIES_DATA} />;

      case 'tecnologies':
        return <SectionTecnologies tecnologies={TECNOLOGIES_DATA} />;
      default:
        return <p>Error</p>;
    }
  };

  const handleSectionChange = (newSection: TSection) => {
    setSection(newSection);
  };

  return (
    <MainContainer>
      <NavContainer>
        <Navigation>
          <List>
            <ListItem onClick={() => handleSectionChange('profile')}>
              Perfil
              <ListItemUnderline show={section === 'profile'} />
            </ListItem>
            <ListItem onClick={() => handleSectionChange('studies')}>
              Estudios
              <ListItemUnderline show={section === 'studies'} />
            </ListItem>
            <ListItem onClick={() => handleSectionChange('tecnologies')}>
              Tecnologias
              <ListItemUnderline show={section === 'tecnologies'} />
            </ListItem>
          </List>
        </Navigation>
        <InformationContainer>{getSectionContent()}</InformationContainer>
      </NavContainer>
    </MainContainer>
  );
};

export default InfoPanel;
