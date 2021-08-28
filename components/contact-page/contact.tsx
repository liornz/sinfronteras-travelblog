import React, { useRef, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import NotificationContext from '../../context/notification-context';
import validateUserInput from '../../lib/validate-user-input';
import styles from './contact.module.scss';
import { enteredMessageData } from '../../lib/types';

const Contact: React.FC = () => {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>();
  const nameInputRef = useRef<HTMLInputElement>();
  const messageInputRef = useRef<HTMLTextAreaElement>();

  const router = useRouter();
  const locale = router.locale;
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInvalid(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isInvalid]);

  const sendUserMessageToAPI = async (messageData: enteredMessageData) => {
    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        body: JSON.stringify(messageData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        notificationCtx.showNotification({
          title: 'Success!',
          message: data.message || 'Successfully entered your comment',
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
          message: error.message || 'Error saving comment',
          status: 'error',
        });
      }
    }
  };

  function submitMessageHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredMessage = messageInputRef.current!.value;
    const userInput = {
      enteredEmail,
      enteredName,
      enteredMessage,
    };

    const inputIsValid = validateUserInput(userInput);
    if (!inputIsValid) {
      setIsInvalid(true);
      return;
    }

    sendUserMessageToAPI({
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    });
    emailInputRef.current!.value = '';
    nameInputRef.current!.value = '';
    messageInputRef.current!.value = '';
  }

  return (
    <div className={styles.container}>
      <h1>{locale === 'en-US' ? 'Contact Me' : 'Contactame'}</h1>
      <form className={styles.form} onSubmit={submitMessageHandler}>
        <div className={styles.row}>
          <div className={styles.control}>
            <label htmlFor="email">
              {locale === 'en-US' ? 'Your Email' : 'Tu Correo Electronico'}
            </label>
            <input
              type="email"
              id="email"
              ref={emailInputRef as React.LegacyRef<HTMLInputElement>}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">
              {locale === 'en-US' ? 'Your Name' : 'Tu Nombre'}
            </label>
            <input
              type="text"
              id="name"
              ref={nameInputRef as React.LegacyRef<HTMLInputElement>}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">
            {locale === 'en-US' ? 'Your Message' : 'Tu Mensaje'}
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            ref={messageInputRef as React.LegacyRef<HTMLTextAreaElement>}
          ></textarea>
        </div>
        {isInvalid ? (
          <p className={styles.error}>
            {locale === 'en-US'
              ? 'Please enter a valid email address, name and message!'
              : 'Por favor, introduzca una dirección de correo electrónico válida, nombre y mensaje!'}
          </p>
        ) : (
          <p style={{ color: '#9c9c9c' }}>.</p>
        )}
        <button className={styles.button}>
          {locale === 'en-US' ? 'Submit' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
