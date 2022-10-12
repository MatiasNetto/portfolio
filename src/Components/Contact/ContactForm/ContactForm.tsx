import { ChangeEvent, FC, useState } from 'react';
import { FormContainer, Input, InputContainer, InputLogo, SubmitButton, TextArea } from './ContactForm.styles';

interface IFormData {
  name: string;
  contact: string;
  subject: string;
  phone: string;
  content: string;
}

const defaultFormData: IFormData = {
  name: '',
  contact: '',
  subject: '',
  phone: '',
  content: '',
};

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<IFormData>(defaultFormData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((data) => ({ ...data, content: e.target.value }));
  };

  const handleSubmit = async () => {
    fetch('https://formspree.io/f/xgedbjok', { method: 'POST', body: JSON.stringify(formData) })
      .then(() => {
        alert('Formulario enviado con exito');
        setFormData(defaultFormData);
      })
      .catch((err) => {
        console.log(err);
        setFormData(defaultFormData);
      });
  };

  return (
    <FormContainer>
      <InputContainer delay={0.2}>
        <InputLogo src="/icons/user-regular.svg" />
        <Input placeholder="Nombre" name="name" value={formData.name} onChange={handleInputChange} />
      </InputContainer>
      <InputContainer delay={0.3}>
        <InputLogo src="/icons/envelope-regular.svg" />
        <Input placeholder="Email" name="contact" value={formData.contact} onChange={handleInputChange} />
      </InputContainer>
      <InputContainer delay={0.4}>
        <InputLogo src="/icons/question-regular.svg" />
        <Input placeholder="Asunto" name="subject" value={formData.subject} onChange={handleInputChange} />
      </InputContainer>
      <InputContainer delay={0.5}>
        <InputLogo src="/icons/phone-solid.svg" />
        <Input placeholder="Telefono/celular" name="phone" value={formData.phone} onChange={handleInputChange} />
      </InputContainer>
      <TextArea
        placeholder="Escribe tu mensaje..."
        name="content"
        isOpen={formData.content !== ''}
        onChange={handleTextAreaChange}
        value={formData.content}
      />
      {formData.contact && formData.content && <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>}
    </FormContainer>
  );
};

export default ContactForm;
