import React, { useRef, useState, useEffect } from 'react';
import { enteredCommentData } from '../../lib/types';
import validateUserInput from '../../lib/validate-user-input';
import styles from './new-comment.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {
  onAddComment: (comment: enteredCommentData) => void;
}

const NewComment: React.FC<Props> = (props) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>();
  const nameInputRef = useRef<HTMLInputElement>();
  const commentInputRef = useRef<HTMLTextAreaElement>();
  const { t } = useTranslation('comments');

  const { onAddComment } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInvalid(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isInvalid]);

  const invalidInputMsg =
    t('validate');

  function submitCommentHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredComment = commentInputRef.current!.value;
    const userInput = {
      enteredEmail,
      enteredName,
      enteredMessage: enteredComment,
    };

    const inputIsValid = validateUserInput(userInput);
    if (!inputIsValid) {
      setIsInvalid(true);
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
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            ref={emailInputRef as React.LegacyRef<HTMLInputElement>}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            ref={nameInputRef as React.LegacyRef<HTMLInputElement>}
          />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="comment">
          {t('comment')}
        </label>
        <textarea
          name="comment"
          id="comment"
          rows={5}
          ref={commentInputRef as React.LegacyRef<HTMLTextAreaElement>}
        ></textarea>
      </div>
      {isInvalid ? (
        <p className={styles.err} role="alert">
          {invalidInputMsg}
        </p>
      ) : (
        <p style={{ color: '#9c9c9c' }}>.</p>
      )}
      <button className={styles.button}>
        {t('button')}
      </button>
    </form>
  );
};

export default NewComment;
