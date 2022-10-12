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
    image: '/images/instituciones/unq.png',
    title: 'Lic. Informatica: (en progreso)',
    institute: ' - UNQ',
  },
  {
    image: '/images/instituciones/fundacion-telefonica.png',
    title: 'SCRUM: Metodologias Agiles',
    institute: ' - Fundacion Telefonica',
  },
  {
    image: '/images/instituciones/fundacion-telefonica.png',
    title: 'JavaScript: Programacion en JavaScript',
    institute: ' - Fundacion Telefonica',
  },
  {
    image: '/images/instituciones/loreto.png',
    title: 'Secundario: Bachiller en economia',
    institute: ' - Loreto',
  },
];

const TECNOLOGIES_DATA: ITecnology[] = [
  {
    image: '/images/tecnologies/html.png',
    name: 'HTML',
  },
  {
    image: '/images/tecnologies/css.png',
    name: 'CSS',
  },
  {
    image: '/images/tecnologies/javascript.png',
    name: 'JavaScript',
  },
  {
    image: '/images/tecnologies/react.png',
    name: 'React.js',
  },
  {
    image: '/images/tecnologies/redux.png',
    name: 'Redux',
  },
  {
    image: '/images/tecnologies/next.png',
    name: 'Next.js',
  },
  {
    image: '/images/tecnologies/node.png',
    name: 'Node.js',
  },
  {
    image: '/images/tecnologies/mongodb.png',
    name: 'MongoDB',
  },
  {
    image: '/images/tecnologies/linux.png',
    name: 'Linux',
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
