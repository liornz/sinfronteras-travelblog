import { useRouter } from 'next/router';
import DestinationsGrid from '../destinations/destinations-grid';
import styles from 'featured-destinations.module.scss';
import { post } from '../../lib/types';

interface Props {
  destinations: post[];
}

const FeaturedDestinations: React.FC<Props> = (props) => {
  const { destinations } = props;
  const router = useRouter();
  return (
    <div>
      <h1 className="header">
        {router.locale === 'en-US'
          ? 'FEATURED DESTINATIONS'
          : 'DESTINOS DESTACADOS'}
      </h1>
      <div className="header-underline"></div>
      <DestinationsGrid destinations={destinations} />
    </div>
  );
};

export default FeaturedDestinations;
