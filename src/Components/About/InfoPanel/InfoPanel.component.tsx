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

const DEF_IMG =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Farsgames.net%2Fwp-content%2Fuploads%2F2019%2F03%2Ffundacion-telefonica.jpeg&f=1&nofb=1';

const STUDIES_DATA: IStudies[] = [
  {
    image: 'https://www.centroloreto.com.ar/header_files/images/escudo_ch2.png',
    title: 'Secundario: Bachiller en economia',
    institute: ' - Loreto',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2241566105%2FLogo_Q_TWITER_400x400.jpg&f=1&nofb=1',
    title: 'Lic. Informatica: (en progreso)',
    institute: ' - UNQ',
  },
  { image: DEF_IMG, title: 'SCRUM: Metodologias Agiles', institute: ' - Fundacion Telefonica' },
  { image: DEF_IMG, title: 'JavaScript: Programacion en JavaScript', institute: ' - Fundacion Telefonica' },
];

const TECNOLOGIES_DATA: ITecnology[] = [
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NEEyDaWyJpkVlADv5Z_aNAHaIj%26pid%3DApi&f=1',
    name: 'HTML',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.3yIVq4yaJnIb40HUu7GZxAHaIc%26pid%3DApi&f=1',
    name: 'CSS',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2019%2F01%2FJavaScript_Logo-700x700.png&f=1&nofb=1',
    name: 'JavaScript',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftivasys.com%2Fwp-content%2Fuploads%2F2019%2F09%2FReact.js_logo-512-190x190.png&f=1&nofb=1',
    name: 'React.js',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Freduxjs%2Fredux%2Fmaster%2Flogo%2Flogo.png&f=1&nofb=1',
    name: 'Redux',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uKcXMiwIIUy4xkgtEto6kAAAAA%26pid%3DApi&f=1',
    name: 'Next.js',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdownload.logo.wine%2Flogo%2FNode.js%2FNode.js-Logo.wine.png&f=1&nofb=1',
    name: 'Node.js',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.servernoobs.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fmongodb-logo-1.png&f=1&nofb=1',
    name: 'MongoDB',
  },
  {
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2F0%2F04%2FLinux_logo.png%2Frevision%2Flatest%3Fcb%3D20120814052336&f=1&nofb=1',
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
