import VideoCard from "../video-elements/video-card";
import styles from "./hero.module.scss";
import { useTranslation } from "next-i18next";

interface Props {}

const Hero: React.FC<Props> = (props) => {
  const {} = props;
  const { t } = useTranslation("common");

  const aboutText = (
    <p className={styles.lead}>
      <strong>{t("metitle")}</strong>
      {t("metext")}
    </p>
  );

  return (
    <div className={styles.About}>
      <h3 className="header">{t("about")}</h3>
      <div className="header-underline"></div>
      <div className={styles.AboutContainer}>
        <div className={styles.AboutText}>{aboutText}</div>
        <div className={styles.AboutVideo}>
          <VideoCard
            youtubeId="m17_nb2weMU"
            imagePath="/images/posters/portada-la-vida-es-un-viaje.jpg"
            imageBlur="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCPR28JWmqRIuiuFL7GJRJNwJkXo+fUflW7pOj+HjpVkSL0EwIcCNMD5R/tUUVNxW6n/9k="
            imgAlt="Youtube Slide Opener - La vida es un viaje"
            width={666}
            height={375}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
