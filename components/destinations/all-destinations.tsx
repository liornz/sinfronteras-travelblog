import { useRouter } from 'next/router';
import DestinationsGrid from '../destinations/destinations-grid';
import styles from 'all-destinations.module.scss';
import { post } from '../../lib/types';

interface Props {
  destinations: post[];
}

const AllDestinations: React.FC<Props> = (props) => {
  const { destinations } = props;
  const router = useRouter();
  return (
    <div>
      <h1 className="header">
        {router.locale === 'en-US'
          ? 'CHECK OUT THESE COOL VIDEOS'
          : 'ECHA UN VISTAZO A ESTOS VIDEOS GENIALES'}
      </h1>
      <div className="header-underline"></div>
      <DestinationsGrid destinations={destinations} />
    </div>
  );
};

export default AllDestinations;
