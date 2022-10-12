import { desktopQuery } from 'Common/styles/breakpoints';
import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  children?: JSX.Element;
}

const H2 = styled.h2`
  width: fit-content;
  position: relative;
  font-size: 2.5rem;
  font-weight: 300;
  padding-bottom: 5px;

  &::after {
    content: '';
    width: 35%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    border-radius: 100px;
  }

  ${desktopQuery} {
    font-size: 3rem;
  }
`;

const CustomH1: FC<IProps> = ({ children }) => {
  return <H2>{children}</H2>;
};

export default CustomH1;
