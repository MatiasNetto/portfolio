import { desktopQuery } from 'Common/styles/breakpoints';
import colors from 'Common/styles/colors';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  background: ${colors.lightBackground};

  ${desktopQuery} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TecnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const TecnologyName = styled.h4`
  font-size: 0.85rem;
  font-weight: 300;
  text-align: center;
  margin: 10px 0 0 0;
  white-space: nowrap;

  ${desktopQuery} {
    font-size: 1rem;
  }
`;

interface IProps {
  tecnologies?: string;
  children: string;
}

const Tecnologies: FC<IProps> = ({ children }) => {
  const tecArray = children.split(',');
  return (
    <Container>
      {tecArray.map((tec) => (
        <TecnologyContainer key={tec}>
          <Image
            src={`/images/tecnologies/${tec.toLocaleLowerCase()}.png`}
            alt={tec}
            title={tec}
            width={48}
            height={48}
            objectFit="contain"
          />
          <TecnologyName>{tec}</TecnologyName>
        </TecnologyContainer>
      ))}
    </Container>
  );
};

export default Tecnologies;
