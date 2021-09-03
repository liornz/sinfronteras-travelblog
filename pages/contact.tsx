import Head from 'next/head';
import React from 'react';
import Contact from '../components/contact-page/contact';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
interface Props {}

const ContactPage: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <Head>
        <title>Travelblog Sinfronteras - Contact Page</title>
        <meta
          name="description"
          content="Contact Page - Sinfronteras Travel Blog - Contact me!"
        />
      </Head>
      <Contact />
    </React.Fragment>
  );
};

export default ContactPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'footer', 'nav'])),
    },
  };
};
