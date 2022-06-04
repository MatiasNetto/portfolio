import { ITecnologies } from 'Common/Interfaces/Tecnologies.interface';

export interface IProjectSlideProps {
  image: string;
  title: string;
  subtitle: string;
  tecnologies: ITecnologies[];
  website: string;
}
