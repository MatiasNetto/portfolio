import styled from 'styled-components';
import colors from '../Common/styles/colors';
import Navbar from '../Components/Utils/Navbar';
import '../../public/styles/globals.css';
import { desktopQuery } from 'Common/styles/breakpoints';
import { useRouter } from 'next/router';

const Background = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.backgroundColor};
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 1rem 2rem 2rem 2rem;
  ${desktopQuery} {
    max-width: 1200px;
    padding: 1rem 0 2rem 0;
  }
`;
interface IProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IProps) {
  const router = useRouter();

  if (router.pathname === '/projects/[slug]') {
    return (
      <Background>
        <Component {...pageProps} />
        <Navbar />
      </Background>
    );
  }

  return (
    <Background>
      <Container>
        <Component {...pageProps} />
        <Navbar />
      </Container>
    </Background>
  );
}

export default MyApp;
