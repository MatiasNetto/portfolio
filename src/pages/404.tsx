import { fadeIn, fadeInLeft, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  color: #eee;
  margin: 2rem 0;
  opacity: 0;
  animation: 2s 0.2s ${fadeIn} forwards;
`;

const ErrorText = styled.h2`
  font-size: 1.5rem;
  color: #ccc;
  text-align: center;
  margin: 0;
  opacity: 0;
  animation: 2s 0.3s ${fadeIn} forwards;
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  background: ${colors.lightBlue};
  border: none;
  color: #fff;
  font-size: 1.2rem;
  border-radius: 6px;
  margin-top: 2.5rem;
  opacity: 0;
  animation: 1.5s 1.3s ${fadeInUp} forwards;

  ${desktopQuery} {
    font-size: 1.5rem;
  }
`;

const Page404: FC = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <ErrorText>Pagina no encontrada 😔</ErrorText>
      <Link href="/" passHref>
        <Button>Volver al inicio</Button>
      </Link>
    </Container>
  );
};

export default Page404;
