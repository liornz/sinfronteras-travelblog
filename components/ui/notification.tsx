import ReactDOM from 'react-dom';
import { useContext } from 'react';
import styles from './notification.module.scss';
import NotificationContext from '../../context/notification-context';

type status = 'success' | 'error' | 'pending';

interface Props {
  title: string;
  message: string;
  status: status;
}

const getStyles = (status: status) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  if (status === 'pending') {
    statusClasses = styles.pending;
  }
  return statusClasses;
};

const Notification: React.FC<Props> = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;
  const statusClasses = getStyles(status);

  const activeClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')!
  );
};

export default Notification;
