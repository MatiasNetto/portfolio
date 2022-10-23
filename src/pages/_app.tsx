import styled from 'styled-components';
import colors from '../Common/styles/colors';
import Navbar from '../Components/Utils/Navbar';
import '../../public/styles/globals.css';
import { desktopQuery } from 'Common/styles/breakpoints';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FC } from 'react';

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

const GenericHead: FC = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Matias Netto - Frontend Developer</title>
        <meta name="title" content="Matias Netto - Frontend Developer" />
        <meta
          name="description"
          content="Soy desarollador web Frontend especializado en React.js ⚛️, aunque con conocimientos de Backend con Node, Express y MongoDB.
estudiante de licenciatura informatica"
        ></meta>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matiasnetto.com.ar/" />
        <meta property="og:title" content="Matias Netto - Frontend Developer" />
        <meta
          property="og:description"
          content="Soy desarollador web Frontend especializado en React.js ⚛️, aunque con conocimientos de Backend con Node, Express y MongoDB.
          estudiante de licenciatura informatica"
        />
        <meta
          property="og:image"
          content="https://matiasnetto.com.ar/images/projects/PersonalWebPage/personal-web-page-img-1.jpg/"
        ></meta>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://matiasnetto.com.ar/" />
        <meta property="twitter:title" content="Matias Netto - Frontend Developer" />
        <meta
          property="twitter:description"
          content="Soy desarollador web Frontend especializado en React.js ⚛️, aunque con conocimientos de Backend con Node, Express y MongoDB.
estudiante de licenciatura informatica"
        />
        <meta
          property="twitter:image"
          content="https://matiasnetto.com.ar/images/projects/PersonalWebPage/personal-web-page-img-1.jpg/"
        ></meta>
      </Head>
    </>
  );
};

function MyApp({ Component, pageProps }: IProps) {
  const router = useRouter();

  if (router.pathname === '/projects/[slug]') {
    return (
      <>
        <GenericHead />
        <Background>
          <Component {...pageProps} />
          <Navbar />
        </Background>
      </>
    );
  }

  return (
    <>
      <GenericHead />
      <Background>
        <Container>
          <Component {...pageProps} />
          <Navbar />
        </Container>
      </Background>
    </>
  );
}

export default MyApp;
