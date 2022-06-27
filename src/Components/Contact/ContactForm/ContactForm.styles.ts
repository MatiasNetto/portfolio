import { fadeInLeft, fadeInUp } from 'Common/styles/animations';
import { desktopQuery } from 'Common/styles/breakpoints';
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
  background: #212537;
  border-radius: 100px;
  padding: 1rem 1.5rem;
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

  &::placeholder {
    color: #fff4;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid #aaa;
  outline: none;
  background-color: transparent;
  color: #fff;
  padding-left: 0.5rem;
  margin-top: 1rem;
  font-size: 0.9rem;

  opacity: 0;
  animation: 1s 0.6s ${fadeInUp} forwards;
`;
