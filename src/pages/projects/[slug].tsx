import { IProjectMetadata } from 'Common/Interfaces/mxd.interface';
import CustomH1 from 'Components/Projects/CustomH1';
import Hero from 'Components/Projects/Hero/Hero';
import { getFileBySlug, getFilesNames } from 'Lib/mxd';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import styled from 'styled-components';
import Button from 'Components/Projects/CustomButton';
import CustomImage from 'Components/Projects/CustomImage';
import Tecnologies from 'Components/Projects/TecnologiesDisplay';
import CustomP from 'Components/Projects/CustomP';
import Galery from 'Components/Projects/Galery';
import { desktopQuery } from 'Common/styles/breakpoints';
import Head from 'next/head';

interface IProjectBlogProps {
  metadata: IProjectMetadata;
  mdxContent: MDXRemoteSerializeResult<Record<string, unknown>>;
}

// Components

const MainContainer = styled.main`
  width: 100%;
  padding-bottom: 10vh;

  ${desktopQuery} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  color: #fff;
  padding: 0 2rem;

  ${desktopQuery} {
    max-width: 900px;
  }
`;

const components = { h1: CustomH1, p: CustomP, img: CustomImage, Button, Tecnologies, Galery };

const ProjectBlog: FC<IProjectBlogProps> = ({ metadata, mdxContent }) => {
  return (
    <>
      <Head>
        <title>Matias Netto - {metadata.title}</title>
      </Head>
      <MainContainer>
        <Hero image={metadata.image} title={metadata.title} subtitle={metadata.subtitle} />
        <ContentContainer>
          <MDXRemote {...mdxContent} components={components} />
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export const getStaticPaths = () => {
  const arr = getFilesNames();

  const paths = arr.map((name) => {
    return { params: { slug: name.replace('.mdx', '') } };
  });

  return { paths, fallback: false };
};

interface IProps extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IProps;
  const { metadata, mdxContent } = await getFileBySlug(slug);

  return {
    props: { metadata, mdxContent },
  };
};

export default ProjectBlog;
