import { FaFacebookSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { FaYoutubeSquare } from 'react-icons/fa';
import Image from 'next/image';
import victorAlaluf from '../../public/images/logo/victoralaluf.png';
import styles from './social-media.module.scss';

const SocialMedia: React.FC = () => {
  return (
    <div className={styles.container}>
      <a
        id="facebook"
        className={styles.item}
        href="https://www.facebook.com/victor.alaluf"
      >
        <FaFacebookSquare color="#4267B2" size="1.5rem" />
        <p className={styles.social_text}>FACEBOOK</p>
      </a>
      <a
        id="instagram"
        className={styles.item}
        href="https://www.instagram.com/alalufvictor.sinfronteras/"
      >
        <SiInstagram color="#833AB4" size="1.5rem" />
        <p className={styles.social_text}>INSTAGRAM</p>
      </a>
      <a
        id="youtube"
        className={styles.item}
        href="https://www.youtube.com/channel/UCWeBug5IyKmZq81ulHUKwkg"
      >
        <FaYoutubeSquare color="#FF0000" size="1.5rem" />
        <p className={styles.social_text}>YOUTUBE</p>
      </a>
      <a
        id="victoralaluf"
        className={styles.item}
        href="https://victoralaluf.com"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.image}>
          <Image
            src={victorAlaluf}
            alt="Victor Alaluf Art Logo"
            width={25}
            height={25}
          />
        </div>

        <p className={styles.social_text}>VICTOR ALALUF</p>
      </a>
    </div>
  );
};

export default SocialMedia;
