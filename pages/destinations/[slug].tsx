import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getDataFileNames, getFileData } from '../../lib/data-utils';
import React, { Fragment } from 'react';
import SelectedVideo from '../../components/single-destination-page/selected-video';
import SiteInfo from '../../components/single-destination-page/site-info';
import Comments from '../../components/comments/comments';
import { post } from '../../lib/types';

interface Props {
  fileData: {
    en: post;
    es: post;
  };
}

const SingleDestinationPage: React.FC<Props> = (props) => {
  const { fileData } = props;
  const router = useRouter();
  const locale = router.locale;
  const slug = router.query.slug;

  let text: string;
  let title: string;

  switch (locale) {
    case 'en-US':
      text = fileData.en.content;
      title = fileData.en.title;
      break;
    case 'es-AR':
      text = fileData.es.content;
      title = fileData.es.title;
      break;
    default:
      text = fileData.en.content;
      title = fileData.en.title;
  }

  return (
    <div style={{ backgroundColor: '#E9ECEF' }}>
      <SelectedVideo youtubeId={fileData.en.youtubeId} title={title} />
      <SiteInfo
        text={text}
        location={fileData.en.location}
        zoom={fileData.en.zoom}
      />
      <Comments destinationSlug={slug as string} />
    </div>
  );
};

export default SingleDestinationPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  const dataEn = getFileData(slug as string, 'en-US');
  const dataEs = getFileData(slug as string, 'es-AR');
  const data = {
    en: dataEn,
    es: dataEs,
  };

  return {
    props: {
      fileData: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = getDataFileNames('en-US');
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const pathsEn = slugs.map((slug) => ({
    params: { slug: slug },
    locale: 'en-US',
  }));
  const pathsEs = slugs.map((slug) => ({
    params: { slug: slug },
    locale: 'es-AR',
  }));
  const paths = pathsEn.concat(pathsEs);
  return {
    paths: paths,
    fallback: false,
  };
};
