import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IProjectMetadata, IProjectMetadataNoTecnologies } from 'Common/Interfaces/mxd.interface';
import { ITecnologies } from 'Common/Interfaces/Tecnologies.interface';
import { serialize } from 'next-mdx-remote/serialize';

const projectRoot = process.cwd();
const markdownFilesPath = path.join(projectRoot, 'src', 'Common', 'Projects');

const formatMetadata = (metadata: IProjectMetadataNoTecnologies, fileName: string): IProjectMetadata => {
  const tecnologies: ITecnologies[] = [];

  metadata.tecnologies.split(',').forEach((tec) => {
    tecnologies.push({ name: tec, image: `/images/tecnologies/${tec.toLocaleLowerCase()}.png` });
  });

  return { ...metadata, tecnologies, slug: fileName.replace('.mdx', '') };
};

export const getFilesNames = () => {
  return fs.readdirSync(markdownFilesPath);
};

export const getAllFilesMetadata = async () => {
  const filesNames = getFilesNames();

  const filesMetadata: IProjectMetadata[] = [];

  filesNames.forEach((fileName) => {
    const mdxSource = fs.readFileSync(path.join(markdownFilesPath, fileName));
    const { data } = matter(mdxSource);
    filesMetadata.push(formatMetadata(data as IProjectMetadataNoTecnologies, fileName));
  });

  return filesMetadata.sort((a, b) => a.id - b.id);
};

export const getFileBySlug = async (slug: string) => {
  const mdxSource = fs.readFileSync(path.join(markdownFilesPath, `${slug}.mdx`), 'utf8');
  const { data, content } = await matter(mdxSource);
  const mdxContent = await serialize(content);
  return { metadata: data, mdxContent };
};
