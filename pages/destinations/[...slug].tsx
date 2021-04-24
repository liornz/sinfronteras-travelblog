import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getCountryFileNames, getFileData, getFileNamesPerCountry } from '../../lib/data-utils';
import React, { Fragment } from 'react';
import SelectedVideo from '../../components/single-destination-page/selected-video';
import SiteInfo from '../../components/single-destination-page/site-info';
import Comments from '../../components/comments/comments';
import { post } from '../../lib/types';

interface Props {
  fileData: post;
}

const SingleDestinationPage: React.FC<Props> = (props) => {
  const { fileData } = props;
  
  const slug = useRouter().query.slug as string[];
  const country = slug[0];
  const fileName = slug[1];
  // console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  return (
    <Fragment>
      <SelectedVideo
        youtubeId={fileData.youtubeId}
        title={fileData.title}
        subtitle={fileData.subtitle}
      />
      <SiteInfo
        text={fileData.content}
        location={fileData.location}
        zoom={fileData.zoom}
      />
      <Comments destinationSlug={fileName} countrySlug={country} />
    </Fragment>
  );
};

export default SingleDestinationPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params!.slug as string[];
   const country = slug[0];
   const fileName = slug[1];
  const locale = context.locale as string;
  const data = getFileData(country, locale, fileName);

  return {
    props: {
      fileData: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let pathsArray: {
    params: {
      slug: string[];
    };
    locale: string;
  }[] = [];
  const countryFileNames = getCountryFileNames('en-US');
  const countryFileSlugs = countryFileNames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );
  for (const country of countryFileSlugs) {
    const fileNames = getFileNamesPerCountry(country, 'en-US');
    const fileSlugs = fileNames.map((fileName) =>
      fileName.replace(/\.md$/, '')
    );
    const pathsEn = fileSlugs.map((file) => ({
      params: { slug: [country, file] },
      locale: 'en-US'
    }));
   
    const pathsEs = fileSlugs.map((file) => ({
      params: { slug: [country, file] },
      locale: 'es-AR',
    }));
    const pathsCountry = pathsEn.concat(pathsEs);
    pathsArray = pathsArray.concat(pathsCountry);
  }

  return {
    paths: pathsArray,
    fallback: false,
  };
};