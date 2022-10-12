import { fadeIn } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import { Children, FC } from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button<{ contained?: boolean; delay: number }>`
  border: ${({ contained }) => (contained ? `2px solid ${colors.lightBlue}` : 'none')};
  background: ${({ contained }) => (contained ? 'transparent' : colors.lightBlue)};
  border-radius: 4px;
  margin-right: 1rem;
  padding: 0.6rem 0.8rem;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;

  opacity: 0;
  animation: 1s ${({ delay }) => 0.7 + delay}s ${fadeIn} forwards;

  ${desktopQuery} {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
`;

interface IButton {
  children?: JSX.Element;
  to: string;
  contained?: boolean;
}

const Button: FC<IButton> = ({ children, to, contained = false }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <ButtonElement delay={0.1} contained={contained}>
        {children}
      </ButtonElement>
    </a>
  );
};

export default Button;
