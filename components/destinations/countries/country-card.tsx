import Image from 'next/image';
import Link from 'next/link';
import styles from './country-card.module.scss';
import { country } from '../../../lib/types';

interface Props {
  country: country;
}

const CountryCard: React.FC<Props> = (props) => {
  const { slug, name, flag, image } = props.country;
  const imagePath = `/images/countries/${slug}/${image}`;
  const flagPath = `/images/countries/${slug}/${flag}`;
  return (
    <Link href={`/destinations/${slug}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={`image representing ${name}`}
              width={600}
              height={350}
              layout="responsive"
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.flag}>
            <Image
              src={flagPath}
              alt={`flag of ${name}`}
              width={600}
              height={350}
              layout="responsive"
            />
          </div>
          <div className={styles.title}>
            <h4>{name}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CountryCard;
