import { FC, HTMLAttributeAnchorTarget } from 'react';
import { fadeIn, fadeInLeft } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import styled, { css, Keyframes } from 'styled-components';
import Link from 'next/link';

type TAnimations = 'fadeInLeft' | 'fadeIn';

export const ButtonStyled = styled.button<{ contained?: boolean; delay: number; animation: TAnimations }>`
  border: ${({ contained }) => (contained ? `1px solid ${colors.lightBlue}` : 'none')};
  background: ${({ contained }) => (contained ? 'transparent' : colors.lightBlue)};
  border-radius: 4px;
  margin-right: 1rem;
  padding: 0.7rem 1rem;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;

  opacity: 0;
  animation: ${({ delay, animation }) =>
    animation === 'fadeIn'
      ? css`1s ${0.7 + delay}s ${fadeIn} forwards`
      : animation === 'fadeInLeft'
      ? css`1s ${0.7 + delay}s ${fadeInLeft} forwards`
      : ''};

  ${desktopQuery} {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
`;

interface IButtonProps {
  children?: JSX.Element | string;
  delay?: number;
  contained?: boolean;
  animation?: TAnimations;
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const Button: FC<IButtonProps> = ({ children, contained, delay = 0, animation = 'fadeIn', href, target }) => {
  if (target === '_blank')
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <ButtonStyled contained={contained} delay={delay} animation={animation}>
          {children}
        </ButtonStyled>
      </a>
    );

  return (
    <Link href={href} passHref prefetch>
      <ButtonStyled contained={contained} delay={delay} animation={animation}>
        {children}
      </ButtonStyled>
    </Link>
  );
};

export default Button;
