import React, { useRef, useState, useContext, useEffect } from 'react';
import NotificationContext from '../../context/notification-context';
import styles from './newsletter-registration.module.scss';
import { useTranslation } from 'next-i18next';

const Newsletter: React.FC = () => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const notificationCtx = useContext(NotificationContext);
  const { t } = useTranslation('footer');

  const emailInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailIsValid(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid]);

  const validateEmail = () => {
    const enteredEmail = emailInputRef.current!.value;
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValidEmail = pattern.test(enteredEmail);
    if (!isValidEmail) {
      setEmailIsValid(false);
      emailInputRef.current!.value = '';
      throw new Error('Invalid Email Input!');
    }
  };

  function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      validateEmail();
    } catch (error) {
      return;
    }

    const sendEmailtoAPI = async () => {
      const enteredEmail = emailInputRef.current!.value;
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          body: JSON.stringify({ email: enteredEmail }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          notificationCtx.showNotification({
            title: 'Success!',
            message: data.message || 'Successfully registered for newsletter',
            status: 'success',
          });
        } else {
          const data = await response.json();
          throw new Error(data.message || 'Something went wrong!');
        }
      } catch (error) {
        if (error instanceof Error) {
          notificationCtx.showNotification({
            title: 'Error!',
            message: error.message || 'Error registering for newsletter',
            status: 'error',
          });
        }
      }
    };
    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter',
      status: 'pending',
    });
    sendEmailtoAPI();
    emailInputRef.current!.value = '';
  }

  const emailInvalidMsg = t('validate');

  return (
    <div className={styles.container}>
      <p>
        <strong>{t('newsletter-main')}</strong>
      </p>
      <p>{t('newsletter-sub')}</p>
      <form onSubmit={registrationHandler}>
        <input
          type="email"
          id="user-email"
          ref={emailInputRef as React.LegacyRef<HTMLInputElement>}
          placeholder={t('placeholder')}
        />
        <button>{t('button')}</button>
      </form>
      {!emailIsValid && <p>{emailInvalidMsg}</p>}
    </div>
  );
};

export default Newsletter;
