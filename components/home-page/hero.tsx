import VideoCard from '../video-elements/video-card'; 
import styles from './hero.module.scss';

interface Props {}

const Hero: React.FC<Props> = (props) => {
  const {} = props;

  const aboutText = (
    <p className={styles.lead}>
      <strong>Buen día mundo, buen día viajeros!</strong> Me llamo Victor
      Alaluf, soy artista plástico por mas de 20 años. Hoy la vida me da la
      oportunidad de recorrer este maravilloso mundo. La vida es una sola y hay
      que vivirla. Mi gran pasión es conocer nuevas culturas y rincones de este
      hermoso planeta en el cual vivimos. Prometo compartir con ustedes las
      mejores experiencias de mi vida y al mismo tiempo buscar inspirar a todos
      los que vean mis videos, para que disfruten también de una vida llena de
      viajes y experiencias. Sin fronteras esta inspirada en libros de viajes y
      cada blog cuenta con un destino diferente. Sin Fronteras va más allá de
      los destinos turísticos más populares con el fin de ofrecerles una mirada
      más auténtica de la cultura local como también participar en diferentes
      aspectos de la vida regional descubriendo nuevos horizontes en este
      maravilloso mundo sin fronteras.
    </p>
  );

  return (
    <div className={styles.About}>
      <h3 className="header">SOBRE MI</h3>
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
