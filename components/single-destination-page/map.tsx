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
  minWidth?: number | string;
  minHeight?: number | string;
  zoom: number;
  google_api: string;
}

const Map: React.FC<Props> = (props) => {
const { location, width, height, zoom, minWidth, minHeight, google_api } = props;
  useEffect(() => {
    if (window.google === undefined) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${google_api}`;
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
  }, [google_api, location, zoom]);

  return (
    <div
      style={{
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight
      }}
      className={styles.map_area}
      id="map"
    >
      Enter Address above and Press the Button to see Location on the Map!
    </div>
  );
};

export default Map;
