import React, { useState, useEffect } from 'react';

type notification = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
};

interface Context {
  notification: notification | null;
  showNotification: (data: notification) => void;
  hideNotification: () => void;
}

const NotificationContext = React.createContext<Context>({
  notification: null,
  showNotification: function (notificationData: notification) {},
  hideNotification: function () {},
});

export const NotificationContextProvider: React.FC = (props) => {
  const [
    activeNotification,
    setActiveNotification,
  ] = useState<notification | null>(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: notification) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
