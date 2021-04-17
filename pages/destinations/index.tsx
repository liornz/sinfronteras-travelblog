import { GetStaticProps } from 'next';
import AllDestinations from '../../components/destinations/all-destinations';
import { getAllPosts } from '../../lib/data-utils';
import { post } from '../../lib/types';

interface Props {
  allPosts: post[];
}

const AllDestinationsPage: React.FC<Props> = (props) => {
  const { allPosts } = props;
  return (
 
    <AllDestinations destinations={allPosts} />
  );
};

export default AllDestinationsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale;
  const allPosts = getAllPosts(locale || 'en-US');

  return {
    props: {
      allPosts: allPosts,
    },
  };
};
