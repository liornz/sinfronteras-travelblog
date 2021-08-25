import Image from 'next/image';
import Link from 'next/link';

import styles from './destination-card.module.scss';
import { post } from '../../lib/types';

interface Props {
  post: post;
} 
  

const DestinationCard: React.FC<Props> = (props) => {
  const { countrySlug, slug, title, subtitle, image, blurDataURL } = props.post;
  const imagePath = `/images/posters/${image}`;

  return (
    <Link href={`/destinations/${countrySlug}/${slug}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={600}
              height={350}
              layout="responsive"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
            <div className={styles.subtitle}>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};


export default DestinationCard;
