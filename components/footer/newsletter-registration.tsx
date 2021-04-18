import React, { useRef, useState, useContext, useEffect } from 'react';
import NotificationContext from '../../context/notification-context';
import styles from './newsletter-registration.module.scss';
import { useRouter } from 'next/router';

const Newsletter: React.FC = () => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const notificationCtx = useContext(NotificationContext);
  const router = useRouter();
  const locale = router.locale;
  const emailInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailIsValid(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid]);

  function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;

    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValidEmail = pattern.test(enteredEmail);
    if (!isValidEmail) {
      setEmailIsValid(false);
      emailInputRef.current!.value = '';
      return;
    }

    const sendEmailtoAPI = async () => {
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
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Error registering for newsletter',
          status: 'error',
        });
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

  return (
    <div className={styles.container}>
      <h3>
        {locale === 'en-US'
          ? 'SUBSCRIBE TO THE NEWSLETTER'
          : 'SUSCRÍBETE AL BOLETÍN INFORMATIVO'}
      </h3>
      <p>
        {locale === 'en-US'
          ? 'Join our community to receive useful information and tips'
          : 'Únase a nuestra comunidad para recibir información y consejos útiles'}
      </p>
      <form onSubmit={registrationHandler}>
        <input
          type="email"
          id="email"
          ref={emailInputRef as React.LegacyRef<HTMLInputElement>}
          placeholder={
            locale === 'en-US' ? 'Email Address' : 'Correo Electrónico'
          }
        />
        <button>{locale === 'en-US' ? 'JOIN' : 'JUNTAR'}</button>
      </form>
      {!emailIsValid && <p>Please Fill in a Valid Email!</p>}
    </div>
  );
};

export default Newsletter;
