import Image from "next/image";
import Link from "next/link";
import styles from "./country-card.module.scss";
import { country } from "../../../lib/types";

interface Props {
  country: country;
}

const CountryCard: React.FC<Props> = (props) => {
  const { slug, name, flag, image, flagBlurDataURL, blurDataURL } =
    props.country;
  const imagePath = `/images/countries/${slug}/${image}`;
  const flagPath = `/images/countries/${slug}/${flag}`;
  return (
    <Link href={`/destinations/${slug}`} passHref>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={`image representing ${name}`}
            width={666}
            height={375}
            style={{ width: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.title}>
          <h1>{name}</h1>
          <div className={styles.flag}>
            <Image
              src={flagPath}
              alt={`flag of ${name}`}
              width={120}
              height={70}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 745px) 100vw,
              (max-width: 1177) 50vw,
              (max-width: 1560) 33vw,
              25vw"
              placeholder="blur"
              blurDataURL={flagBlurDataURL}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
