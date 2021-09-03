import Head from 'next/head';
import React from 'react';
import Shop from '../components/shop-page/shop';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

interface Props {}

const ShopPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Head>
        <title>Travelblog Sinfronteras - Shop Page</title>
        <meta
          name="description"
          content="Shop - Sinfronteras Travel Blog - Cool items for inspiration!"
        />
      </Head>
      <Shop />
    </React.Fragment>
  );
};

export default ShopPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['shop', 'footer', 'nav'])),
    },
  };
};
