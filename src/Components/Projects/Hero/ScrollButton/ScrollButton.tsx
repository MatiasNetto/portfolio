import { FC } from 'react';
import { Button } from './ScrollButton.styles';

interface IIcon {
  width?: string;
  height?: string;
  fill?: string;
}

const AngleDownIcon = (props: IIcon) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props} style={{ marginTop: '-18px' }}>
    <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
  </svg>
);

const ScrollButton: FC = () => {
  const handleButtonClick = () => {
    scrollTo({ top: window.innerHeight - 50, left: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={handleButtonClick}>
      <AngleDownIcon fill="#ffff" width="2rem" height="2rem" />
      <AngleDownIcon fill="#fffc" width="2rem" height="2rem" />
      <AngleDownIcon fill="#fff9" width="2rem" height="2rem" />
    </Button>
  );
};

export default ScrollButton;
