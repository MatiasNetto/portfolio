import { ITecnologies } from 'Common/Interfaces/Tecnologies.interface';

export interface ITecnologiesRowInterface {
  tecnologies: ITecnologies[];
}

export interface ITecnology {
  delay: number;
  tecnology: ITecnologies;
}
