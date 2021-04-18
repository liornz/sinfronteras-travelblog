import React, { useRef, useState, useEffect } from 'react';
import { enteredCommentData } from '../../lib/types';
import styles from './new-comment.module.scss';

interface Props {
  onAddComment: (comment: enteredCommentData) => void;
}

const NewComment: React.FC<Props> = (props) => {
  const { onAddComment } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInvalid(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isInvalid]);

  const emailInputRef = useRef<HTMLInputElement>();
  const nameInputRef = useRef<HTMLInputElement>();
  const commentInputRef = useRef<HTMLTextAreaElement>();

  function submitCommentHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredComment = commentInputRef.current!.value;

    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValidEmail = pattern.test(enteredEmail);

    if (
      !isValidEmail ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
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
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef as React.LegacyRef<HTMLInputElement>}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            ref={nameInputRef as React.LegacyRef<HTMLInputElement>}
          />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          rows={5}
          ref={commentInputRef as React.LegacyRef<HTMLTextAreaElement>}
        ></textarea>
      </div>
      {isInvalid ? (
        <p>Please enter a valid email address, name and comment!</p>
      ) : (
        <p style={{ color: '#9c9c9c' }}>.</p>
      )}
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default NewComment;
