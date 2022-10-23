import ContactForm from 'Components/Contact/ContactForm/ContactForm';
import SocialMediaDisplay from 'Components/Contact/SocialMediaDisplay/SocialMediaDisplay';
import Navbar from 'Components/Utils/Navbar';
import TopText from 'Components/Utils/TopText';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-bottom: 10vh;
`;

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Matias Netto - Contacto</title>
      </Head>
      <TopText subtitle="Es la hora" title="Contactame!" />

      <Container>
        <ContactForm />
        <SocialMediaDisplay />
      </Container>
    </>
  );
};

export default Contact;
