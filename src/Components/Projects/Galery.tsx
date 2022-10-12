import colors from 'Common/styles/colors';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  background: ${colors.lightBackground};
  padding: 1rem;
  margin: 3rem 0;
`;

const ImageContainer = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
`;

interface IProps {
  images: string[];
}

const Galery: FC<IProps> = ({ images }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={images[0]} alt="" layout="responsive" height={100} width={50} objectFit="contain" />
      </ImageContainer>
      <ImageContainer>
        <Image src={images[1]} alt="" layout="responsive" height={100} width={50} objectFit="contain" />
      </ImageContainer>
    </Container>
  );
};

export default Galery;
