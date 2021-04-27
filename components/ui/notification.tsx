import ReactDOM from 'react-dom';
import { useContext } from 'react';
import styles from './notification.module.scss';
import NotificationContext from '../../context/notification-context';

interface Props {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending'
}

const Notification: React.FC<Props> = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

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

  const activeClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications')!);
}

export default Notification;
