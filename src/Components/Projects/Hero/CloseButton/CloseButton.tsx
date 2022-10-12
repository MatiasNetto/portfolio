import { fadeInDown } from 'Common/styles/animations';
import colors from 'Common/styles/colors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

interface IIcon {
  width?: string;
  height?: string;
  fill?: string;
}

const XIcon: FC<IIcon> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06a31.894 31.894 0 0 1-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1 56.6 467.6c-6.328 7.594-15.42 11.52-24.59 11.52a31.907 31.907 0 0 1-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206 327.4 43.5c11.3-13.58 31.48-15.42 45.06-4.094 13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z" />
  </svg>
);

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  padding: 0.8rem;
  border: none;
  outline: none;
  border-radius: 100%;
  background: ${colors.lightBackground}cc;
  z-index: 99;

  opacity: 0;
  animation: 1s 1.5s ${fadeInDown} forwards;
`;

const CloseButton: FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Container onClick={handleClick}>
      <XIcon fill="#fffc" height="1.5rem" width="1.5rem" />
    </Container>
  );
};

export default CloseButton;
