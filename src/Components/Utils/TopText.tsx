import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { ITopTextProps } from '../../Common/Interfaces/Utils/TopText.interface';
import { desktopQuery } from '../../Common/styles/breakpoints';
import colors from '../../Common/styles/colors';
import { fadeIn } from 'Common/styles/animations';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h5`
  color: #fff;
  font-size: 1.2rem;
  margin: 0;

  opacity: 0;
  animation: 1s ${fadeIn} forwards;

  ${desktopQuery} {
    font-size: 1.4rem;
  }
`;

const Title = styled.h4`
  color: ${colors.lightBlue};
  font-size: 1.4rem;
  margin: 0;

  opacity: 0;
  animation: 1s 0.1s ${fadeIn} forwards;

  ${desktopQuery} {
    font-size: 1.6rem;
  }
`;

const TopText: FC<ITopTextProps> = ({ subtitle, title }) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Container>
  );
};

export default TopText;
