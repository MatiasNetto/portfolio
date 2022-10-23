import { FC } from 'react';
import { Container, SocialMediaIcon } from './SocialMediaDisplay.styles';

const SocialMediaDisplay: FC = () => {
  return (
    <Container>
      <a target="_blank" rel="noreferrer" href="https://github.com/matiasnetto">
        <SocialMediaIcon src="/icons/github-brands.svg" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/matiasnetto/">
        <SocialMediaIcon src="/icons/linkedin-brands.svg" />
      </a>
      <a href="mailto: matiasnetto03@gmail.com">
        <SocialMediaIcon src="/icons/envelope-solid.svg" />
      </a>
    </Container>
  );
};

export default SocialMediaDisplay;
