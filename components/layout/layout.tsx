import { Fragment, useContext } from 'react';
import MainHeader from './main-header';
import Notification from '../ui/notification';
import NotificationContext from '../../context/notification-context';
import styles from './layout.module.scss';
import Footer from '../footer/footer';

interface Props {}

const Layout: React.FC<Props> = (props) => {
  const {} = props;
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
      <Footer />
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
