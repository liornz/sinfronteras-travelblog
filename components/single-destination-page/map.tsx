import { useEffect } from 'react';
import styles from './map.module.scss';

interface Props {
  location:
    | {
        lat: number;
        lng: number;
      }
    | undefined;
  width: number | string;
  height: number | string;
  zoom: number;
}

const GOOGLE_API_KEY = '';

const Map: React.FC<Props> = ({ location, width, height, zoom }) => {
  useEffect(() => {
    if (window.google === undefined) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${GOOGLE_API_KEY}`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode?.insertBefore(s, x);
      s.addEventListener('load', () => {
        if (location !== undefined) {
          const map = new google.maps.Map(
            document.getElementById('map')! as HTMLDivElement,
            {
              center: location,
              zoom: zoom,
            }
          );
          new google.maps.Marker({
            position: location,
            map: map,
          });
        }
      });
    } else {
      if (location !== undefined) {
        const map = new google.maps.Map(
          document.getElementById('map')! as HTMLDivElement,
          {
            center: location,
            zoom: zoom,
          }
        );
        new google.maps.Marker({
          position: location,
          map: map,
        });
      }
    }
  }, [location]);

  return (
    <div
      style={{
        width: width,
        height: height,
      }}
      className={styles.map_area}
      id="map"
    >
      Enter Address above and Press the Button to see Location on the Map!
    </div>
  );
};

export default Map;
