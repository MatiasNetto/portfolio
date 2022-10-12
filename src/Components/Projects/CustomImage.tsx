import colors from 'Common/styles/colors';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  alt: string;
  src: string;
}

const ImageComponent = styled(Image)`
  padding: 1rem !important;
  background: ${colors.lightBackground};
`;

const CustomImage: FC<IProps> = ({ alt, src }) => {
  return <ImageComponent src={src} alt={alt} height={590} width={960} objectFit="scale-down" />;
};

export default CustomImage;
