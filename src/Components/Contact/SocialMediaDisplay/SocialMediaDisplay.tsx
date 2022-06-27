import { FC } from 'react';
import { Container, SocialMediaIcon } from './SocialMediaDisplay.styles';

const SocialMediaDisplay: FC = () => {
  return (
    <Container>
      <SocialMediaIcon src="/icons/github-brands.svg" />
      <SocialMediaIcon src="/icons/linkedin-brands.svg" />
      <SocialMediaIcon src="/icons/github-brands.svg" />
    </Container>
  );
};

export default SocialMediaDisplay;
