import { FC } from 'react';
import { FormContainer, Input, InputContainer, InputLogo, TextArea } from './ContactForm.styles';

const ContactForm: FC = () => {
  return (
    <FormContainer>
      <InputContainer delay={0.2}>
        <InputLogo src="/icons/user-regular.svg" />
        <Input placeholder="Nombre" />
      </InputContainer>
      <InputContainer delay={0.3}>
        <InputLogo src="/icons/envelope-regular.svg" />
        <Input placeholder="Email" />
      </InputContainer>
      <InputContainer delay={0.4}>
        <InputLogo src="/icons/question-regular.svg" />
        <Input placeholder="Asunto" />
      </InputContainer>
      <InputContainer delay={0.5}>
        <InputLogo src="/icons/phone-solid.svg" />
        <Input placeholder="Telefono/celular" />
      </InputContainer>
      <TextArea placeholder="Escribe tu mensaje..." />
    </FormContainer>
  );
};

export default ContactForm;
