import { fadeInLeft, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15%;

  ${desktopQuery} {
    margin-top: 30%;
  }
`;

export const InputContainer = styled.div<{ delay: number }>`
  width: 100%;
  display: flex;
  padding: 1rem 1.5rem 1rem 1rem;
  margin-bottom: 1.5rem;

  opacity: 0;
  animation: 1s ${({ delay }) => delay}s ${fadeInLeft} forwards;
`;

export const InputLogo = styled.img`
  width: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 0.5rem;
  color: #fff;
  font-size: 1rem;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.lightBlue};
  padding-left: 5px;

  &::placeholder {
    color: #fff4;
    /* padding-left: 5px; */
  }
`;

export const TextArea = styled.textarea<{ isOpen: boolean }>`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '10rem' : '2rem')};
  border: none;
  border-radius: 5px 5px 1px 1px;
  outline: none;
  background-color: transparent;
  color: #fff;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  transition: height 1s;
  border: ${({ isOpen }) => (isOpen ? `1px solid ${colors.lightBlue}` : `0 solid ${colors.lightBlue}`)};
  border-bottom: 1px solid ${colors.lightBlue};

  opacity: 0;
  animation: 1s 0.6s ${fadeInUp} forwards;
`;

export const SubmitButton = styled.div`
  border: 2px solid ${colors.lightBlue};
  background: transparent;
  border-radius: 4px;
  margin-top: 1rem;
  padding: 0.6rem 0.8rem;
  color: #fff;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;

  ${desktopQuery} {
    font-size: 1.2rem;
    padding: 0.8rem 1.4rem;
  }
`;
