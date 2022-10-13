import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import Image from 'next/image';
import { FC, HTMLAttributes, HTMLProps } from 'react';
import styled from 'styled-components';

const ImageComponent = styled(Image)`
  padding: 0.5rem !important;
  background: ${colors.lightBackground};

  ${desktopQuery} {
    padding: 1rem !important;
  }
`;

const CustomImage: FC<HTMLProps<HTMLImageElement>> = ({ src, alt }) => {
  return <ImageComponent src={src ?? ''} alt={alt} height={560} width={960} objectFit="contain" />;
};

export default CustomImage;
