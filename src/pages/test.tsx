import { FC, Children, ReactNode } from 'react';
import { readFile, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllFilesMetadata } from 'Lib/mxd';

// interface ITecnology {
//   name: string;
//   image: string;
// }

// interface ITestProps {
//   title: string;
//   subtitle: string;
//   website: string;
//   image: string;
//   tecnologies: ITecnology[];
//   mxdSource: MDXRemoteSerializeResult<Record<string, unknown>>;
// }

// const CustomComponent: FC<{ titulo: string; valor: string }> = ({ titulo, valor }) => {
//   return (
//     <div>
//       <p style={{ color: '#f00' }}>
//         {titulo}: {valor}
//       </p>
//     </div>
//   );
// };

// const CustomTitle: FC<{ texto: ReactNode }> = ({ texto }) => {
//   return <h1 style={{ color: '#0f0' }}>{texto}</h1>;
// };

// const Test: FC<ITestProps> = (props) => {
//   console.log(props);
//   return (
//     <div style={{ color: '#fff' }}>
//       <h1>{props.title}</h1>
//       <h2>{props.subtitle}</h2>
//       <img src={props.image} alt="sahie" />
//       <MDXRemote
//         {...props.mxdSource}
//         components={{ CustomComponent, h1: ({ children }) => <CustomTitle texto={children} /> }}
//       />
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   //   console.log(__dirname);
//   const file = readFileSync(
//     '/home/matias/Documentos/Web/Proyectos/Portfolio/portfolio/src/Common/Projects/toscana.mdx',
//     'utf8'
//   );

//   const data = matter(file);

//   const mxdSource = await serialize(data.content);

//   return {
//     props: { ...data.data, mxdSource }, // will be passed to the page component as props
//   };
// }

const Test: FC<{ data: object[] }> = ({ data }) => {
  console.log(data);
  return <div style={{ color: '#fff' }}></div>;
};

export async function getStaticProps() {
  const data = await getAllFilesMetadata();

  return {
    props: { data },
  };
}

export default Test;
