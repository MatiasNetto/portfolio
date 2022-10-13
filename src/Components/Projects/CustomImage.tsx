import colors from 'Common/styles/colors';
import Image from 'next/image';
import { FC, HTMLAttributes, HTMLProps } from 'react';
import styled from 'styled-components';

const ImageComponent = styled(Image)`
  padding: 1rem !important;
  background: ${colors.lightBackground};
`;

const CustomImage: FC<HTMLProps<HTMLImageElement>> = ({ src, alt }) => {
  return <ImageComponent src={src ?? ''} alt={alt} height={590} width={960} objectFit="scale-down" />;
};

export default CustomImage;
