import styled, { keyframes } from 'styled-components';
import colors from 'Common/styles/colors';
import { fadeInLeft } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${desktopQuery} {
    width: 600px;
    align-items: center;
    justify-content: center;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${desktopQuery} {
    height: 60%;
    align-items: flex-start;
    justify-content: start;
  }
`;

export const Navigation = styled.nav`
  width: 90%;
  margin-top: 2rem;

  ${desktopQuery} {
    width: fit-content;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;

  opacity: 0;
  animation: 1s 0.2s ${fadeInLeft} forwards;

  ${desktopQuery} {
    margin-right: 2rem;
    font-size: 1.5rem;
  }
`;

const listApearAnimation = keyframes`
  0% {
    transform: scaleX(0%);
  }
  100% {
    transform: scaleX(100%);
    opacity: 100%;
  }
`;

export const ListItemUnderline = styled.div<{ show: boolean }>`
  width: 100%;
  height: 2px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  background: ${colors.lightBlue};
  opacity: 0%;
  animation: 0.8s ${listApearAnimation} forwards;
`;

export const InformationContainer = styled.section`
  width: 90%;
  margin: 0 auto;

  ${desktopQuery} {
    width: 110%;
  }
`;
