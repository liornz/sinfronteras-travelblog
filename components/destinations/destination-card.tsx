import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';

import styles from './destination-card.module.scss';
import { post } from '../../lib/types';

interface Props {
  post: post
} 
  

const DestinationCard: React.FC<Props> = (props) => {
  const { slug, title, subtitle, image } = props.post;
  const imagePath = `/images/posters/${image}`;

  return (
    <Link href={`/destinations/${slug}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={600}
              height={350}
              layout="responsive"
            />
            <div className={styles.overlay}>
              <FaPlay color="white" size="3rem" />
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              <h4>{title}</h4>
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
