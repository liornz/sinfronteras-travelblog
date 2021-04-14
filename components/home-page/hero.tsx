import { useRouter } from 'next/router';
import VideoCard from '../video-elements/video-card'; 
import styles from './hero.module.scss';

interface Props {}

const Hero: React.FC<Props> = (props) => {
  const {} = props;
  const router = useRouter();
  const locale = router.locale;

  const aboutText =
    locale === 'es-AR' ? (
      <p className={styles.lead}>
        <strong>Buen día mundo, buen día viajeros!</strong> Me llamo Victor
        Alaluf, soy artista plástico por mas de 20 años. Hoy la vida me da la
        oportunidad de recorrer este maravilloso mundo. La vida es una sola y
        hay que vivirla. Mi gran pasión es conocer nuevas culturas y rincones de
        este hermoso planeta en el cual vivimos. Prometo compartir con ustedes
        las mejores experiencias de mi vida y al mismo tiempo buscar inspirar a
        todos los que vean mis videos, para que disfruten también de una vida
        llena de viajes y experiencias. Sin fronteras esta inspirada en libros
        de viajes y cada blog cuenta con un destino diferente. Sin Fronteras va
        más allá de los destinos turísticos más populares con el fin de
        ofrecerles una mirada más auténtica de la cultura local como también
        participar en diferentes aspectos de la vida regional descubriendo
        nuevos horizontes en este maravilloso mundo sin fronteras.
      </p>
    ) : (
      <p className={styles.lead}>
        <strong>Good Day World, Good Day Travellers!</strong> Welcome to my
        Travel Blog - Sin Fronteras. My name is Victor Alaluf. I have been
        working as a plastic artist for over 20 years. Today life has given me
        the opportunity to travel and share this experience with others. We live
        only once and we must make the best of it. My greatest passion is to get
        to know new cultures and corners of this beautiful planet on which we
        live. I promise to share with you the best experiences of my life and at
        the same time seek to inspire everyone who watches my videos, so that
        they can also enjoy a life full of travel and experiences. Sin Fronteras
        (Without Boundaries) is inspired by travel books and each blog has a
        different destination. Sin Fronteras goes beyond the most popular
        tourist destinations in order to offer you a more authentic view of the
        local culture as well as participate in different aspects of regional
        life discovering new horizons in this wonderful world without
        Boundaries.
      </p>
    );

  return (
    <div className={styles.About}>
      <h3 className="header">ABOUT ME</h3>
      <div className="header-underline"></div>
      <div className={styles.AboutContainer}>
        <div className={styles.AboutText}>{aboutText}</div>
        <div className={styles.AboutVideo}>
          <VideoCard
            youtubeId="m17_nb2weMU"
            imagePath="/images/posters/portada-la-vida-es-un-viaje.jpg"
            imgAlt="Youtube Slide Opener - La vida es un viaje"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
