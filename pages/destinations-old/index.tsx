import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import AllDestinations from '../../components/destinations/all-destinations';
import { getAllPosts } from '../../lib/data-utils';
import { post } from '../../lib/types';

interface Props {
  allPosts: {
    en: post[],
    es: post[]
  };
}

const AllDestinationsPage: React.FC<Props> = (props) => {
  const { allPosts } = props;
  const locale = useRouter().locale;
  const destinations = locale === 'en-US' ? allPosts.en : allPosts.es;
  return (
 
    <AllDestinations destinations={destinations} />
  );
};

export default AllDestinationsPage;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsEn = getAllPosts('en-US');
  const allPostsEs = getAllPosts('es-AR');
  const allPosts = {
    en: allPostsEn,
    es: allPostsEs
  }
  return {
    props: {
      allPosts: allPosts,
    },
  };
};
