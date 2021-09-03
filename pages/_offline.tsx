import Offline from '../components/offline/offline';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

interface Props {

}

const OfflinePage: React.FC<Props> = (props) => {
const {  } = props;
  return (
    <Offline />
  );
};

export default OfflinePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale!;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['offline', 'footer', 'nav'])),
    },
  };
};