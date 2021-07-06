import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { enteredCommentData } from '../../lib/types';
import styles from './new-comment.module.scss';

interface Props {
  onAddComment: (comment: enteredCommentData) => void;
}

type userInput = {
  enteredEmail: string;
  enteredName: string;
  enteredComment: string;
};

const NewComment: React.FC<Props> = (props) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>();
  const nameInputRef = useRef<HTMLInputElement>();
  const commentInputRef = useRef<HTMLTextAreaElement>();

  const { onAddComment } = props;
  
  const router = useRouter();
  const locale = router.locale;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInvalid(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isInvalid]);

  const invalidInputMsg =
    locale === 'en-US'
      ? 'Please enter valid inputs!'
      : '¡Ingrese entradas válidas!';

  const validateInput = (userInput: userInput) => {
    const { enteredEmail, enteredName, enteredComment } = userInput;
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValidEmail = pattern.test(enteredEmail);

    if (
      !isValidEmail ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true);
      throw new Error('Invalid Input!');
    }
  };

  function submitCommentHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredComment = commentInputRef.current!.value;
    const userInput = {
      enteredEmail,
      enteredName,
      enteredComment,
    };

    try {
      validateInput(userInput);
    } catch (error) {
      return;
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
    emailInputRef.current!.value = '';
    nameInputRef.current!.value = '';
    commentInputRef.current!.value = '';
  }

  return (
    <form className={styles.form} onSubmit={submitCommentHandler}>
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
          ref={commentInputRef as React.LegacyRef<HTMLTextAreaElement>}
        ></textarea>
      </div>
      {isInvalid ? (
        <p className={styles.err}>{invalidInputMsg}</p>
      ) : (
        <p style={{ color: '#9c9c9c' }}>.</p>
      )}
      <button className={styles.button}>
        {locale === 'en-US' ? 'Submit' : 'Enviar'}
      </button>
    </form>
  );
};

export default NewComment;
