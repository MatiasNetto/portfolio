import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { desktopQuery } from '../../Common/styles/breakpoints';
import { fadeInUp } from 'Common/styles/animations';
import colors from 'Common/styles/colors';
import { useRouter } from 'next/router';
import { SvgClipboard, SvgHouse, SvgPaperPlane, SvgUser } from './NavbarIcons';

const Container = styled.div`
  height: 3rem;
  width: 70%;
  position: fixed;
  z-index: 9999999999;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 999px;
  background: #191919;
  padding: 0 1rem;

  opacity: 0;
  animation: 1s 0.2s ${fadeInUp} forwards;

  ${desktopQuery} {
    height: 4rem;
    width: fit-content;
    justify-content: center;
    bottom: 3rem;
  }
`;

const NavbarLink = styled.a`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  margin: 0;
  padding: 0.5rem;
  cursor: pointer;

  ${desktopQuery} {
    height: 3rem;
    width: 3rem;
    margin: 0 1rem;
  }
`;

const IconImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const Navbar: FC = () => {
  const { route } = useRouter();

  return (
    <Container>
      <Link href="/" passHref={true}>
        <NavbarLink href="/">
          <i>
            <SvgHouse fill={route === '/' ? colors.lightBlue : '#fffff9'} />
          </i>
        </NavbarLink>
      </Link>
      <Link href="/about" passHref={true}>
        <NavbarLink href="/about">
          <i>
            <SvgUser fill={route === '/about' ? colors.lightBlue : '#fffff9'} />
          </i>
        </NavbarLink>
      </Link>
      <Link href="/projects" passHref={true}>
        <NavbarLink href="/projects">
          <i>
            <SvgClipboard fill={route.includes('/projects') ? colors.lightBlue : '#fffff9'} />
          </i>
        </NavbarLink>
      </Link>
      <Link href="/contact" passHref={true}>
        <NavbarLink href="/contact">
          <i>
            <SvgPaperPlane fill={route === '/contact' ? colors.lightBlue : '#fffff9'} />
          </i>
        </NavbarLink>
      </Link>
    </Container>
  );
};

export default Navbar;
