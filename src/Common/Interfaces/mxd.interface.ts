export interface IProjectMetadataNoTecnologies {
  id: number;
  title: string;
  subtitle: string;
  website: string;
  image: string;
  tecnologies: string;
}

export interface IProjectMetadata {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  website: string;
  image: string;
  tecnologies: { name: string; image: string }[];
}
