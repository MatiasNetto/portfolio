import { FC } from 'react';
import CloseButton from './CloseButton/CloseButton';
import { IHeroProps } from './Hero.interface';
import {
  BackgoundImage,
  CenterContainer,
  MainContainer,
  ImageComponent,
  Title,
  InfoContainer,
  DataContainer,
  Subtitle,
} from './Hero.styles';
import ScrollButton from './ScrollButton/ScrollButton';

const Hero: FC<IHeroProps> = ({ image, title, subtitle }) => {
  return (
    <MainContainer>
      <CloseButton />

      <CenterContainer image={image}>
        <InfoContainer>
          <ImageComponent src={image} alt={title} />
          <DataContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </DataContainer>
        </InfoContainer>
        <BackgoundImage image={image} />
      </CenterContainer>

      <ScrollButton />
    </MainContainer>
  );
};

export default Hero;
